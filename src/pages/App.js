import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedBackground from '../components/Post/FeedBackground/FeedBackground';
import MainPage from '../pages/MainPage/MainPage';
import FeedCard from '../components/Post/FeedCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post' element={<FeedBackground />} />
        <Route path='/post/id' element={<FeedCard />} />
      </Routes>
    </Router>
  );
}

export default App;
