import { useEffect, useState } from 'react';
import FeedCardList from '../components/Post/FeedCardList';
const BASE_URL = 'https://openmind-api.vercel.app/6-14/';

async function getQuestion(order = 'createdAt') {
  const query = `order=${order}`;
  const response = await fetch(`${BASE_URL}subjects/5718/questions/?${query}`);
  const body = await response.json();
  return body;
}

function PostCardList() {
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b.createdAt - a.createdAt);

  const handleLoad = async () => {
    const { results } = await getQuestion();
    setItems(results);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <FeedCardList items={sortedItems}></FeedCardList>
    </div>
  );
}

// 이 페이지가 feedbg라고 가정
export default PostCardList;
