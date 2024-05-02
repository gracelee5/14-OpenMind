import React, { useState } from 'react';

const UserIdInputBox = () => {
  const [userId, setUserId] = useState('');

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        id='userId'
        placeholder='이름을 입력하세요'
        value={userId}
        onChange={handleInputChange}
      />
    </div>
  );
};
export default UserIdInputBox;
