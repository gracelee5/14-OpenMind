import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
function AnswerEdit() {
  const [text, setText] = useState('');
  const { questionId } = useParams();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text) {
      postData(questionId)
        .then((data) => {
          console.log('POST 요청 응답:', data);
        })
        .catch((error) => {
          console.error('POST 요청 오류:', error);
        });
    }
  };

  async function postData(
    questionId,
    //questionId = 9795,
    url = `https://openmind-api.vercel.app/6-14/questions/${questionId}/answers/`,
    data = {
      questionId: questionId, // 이 값을 실제로 적절한 값으로 변경해야 합니다.
      content: text,
      isRejected: false, // isRejected를 기본값인 false로 설정합니다.
      team: '6-14', // 적절한 팀 값을 지정해야 합니다.
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
      <Button onClick={handleSubmit} disabled={!text}>
        답변 완료
      </Button>
      <RejectButton>답변 거절</RejectButton>
    </Section>
  );
}

export default AnswerEdit;
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
