import styled from 'styled-components';
import Catpicture from '../images/Catpictured.svg';
import QuestionMark from '../images/QuestionMark.svg';
import { Link } from 'react-router-dom';

const AnswerBox = styled.button`
  width: 220px;
  height: 187px;
  border-radius: 16px;
  background-color: white;
  position: relative;
`;

const CatBox = styled.div`
  position: absolute;
  align-items: flex-end;
  font-family: 'Pretendard';
  font-size: 20px;
  width: 180;
  line-height: 25px;
`;

const ImgBox = styled.div`
  position: absolute;
  top: 10px;
  bottom: 170px;
  width: 60px;
  height: 60px;
`;

const CatQuestion = styled.div`
  position: absolute;
  bottom: 10px;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountNumber = styled.span`
  position: relative;
  left: 100px;
`;

const GlobalSection = styled.div`
  position: relative;
  left: 200px;
  right: 200px;
  width: 940px;
  height: 474px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function AnswerFeed() {
  return (
    <GlobalSection>
      <AnswerBox>
        <ImgBox>
          <img src={Catpicture} alt='고양이 사진' />
        </ImgBox>

        <CatBox>아초는 고양이</CatBox>

        <CatQuestion>
          <img src={QuestionMark} alt='questionmark' />
          <Link to='/Post'> 받은 질문 </Link>
          <CountNumber> 9개 </CountNumber>
        </CatQuestion>
      </AnswerBox>

      <AnswerBox>
        <ImgBox>
          <img src={Catpicture} alt='고양이 사진' />
        </ImgBox>

        <CatBox>아초는 고양이</CatBox>

        <CatQuestion>
          <img src={QuestionMark} alt='questionmark' />
          <Link to='/Post'> 받은 질문 </Link>
          <CountNumber> 9개 </CountNumber>
        </CatQuestion>
      </AnswerBox>

      <AnswerBox>
        <ImgBox>
          <img src={Catpicture} alt='고양이 사진' />
        </ImgBox>

        <CatBox>아초는 고양이</CatBox>

        <CatQuestion>
          <img src={QuestionMark} alt='questionmark' />
          <Link to='/Post'> 받은 질문 </Link>
          <CountNumber> 9개 </CountNumber>
        </CatQuestion>
      </AnswerBox>
      <AnswerBox>
        <ImgBox>
          <img src={Catpicture} alt='고양이 사진' />
        </ImgBox>

        <CatBox>아초는 고양이</CatBox>

        <CatQuestion>
          <img src={QuestionMark} alt='questionmark' />
          <Link to='/Post'> 받은 질문 </Link>
          <CountNumber> 9개 </CountNumber>
        </CatQuestion>
      </AnswerBox>
      <AnswerBox>
        <ImgBox>
          <img src={Catpicture} alt='고양이 사진' />
        </ImgBox>

        <CatBox>아초는 고양이</CatBox>

        <CatQuestion>
          <img src={QuestionMark} alt='questionmark' />
          <Link to='/Post'> 받은 질문 </Link>
          <CountNumber> 9개 </CountNumber>
        </CatQuestion>
      </AnswerBox>
    </GlobalSection>
  );
}

export default AnswerFeed;
