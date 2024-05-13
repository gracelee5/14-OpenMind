import React, { useEffect, useState, useRef } from 'react';
import FeedCardList from '../components/Post/FeedCardList';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://openmind-api.vercel.app/6-14/';
const PAGE_SIZE = 5; // 한 번에 가져올 항목 수

async function getQuestions(postId = 5718, order = 'createdAt', offset = 0) {
  const query = `order=${order}&offset=${offset}&limit=${PAGE_SIZE}`;
  const response = await fetch(
    `${BASE_URL}subjects/${postId}/questions/?${query}`
  );
  const body = await response.json();
  return body;
}

function PostCardList() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sortedItems = items.sort((a, b) => b.createdAt - a.createdAt);
  const { subjectId } = useParams();
  const pageOffset = useRef(0); // 페이지 오프셋
  const isFirstLoad = useRef(true); // 처음 로드 여부를 기록

  const handleLoad = async () => {
    setIsLoading(true);
    const { results } = await getQuestions(
      subjectId,
      'createdAt',
      pageOffset.current
    );
    if (results.length > 0) {
      setItems((prevItems) => [...prevItems, ...results]);
      pageOffset.current += PAGE_SIZE; // 다음 페이지 오프셋 설정
    } else {
      setHasMore(false); // 더 이상 가져올 데이터가 없음을 표시
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isFirstLoad.current) {
      // 컴포넌트가 처음 마운트될 때만 호출
      handleLoad();
      isFirstLoad.current = false; // 다음에 호출되지 않도록 설정
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectId]); // subjectId가 변경될 때마다 호출

  const handleScroll = () => {
    if (!isLoading && hasMore) {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        handleLoad(); // 스크롤 이벤트에서 호출
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, hasMore]);

  return (
    <div>
      <FeedCardList items={sortedItems} SubjectId={subjectId}></FeedCardList>
      {isLoading && <p>로딩이다.....</p>}
      {!isLoading && !hasMore && <p>이젠 없어... 그만해...</p>}
    </div>
  );
}

export default PostCardList;
