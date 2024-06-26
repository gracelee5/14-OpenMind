# 1. 프로젝트 소개

🐻 안녕하세요! 저희는 코드잇 스프린트 6기 14팀입니다!

**✨오픈 마인드✨**는

질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼입니다.

🔗 배포 URL: http://14-openmind.s3-website.ap-northeast-2.amazonaws.com/
---
## 📍 목차

 [1. 프로젝트 소개](#1-프로젝트-소개)  
 [2. 팀원 소개](#2-팀원소개)  
 [3. 개발 기간](#3-개발기간)  
 [4. 프로젝트 목표](#4-프로젝트-목표)  
 [5. 협업 방법](#5-협업-방법)  
 [6. 컨벤션](#6-컨벤션)  
 [7. 개발 환경](#7-개발환경)  
 [8. 폴더 구조](#8-폴더-구조)  
 [9. 역할분담](#9-역할분담)  
 [10. 기능시연](#10-기능시연)  
 [11. 코드 특징과 구현 방식](#11-코드-특징과-구현-방식)  
 [12. 트러블 슈팅](#12-트러블-슈팅)  
 [13. 프로젝트 후기](#13-프로젝트-후기)  

---
# 2. 팀원소개


|이경원|박지민|유기주|안상균|이소정|
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/gracelee5/14-OpenMind/assets/113881477/4cb2839b-4e68-4c31-82ba-22c84f4c0777" width="150" height="150"> |<img src="https://github.com/gracelee5/14-OpenMind/assets/113881477/b177a0b2-0c4c-4b84-8584-5acf6e483c63" width="180" height="150"> |<img src="https://github.com/gracelee5/14-OpenMind/assets/113881477/5ba7c660-f7d4-48d5-82b7-0b95e0b77b55" width="150" height="150"> |<img src="https://github.com/gracelee5/14-OpenMind/assets/113881477/5c62f30c-0d70-42b9-bc44-062883eca3c0" width="150" height="150"> |<img src="https://github.com/gracelee5/14-OpenMind/assets/113881477/51e670e1-cf30-44d5-a0e6-b328a7da3159" width="120" height="150"> |
|🔗[Github](https://github.com/gracelee5)|🔗[Github](https://github.com/JiminN2)|🔗[Github](https://github.com/YUKIJOO)|🔗[Github](https://github.com/emotigom)|🔗[Github](https://github.com/thatsrightcat)|
|팀장, 포스트 페이지|메인페이지|리스트 페이지|모달 페이지, 발표|포스트 페이지|




# 3. 개발기간

- 기능구현 : 24/04/30 (화) ~ 24/05/15 (수)
- 프로젝트 발표 : 5/16 (목) 10:00 ~ 15:00
- 리팩토링 :5/17

# 4. 프로젝트 목표

1. 완성
    - 일단은 기능의 완성에 집중했습니다. react를 사용하여 처음 팀 프로젝트를 하는 만큼 문제없이 기능이 작동하는 것을 목표로 삼았습니다.
2. 협업
    - 다양한 배경을 가진 팀원들과의 협업을 통해 소프트웨어 개발에 필요한 다양한 관점을 이해하고 능력을 향상시키고자 했습니다.
    - 협업 능력을 향상시키기 위해 팀원과 함께 Notion과 Github에서 작업하고 소통하여 Notion과 Github 사용에 익숙해지는 것을 목표로 하였습니다.
3. 경험
    - 다양한 실패 경험을 쌓는 것을 목표로 했습니다. 발생할 수 있는 오류 등 시행착오를 겪으며, 각자 겪은 오류를 공유하였습니다.

# 5. 협업 방법

- 노션 워크스페이스 사용 : 해결해야 할 과제와 담당자를 정하였고, 미해결, 해결, 해결중 상태를 기록하였습니다.
- 디스코드 : 매일 데일리 미팅을 진행하며 작업상황을 공유하고 문제를 공유하여 해결할 수 있도록 하였습니다.
- Github : 기능별로 브랜치를 만들어 PR을 요청한 뒤 상의후에 코드를  개선했습니다.
- 브랜치를 생성할 때 브랜치 명을 `feature/{기능}`으로 생성하여 어떤 기능을 개발한 브랜치인지 쉽게 알 수 있도록 하였습니다.

# 6. 컨벤션

- 커밋 컨벤션
    
    https://www.conventionalcommits.org/ko/v1.0.0/
    
    ```html
    - feat: 새로운 기능 구현
    - fix: 오류 수정
    - docs: readme.md, json 파일 등 수정, 라이브러리 설치(문서 관련)
    - refactor: 코드 리팩토링
    - chore: 빌드 부분 혹은 패키지 매니저 수정 사항
    - rename: 파일 혹은 폴더명 수정, 옮기기
    - remove: 파일 삭제
    ```
    

# 7. 개발환경
<div>
  <img src="https://img.shields.io/badge/react-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=ffd35b" />
  <img src="https://img.shields.io/badge/github-181717.svg?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Notion-F3F3F3.svg?style=for-the-badge&logo=notion&logoColor=black" />
  <img src="https://img.shields.io/badge/Discord-737DF8?style=for-the-badge&logo=discord&logoColor=#737DF8"/>
  </div>
  
# 8. 폴더 구조

```markdown
└── 📁**14-OpenMind**
    ├── .eslintrc.js
    ├── .gitignore
    ├── .gitmodules
    ├── 📁.husky
    ├── .prettierrc
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── yarn.lock
    ├── 📁**public**
    └── 📁**src**
        ├── 📁**api**
        ├── 📁**components**
        │   ├── 📁Post
        │   │   ├── 📁**FeedBackground**
        │   │   ├── 📁**Modal**
        ├── 📁hooks
        ├── 📁images
        │   ├── 📁icons
        └── **📁pages**
            ├── 📁**MainPage**
```

# 9. 역할분담

### 이경원

- 프로젝트 기초 세팅 (폴더구조 생성 및 eslint, prettier 설정)
- Post 페이지 담당
    - 포스트 피드 배경 구현
    - 답변, 답변 거절, 수정 기능 구현
- 페이지 간 연결 기능 구현
- PR 확인 후 머지 (머지하는 도중 충돌이나 오류 발생 시 오류 해결)

### 박지민

- Main 페이지 담당
- Feed 생성하고 페이지 이동 구현

### 안상균

- Modal 컴포넌트 담당
    - Post의 질문하기, 삭제하기, 케밥 버튼 제작과 연결
- 메타태그 설정

### 유기주

- List 페이지 담당
    - Usercard 생성
    - List 페이지 Pagination 구현

### 이소정

- Post 페이지 담당
- Post의 FeedCard컴포넌트 구현
    - 최신순으로 FeedCard 보여주도록 구현
    - 좋아요, 싫어요 버튼 Create, Update
    - 답변, 미답변 배지 구현
    - 무한 스크롤 구현
    - formatData 함수로 작성 날짜 구현

# 10. 기능시연

http://14-openmind.s3-website.ap-northeast-2.amazonaws.com/

[동영상](https://14-openmind.s3.ap-northeast-2.amazonaws.com/2.mp4)



# 11. 코드 특징과 구현 방식

1. **컴포넌트 구조화**
- api 폴더에 사용되는 api를 일괄 관리 했습니다.
- **목적에 따라** 기능적 컴포넌트와 스타일드 **컴포넌트명을 구분**하여 사용 했습니다.
1. **더 나은 사용자 경험**
- **로딩 스낵바**를 추가하여 사용자가 **로딩 상태를 인지**할 수 있도록 했습니다.
- **로컬에 이미** 생성된 피드가 있는 경우 알림 표시로 안내해주고 **본인 피드로 이동**하도록 했습니다.
- 좋아요 버튼 클릭 시 피드 전체가 아니라 버튼 **부분만 리렌더링** 되도록 하였습니다.
- 피드의 변화가 감지되면 **실시간 리렌더링**을 하도록 업데이트 핸들러를 추가했습니다.
- 실수로 피드 삭제 버튼을 누르는 것을 방지하기 위해 **확인 모달창**을 띄우도록 하였습니다.
1. **useParams 사용**
- useParams를 이용해 사용자의 id를 받아와 정보를 띄워줍니다. 현재 **주소창의 피드 id 값**과 **로컬스토리지의 id 값**을 비교하여 일치하면 답변 페이지로 이동하도록 하였습니다.

# 12. 트러블 슈팅

1. 자식 요소가 아닌 객체를 렌더링할 때 발생하는 오류
- **문제  :**
    - objects are not valid as a react child 에러가 뜨며, 화면 상에 렌더링이 되지 않는 현상이 있었습니다.
    - 문자열, 숫자 또는 React 구성 요소와 같은 자식 요소가 아닌 객체를 렌더링할 때 발생하는 오류라고 하였습니다.
- **원인 :**
    - `{item.answer}` 이렇게 적었던 코드에서 에러가 났습니다.
    api에 `null` 값이어서 문제없이 작동했으나, 
    answer에 값을 넣으니 `null` 이 아니라 객체가 되어있어서 오류가 발생했습니다.
- **해결 :**
    - `{item.answer?.content}` 으로 수정하였습니다.
    **`item.answer`**가 존재하고 그 안에 **`content`** 속성이 있다면 해당 내용을 렌더링하고, 그렇지 않다면 아무것도 렌더링하지 않도록 하였습니다.

2. **List 페이지 객체 정보 렌더링 오류**
- **문제  :**
    - api에서 객체 정보를 불러오긴 하였지만, 화면 상에 렌더링이 되지 않는 현상이 있었습니다.
- **원인 :**
    - ****usercard 컴포넌트를 생성해서 객체를 넣어주는 과정에서 프로퍼티 값을 잘못 넣어주어 인식을 못하였습니다.
- **해결 :**
    - 사용해야 하는 프로퍼티 값을 usercard 태그에 제대로 넣어주어, 객체 정보들을 받아올 수 있게 해주었습니다.


3. 답변 수정 후 변경된 내용 반영 관련 내용
- **문제 :**
    - 답변 수정 후 변경된 내용을 바로 화면에 렌더링하고 싶은데 새로고침을 해야만 반영된 화면이 보이는 문제가 있었습니다.
- **원인 :**
    - 수정한 내용을 반영하기 위해서는 답변 수정 컴포넌트에서 상위 컴포넌트로 수정했다는 사실을 전달하고 답변 내용을 다시 불러와야 하는데 그렇지 않았기 때문에 발생했습니다.
- **해결 :**
    - FeedCardList에서 AnswerEdit 컴포넌트를 불러올 때 props로 onEditSuccess 함수를 전달해서 답변을 수정할 경우 함수를 실행하도록 하였습니다. onEditSuccess 함수에는 답변 내용을 받아오는 코드를 넣었습니다.
    
    
4. Main 페이지
- **문제 :**
    - 배경 이미지가 잘리고 원하는 크기 대로 crop 되어 나오게 하는 데 문제가 있었습니다.
- **원인:**
    - backgroundImg 를 cover 로 주었습니다.
- **해결**
    - backgroundImg 속성을 쓰지 않고 img태그에 url 을 사용했습니다.

5. REST API 요청 반응없음
- **문제 :**
    - 버튼을 클릭하면 삭제 요청이 서버에 전송되어야 했으나 크롬 개발자 Network란에 아무 반응이 없었습니다.
- **원인 :**
    - API요청을 버튼이 아닌 SVG 파일에 준 것이 원인이었습니다. 해당 이미지는 클릭이 되지 않는 문제 또한 있었습니다.
- **해결 :**
    - API를 올바른 위치의 태그에서 요청해서 해결했습니다.

# 13. 프로젝트 후기

### 이경원

- 팀장으로서 프로젝트의 전반적인 세팅과 관리를 하면서 깃 사용법과 오류를 해결하는 방법을 배우게 되었습니다. 또, 팀원들이 올린 PR을 확인하고 머지하면서 타인이 쓴 코드를 많이 접하게 되었고, 이로 인해 코드를 읽는 능력이 향상된 것 같아 좋았습니다.
- 강의로 들었던 부분들을 실제로 개발할 때 직접 사용해보면서 이해도가 높아졌습니다.
- 어려운 부분이 있으면 팀원들에게 공유하고, 도와줄 수 있는 부분은 도와주는 과정에서 혼자서 개발했더라면 쉽게 지쳤을텐데 팀원들과 함께 개발하니 의지가 되었습니다.

### 박지민

- 사소한 코드 오류부터 git merge 오류까지 다양한 시행착오가 있었습니다. 저에게는 모두 넘을 수 없을 것 같은 큰 산처럼 느껴졌습니다. 그러나 멘토님과 팀원들에게 공유하고 천천히 문제를 해결할 수 있었습니다. 덕분에 의지를 다시 다지기도 했고 끈기 있고 성실한 팀원들로부터 많이배울 수 있었습니다.
- 리액트와 깃허브에 대한 이해도가 훨씬 높아진 것 같습니다.
- 마지막에 기능을 합치는 과정에서 생긴 오류를 해결하는 것이 어려워서 조금 아쉬움이 남았습니다

### 안상균

- Git 사용이 가장 어려웠습니다. 강사님께 받은 설명 사이트를 보며 브랜치를 활용해 봤으나 실수로 main에 합병해버리기 일쑤였습니다. 저는 버전 관리도 아직 어려워서 에러나는 버전에 갇히기라도 하면 작업이 어려웠습니다.
- 그럼에도 성실하고 능력 좋은 팀원분들을 만나서 Git사용법을 다시 배우고, 차근차근 완성해나가는 과정이 보람찼습니다. 초반부터 열심히 달리면서 제작하시는 모습을 보면서 개발자로서의 앞날이 기대가 되었습니다.

### 유기주

- 제가 맡고 있는 부분에서 잘 알지 못하여 오래 끌게 되면 팀원들에게 피해를 준다는 것을 깨달았습니다. 해서 팀원 뿐만 아니라 누구에게라도 질문을 많이 해서 소통하면서 서로 알고 있는 것들에 대하여 공유하여 문제를 빠르게 해결해나가는 것이 중요하다는 생각이 들었습니다.
- 제 길이 아니라는 생각이 많이 들었지만, 더 열심히 배우고 공부해야겠다는 생각을 가지게 되었습니다.
- 페이지 하나를 구성하는 코드를 만들 때, 눈에는 쉽게 보일 수 있지만, 그 안에 코드들은 복잡하고 다양한 로직에 대하여 생각하고 코드를 만들어야 된다는 생각이 들었습니다.
- 프로젝트를 하면서 강의를 들었던 것을 정리하고, 더 찾아보면서 많은 것들을 배웠습니다.

### 이소정

- 팀원들과 협업이 재미있었습니다. 어렵거나 복잡한 내용은 바로바로 팀원들과 상의하여 조율하였습니다.
- 프로젝트의 각 부분을 철저히 테스트하는 것이 중요하다는 것을 배웠습니다.
- 어떤 부분을 모르고 있는지 잘 알게 되어 성장에 도움이 되었습니다.
- 완성을 목적으로 하였기 때문에 코드를 효율적으로 관리하지 못한 점이 있었습니다. 다음번에는 코드의 중복을 줄이고 공통적으로 사용할 수 있는 컴포넌트와 모듈을 더 잘 활용하고 싶습니다.
