import React from 'react';
import { useParams } from 'react-router-dom';
import FeedBackground from '../components/Post/FeedBackground/FeedBackground';
import QuestionButton from '../components/Post/QuestionButton';
import DeleteButton from '../components/Post/DeleteButton';

function PostPage() {
  const { id } = useParams();

  return (
    <div style={{ position: 'relative' }}>
      <FeedBackground id={id} />
      <DeleteButton />
      <QuestionButton />
    </div>
  );
}

export default PostPage;
