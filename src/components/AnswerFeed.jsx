import styled from 'styled-components';
import Catpicture from '../images/Catpictured.svg';

const AnswerBox = styled.button`
  width: 220px;
  height: 187px;
  border-radius: 16px;
  background-color: white;
`;

const CatBox = styled.div`
  align-items: flex-end;
  font-family: 'Pretendard';
  font-size: 20px;
  width: 200;
  line-height: 25px;
`;

const ImgBox = styled.div`
  width: 5%;
  height: 10;
`;

const WordBox = styled.p`
display: flex:
justify-content: space-around;
`;

function AnswerFeed() {
  return (
    <section>
      <AnswerBox>
        <ImgBox>
          <img src={Catpicture} alt='아초는 고양이' />
        </ImgBox>
        <CatBox>아초는 고양이</CatBox>

        <WordBox>받은 질문 9개</WordBox>
      </AnswerBox>
    </section>
  );
}

export default AnswerFeed;
