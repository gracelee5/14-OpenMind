import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from './PostPage';
import MainPage from './MainPage/MainPage';
import ListPage from './ListPage';
import PostAnswerPage from './PostAnswerPage';

// post/id 페이지
import PostCardList from './PostCardList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post' element={<PostPage />} />
        <Route path='/post/{id}/answer' element={<PostAnswerPage />} />
        <Route path='/list' element={<ListPage />} />

        {/* post/id 페이지 */}
        <Route path='/post/:id' element={<PostCardList />} />
      </Routes>
    </Router>
  );
}

export default App;
