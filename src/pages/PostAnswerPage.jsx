import React from 'react';
import FeedBackground from '../components/Post/FeedBackground/FeedBackground';
import DeleteButton from '../components/Post/DeleteButton';
import { useParams } from 'react-router-dom';

function PostAnswerPage() {
  const { id } = useParams();
  return (
    <div style={{ position: 'relative' }}>
      <FeedBackground id={id} />
      <DeleteButton />
    </div>
  );
}

export default PostAnswerPage;
