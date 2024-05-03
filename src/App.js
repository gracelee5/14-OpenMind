import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListHeader from './components/ListHeader';
import DropDownButton from './components/DropdownButton';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<ListHeader />} />
        </Routes>
      </div>

      <body>
        <div>누구에게 질문할까요?</div>

        <div>
          <DropDownButton />
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
