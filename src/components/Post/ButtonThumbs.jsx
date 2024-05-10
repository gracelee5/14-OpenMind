import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import thumbsUp from '../../images/icons/thumbs-up.svg';
import thumbsDown from '../../images/icons/thumbs-down.svg';
import thumbsUpHover from '../../images/icons/thumbs-up-hover.svg';
import thumbsDownHover from '../../images/icons/thumbs-down-hover.svg';
const BASE_URL = 'https://openmind-api.vercel.app/6-14/';

const ButtonThumbs = ({ questionId, like, dislike }) => {
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
    <ButtonThumb>
      <Button onClick={() => handleClick('like')} className='like'>
        좋아요 {likeCount}
      </Button>
      <Button onClick={() => handleClick('dislike')} className='dislike'>
        싫어요 {dislikeCount}
      </Button>
    </ButtonThumb>
  );
};

export default ButtonThumbs;

const ButtonThumb = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

const Button = styled.button`
  display: inline-block;
  padding-left: 20px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 16px;
  color: #818181;
  &.like {
    background-image: url(${thumbsUp});
  }
  &.dislike {
    background-image: url(${thumbsDown});
  }

  &:hover {
    &.like {
      background-image: url(${thumbsUpHover});
      color: #1877f2;
    }
    &.dislike {
      background-image: url(${thumbsDownHover});
      color: #000000;
    }
  }
`;
