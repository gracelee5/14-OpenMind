import styled from 'styled-components';
import thumbsUp from '../../images/icons/thumbs-up.svg';
import thumbsDown from '../../images/icons/thumbs-down.svg';

function ButtonInput() {
  return (
    <>
      <ButtonThumbs>
        <img src={thumbsUp} alt='message img' />
        좋아요
      </ButtonThumbs>
      <ButtonThumbs>
        <img src={thumbsDown} alt='message img' />
        싫어요
      </ButtonThumbs>
    </>
  );
}

export default ButtonInput;

const ButtonThumbs = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #818181;
`;
