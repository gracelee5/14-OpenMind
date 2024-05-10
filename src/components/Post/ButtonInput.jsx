import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import thumbsUp from '../../images/icons/thumbs-up.svg';
import thumbsDown from '../../images/icons/thumbs-down.svg';
const BASE_URL = 'https://openmind-api.vercel.app/6-14/';

const ButtonInput = ({ questionId, like, dislike }) => {
  const [likeCount, setLikeCount] = useState(like || 0);
  const [dislikeCount, setDislikeCount] = useState(dislike || 0);

  useEffect(() => {
    getQuestions(questionId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async (reactionType) => {
    try {
      // 반응 게시
      await postReaction(questionId, reactionType);

      // 정보 가져오기
      getQuestions(questionId);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const postReaction = async (questionId, reaction) => {
    try {
      await fetch(`${BASE_URL}questions/${questionId}/reaction/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
          type: reaction,
        }),
      });
    } catch (error) {
      console.error('PUSH 요청 오류:', error);
    }
  };

  const getQuestions = async (questionId) => {
    try {
      const response = await fetch(`${BASE_URL}questions/${questionId}/`);
      const questionData = await response.json();
      setLikeCount(questionData.like);
      setDislikeCount(questionData.dislike);
    } catch (error) {
      console.error('GET 요청 오류:', error);
    }
  };

  return (
    <ButtonThumbs>
      <button onClick={() => handleClick('like')}>
        <img src={thumbsUp} alt='message img' /> 좋아요 {likeCount}
      </button>
      <button onClick={() => handleClick('dislike')}>
        <img src={thumbsDown} alt='message img' /> 싫어요 {dislikeCount}
      </button>
    </ButtonThumbs>
  );
};

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
