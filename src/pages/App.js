import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from './PostPage';
import MainPage from './MainPage/MainPage';
import FeedCard from '../components/Post/FeedCard';
import ListPage from '../components/ListPage';
import PostAnswerPage from './PostAnswerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post' element={<PostPage />} />
        <Route path='/post/id' element={<FeedCard />} />
        <Route path='/post/{id}/answer' element={<PostAnswerPage />} />
        <Route path='/list' element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
