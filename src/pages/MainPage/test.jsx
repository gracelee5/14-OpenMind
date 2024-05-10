// import { useNavigate } from 'react-router-dom';

// function getUserIdFromLocalStorage() {
//   const storedData = localStorage.getItem('user');

//   if (storedData) {
//     const dataObject = JSON.parse(storedData);
//     return dataObject.id;
//   } else {
//     return null;
//   }
// }

// function CreateFeed() {
//   const [name, setName] = useState('');
//   const navigate = useNavigate();
//   const userId = getUserIdFromLocalStorage();

//   //POST /{team}/subjects/
//   const handleSubmit = async () => {
//     if (!userId) {
//       const response = await fetch(`${BASE_URL}/subjects/`, {
//         method: 'POST',
//         body: JSON.stringify({ name, team: '6-14', userId }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();
//       const id = data.id;

//       alert(`${name}님 피드가 등록되었습니다`);

//       navigate(`/post/${id}/answer`);
//     } else {
//       const response = await fetch(`${BASE_URL}/subjects/?name=${name}`);
//       const data = await response.json();
//       const id = data.id;

//       alert(`${name}님 페이지로 이동합니다`);

//       navigate(`/post/${id}/answer`);
//     }
//   };

//   return (
//     <>
//       <Header>
//         <img alt='' src={logo} />
//       </Header>
//       <InputContainer>
//         <Input
//           type='text'
//           value={name}
//           placeholder='이름을 입력하세요'
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//         <Button onClick={handleSubmit}>질문 받기</Button>
//       </InputContainer>
//       <div>
//         <BackgroundImg src={backgroundImg} alt='' />
//       </div>
//     </>
//   );
// //

// function getUserIdFromLocalStorage() {
//     const storedData = localStorage.getItem('user');

//     if (storedData) {
//       const dataObject = JSON.parse(storedData);
//       return dataObject.id;
//     } else {
//       return null;
//     }
//   }

//   여기서 나는 로컬스토리지에서 주어진 {name} 과 동일한 name 정보가 있는지 없는지 여부를 알려주는 코드로 바꾸고 싶어

//   function getNameFromLocalStorage(name) {
//     const storedData = localStorage.getItem('users');

//     if (storedData) {
//       const dataArray = JSON.parse(storedData);
//       return dataArray.some(user => user.name === name);
//     } else {
//       return false;
//     }
//   }
