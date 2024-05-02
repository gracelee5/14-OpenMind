import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedBackground from '../components/Post/FeedBackground/FeedBackground';
import MainPage from './MainPage/MainPage';
import FeedCard from '../components/Post/FeedCard';
import ListPage from '../components/ListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<FeedBackground />} />
        <Route path='/post/id' element={<FeedCard />} />
        <Route path='/list' element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
