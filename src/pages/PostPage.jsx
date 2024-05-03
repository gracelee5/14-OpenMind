import React from 'react';
import FeedBackground from '../components/Post/FeedBackground/FeedBackground';
import QuestionButton from '../components/Post/QuestionButton';
function PostPage() {
  return (
    <div style={{ position: 'relative' }}>
      <FeedBackground />
      <QuestionButton />
    </div>
  );
}

export default PostPage;
