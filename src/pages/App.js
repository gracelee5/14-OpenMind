import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedBackground from '../components/Post/FeedBackground/FeedBackground';
import MainPage from '../pages/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post' element={<FeedBackground />} />
      </Routes>
    </Router>
  );
}

export default App;
