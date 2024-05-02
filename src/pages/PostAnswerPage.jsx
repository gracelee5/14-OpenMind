import React from 'react';
import FeedBackground from '../components/Post/FeedBackground/FeedBackground';
import { DeleteButton } from '../components/Post/DeleteButton';
function PostAnswerPage() {
  return (
    <div style={{ position: 'relative' }}>
      <FeedBackground />
      <DeleteButton />
    </div>
  );
}

export default PostAnswerPage;
