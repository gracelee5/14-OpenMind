import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListHeader from './components/ListHeader';
import ListPage from './components/ListPage';

function App() {
  return (
    <BrowserRouter>
      <ListHeader />

      <div>
        <Routes>
          <Route index element={<ListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
