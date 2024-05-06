import { BrowserRouter } from 'react-router-dom';
import ListHeader from '../components/ListHeader';
import DropDownButton from '../components/DropdownButton';
import AnswerFeed from '../components/AnswerFeed';

function ListPage() {
  return (
    <BrowserRouter>
      <div>
        <ListHeader />
      </div>

      <body>
        <div>누구에게 질문할까요?</div>

        <div>
          <DropDownButton />
        </div>

        <div>
          <AnswerFeed />
        </div>
      </body>
    </BrowserRouter>
  );
}

export default ListPage;
