import styled from 'styled-components';
import { useState } from 'react';
function AnswerInput({ questionId, onInputSuccess }) {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = async (isRejected) => {
    if (text !== '' || isRejected) {
      const contentToSend = isRejected ? '답변 거절' : text;
      try {
        const data = await postData(questionId, isRejected, contentToSend);
        console.log('POST 요청 응답:', data);
      } catch (error) {
        console.error('POST 요청 오류:', error);
      }
      onInputSuccess();
    }
  };

  async function postData(
    questionId,
    isRejected,
    content,
    url = `https://openmind-api.vercel.app/6-14/questions/${questionId}/answers/`,
    data = {
      questionId: questionId,
      content: content,
      isRejected: isRejected,
      team: '6-14',
    }
  ) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  return (
    <Section>
      <TextArea
        placeholder='답변을 입력해주세요'
        value={text}
        onChange={handleChange}
      ></TextArea>
      <Button onClick={() => handleSubmit(false)} disabled={!text}>
        답변 완료
      </Button>
      <RejectButton onClick={() => handleSubmit(true)}>답변 거절</RejectButton>
    </Section>
  );
}

export default AnswerInput;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextArea = styled.textarea`
  padding: 16px;
  gap: 10px;
  width: 560px;
  height: 186px;
  background: #f9f9f9;
  border-radius: 8px;
  border: none;
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 560px;
  height: 46px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#c7bbb5' : '#542F1A')};
  border-radius: 8px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;
const RejectButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  width: 560px;
  background-color: #b93333;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;
