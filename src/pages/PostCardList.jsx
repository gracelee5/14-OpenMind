import { useEffect, useState } from 'react';
import FeedCardList from '../components/Post/FeedCardList';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://openmind-api.vercel.app/6-14/';

async function getQuestions(postId = 5718, order = 'createdAt') {
  const query = `order=${order}`;
  const response = await fetch(
    `${BASE_URL}subjects/${postId}/questions/?${query}`
  );
  const body = await response.json();
  return body;
}

function PostCardList() {
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b.createdAt - a.createdAt);
  const { subjectId } = useParams();

  const handleLoad = async () => {
    const { results } = await getQuestions();
    setItems(results);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <FeedCardList items={sortedItems} SubjectId={subjectId}></FeedCardList>
    </div>
  );
}

// 이 페이지가 feedbg라고 가정
export default PostCardList;
