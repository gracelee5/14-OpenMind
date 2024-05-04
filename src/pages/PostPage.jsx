import React from 'react';
import { useParams } from 'react-router-dom';
import FeedBackground from '../components/Post/FeedBackground/FeedBackground';
import QuestionButton from '../components/Post/QuestionButton';

function PostPage() {
  const { id } = useParams();

  return (
    <div style={{ position: 'relative' }}>
      <FeedBackground id={id} />
      <QuestionButton />
    </div>
  );
}

export default PostPage;
