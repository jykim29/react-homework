## 1주차 과제

### 목차

- [과제 목표](#🎯-과제-목표)
- [수행 과정](#🎞-수행-과정)

### 🎯 과제 목표

- JSX 또는 React API를 사용해서 바닐라 JavaScript 프로젝트에서 구현한 인터페이스 일부 마크업 및 브라우저에 렌더링하기

### 🎞 수행 과정

#### 0. 구현할 인터페이스 - 엔터 이듬 - 게시판 페이지

#### 1. 컴포넌트 단위로 나누기

![컴포넌트단위](/readmeImages/week01_components.png)

#### 2. 프로젝트 초기 구성

##### vite 설치

```bash
pnpm add vite -D
```

##### tailwindcss, postcss, autoprefixer 설치

- tailwindcss 공식문서의 [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)를 참고하여 설치

```bash
pnpm add tailwindcss postcss autoprefixer -D
```

##### tailwind.config.js 생성

```bash
npx tailwindcss init -p
```

##### tailwind.config.js 내용 수정

- tailwindcss 클래스 생성을 위해 프로젝트 폴더 안에서 찾을 파일 설정

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ...
};
```

- 기존의 바닐라 JavaScript 프로젝트에서 사용했었던 theme 설정

##### 프로젝트 폴더 구성

```
📦week01
 ┣ 📂public
 ┃ ┗ 📂assets
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┣ 📂data
 ┃ ┣ 📂lib
 ┃ ┃ ┗ 📂utils
 ┃ ┣ 📂styles
 ┃ ┗ 📜App.jsx
 ┣ 📜.gitignore
 ┣ 📜index.css
 ┣ 📜index.html
 ┣ 📜main.js
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜postcss.config.js
 ┣ 📜README.md
 ┗ 📜tailwind.config.js
```

#### 2. JSX로 마크업

##### 시작하기 전 : index.html, index.css 및 컴포넌트에 바인딩할 데이터 객체 작성

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- 생략 -->
    <script type="module" src="/main.js"></script>
    <title>React 1주차 과제</title>
  </head>
  <body>
    <noscript>이 앱을 사용하려면 자바스크립트 활성화가 필요합니다.</noscript>    
    <div id="root"></div>
  </body>
</html>
```

```css
/* index.css */
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  font-family: "Pretendard Variable", Pretendard, "Helvetica Neue", sans-serif;
}
```

```js
// postData.js
export const postData = [
  {
    id: 0,
    title: "운동하실분",
    age: "모든연령",
    gender: "여성만",
    category: "같이해요",
    subCategory: "운동",
    created: "2024-01-05 07:16:09.482Z",
    date: "2024-01-19 12:00:00.000Z",
    myLocation: "연희동",
    count: "3",
    maxCount: "10",
  },
  {
    id: 1,
    title: "바닐라 프로젝트",
    age: "20대",
    gender: "누구나",
    category: "같이해요",
    subCategory: "프로젝트",
    created: "2024-01-05 07:16:09.482Z",
    date: "2024-01-19 12:00:00.000Z",
    myLocation: "남가좌제2동",
    count: "5",
    maxCount: "10",
  },
  {
    id: 2,
    title: "알고리즘 스터디 같이하실분",
    age: "20대",
    gender: "남성만",
    category: "같이해요",
    subCategory: "스터디",
    created: "2024-01-05 07:16:09.482Z",
    date: "2024-01-19 12:00:00.000Z",
    myLocation: "인사동",
    count: "7",
    maxCount: "20",
  },
  {
    id: 3,
    title: "영화보러가실분~",
    age: "모든연령대",
    gender: "누구나",
    category: "같이해요",
    subCategory: "취미/여가",
    created: "2024-01-05 07:16:09.482Z",
    date: "2024-01-19 12:00:00.000Z",
    myLocation: "청담동",
    count: "2",
    maxCount: "10",
  },
  {
    id: 4,
    title: "배드민턴 치실분!",
    age: "30대",
    gender: "남성만",
    category: "같이해요",
    subCategory: "운동",
    created: "2024-01-05 07:16:09.482Z",
    date: "2024-01-19 12:00:00.000Z",
    myLocation: "한남동",
    count: "3",
    maxCount: "10",
  },
  {
    id: 5,
    title: "맛집 투어 하실분",
    age: "모든연령대",
    gender: "누구나",
    category: "같이해요",
    subCategory: "음식",
    created: "2024-01-05 07:16:09.482Z",
    date: "2024-01-19 12:00:00.000Z",
    myLocation: "종로1가동",
    count: "8",
    maxCount: "10",
  },
];

// navMenuData.js
export const navMenuData = [
  {
    id: 0,
    name: "홈",
    icon: "bg-home-icon",
    link: "",
  },
  {
    id: 1,
    name: "게시판",
    icon: "bg-board_full-icon",
    link: "",
  },
  {
    id: 2,
    name: "내 근처",
    icon: "bg-near-icon",
    link: "",
  },
  {
    id: 3,
    name: "채팅",
    icon: "bg-chat-icon",
    link: "",
  },
  {
    id: 4,
    name: "나의 이듬",
    icon: "bg-my-icon",
    link: "",
  },
];
```

##### 전체를 감싸는 Container 컴포넌트 jsx 마크업

```js
import React from "react";

export default function Container({ children }) {
  return <div className="relative min-w-screen max-w-screen w-full mx-auto h-[100dvh] flex flex-col">{children}</div>;
}
```

##### header 부분 : AddressBar와 CategoryBar 컴포넌트 jsx 마크업

```js
// AddressBar.jsx
import React from "react";

export default function AddressBar() {
  return (
    <div className="flex justify-between">
      <div className="flex h-full items-center">
        <h1 className="items-center pl-3 text-label-lg font-semibold">남가좌제2동</h1>
        <button
          type="button"
          aria-label="내 동네 설정하기"
          className="direction w-10 h-10 bg-direction-icon bg-no-repeat bg-center hover:bg-gray-100 hover:rounded transition-all duration-300"></button>
      </div>
      <ul className="flex">
        <li>
          <a href="" role="button" aria-label="검색하기" className="search block w-10 h-10 bg-search-icon bg-no-repeat bg-center hover:bg-gray-100 hover:rounded transition-all duration-300"></a>
        </li>
        <li>
          <a
            id="notification"
            href=""
            role="button"
            aria-label="알림"
            className="alram block w-10 h-10 bg-alram-icon bg-no-repeat bg-center hover:bg-gray-100 hover:rounded transition-all duration-300"></a>
        </li>
      </ul>
    </div>
  );
}
```

```js
// CategoryBar.jsx
import React from "react";

export default function CategoryBar() {
  return (
    <nav className="w-full px-3 py-2 border-b border-b-contents-content-secondary">
      <ul className="flex items-center gap-1 h-[29px]">
        <li>
          <button
            id="openModal"
            className="pl-7 pr-1.5 py-1.5 leading-none text-paragraph-sm font-normal rounded-full bg-white border border-contents-content-tertiary bg-hamburger-icon bg-[6px_center] bg-no-repeat hover:brightness-95 transition-all duration-300">
            관심분야
          </button>
        </li>
        <li>
          <a
            href=""
            id="together"
            className="inline-block p-1.5 leading-none h-full text-paragraph-sm font-normal rounded-full bg-white border border-contents-content-tertiary hover:brightness-95 transition-all duration-300">
            같이해요
          </a>
        </li>
        <li>
          <a
            href=""
            id="qna"
            className="inline-block p-1.5 leading-none h-full text-paragraph-sm font-normal rounded-full bg-white border border-contents-content-tertiary hover:brightness-95 transition-all duration-300">
            질의응답
          </a>
        </li>
      </ul>
    </nav>
  );
}
```

##### main 부분 : PostList, PostItem, WriteButton 컴포넌트 jsx 마크업

```js
// PostList.jsx
import React from "react";
import PostItem from "./PostItem";
import { postData } from "/src/data/postData";

export default function PostList() {
  return (
    <ul id="PostList">
      {postData.map((data) => (
        <PostItem key={data.id} {...data} />
      ))}
    </ul>
  );
}
```

```js
// PostItem.jsx
import React from "react";
import { convertTime } from "/src/lib/utils/convertTime";

export default function PostItem({ category, subCategory, title, age, gender, date, myLocation, created, count, maxCount }) {
  return (
    <li className="hover:bg-gray-100 ">
      <div className="relative p-3 flex flex-col justify-center items-start gap-1 border-b">
        <div className="flex items-center gap-1 mb-7">
          <span className="text-label-sm p-1 leading-none bg-bluegray-600 text-white rounded">{category}</span>
          <span className="text-label-sm p-1 leading-none bg-tertiary text-white rounded">{subCategory}</span>
        </div>
        <a href="" className="absolute top-0 left-0 w-full h-full flex-auto text-paragraph-md font-normal text-contents-content-primary ">
          <span className="absolute top-[38px] left-3 w-[90%] overflow-hidden whitespace-nowrap text-ellipsis">{title}</span>
        </a>
        <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-people_full-icon bg-no-repeat bg-left">
          {age} {gender}
        </span>
        <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-calender-icon bg-no-repeat bg-left">{date.slice(0, 10)}</span>
        <div className="w-full flex justify-between">
          <span className="text-paragraph-sm font-normal text-gray-600">
            {myLocation} · {convertTime(created)}
          </span>
          <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-people-icon bg-no-repeat bg-left">
            {count}/{maxCount}명
          </span>
        </div>
      </div>
    </li>
  );
}
```

```js
// WriteButton.jsx
import React from "react";

export default function WriteButton() {
  return (
    <div className="absolute right-[145px] z-[2]">
      <div id="write-container" className="fixed bottom-20 w-[132px] flex flex-col gap-2 items-end">
        <button className="block w-12 h-12 rounded-full bg-plus-icon bg-center bg-no-repeat bg-secondary shadow-lg hover:brightness-90 transition-all duration-300">
          <span className="sr-only">글쓰기</span>
        </button>
      </div>
    </div>
  );
}
```

##### footer 부분 : NavigationBar 컴포넌트 jsx 마크업

```js
// NavigationBar.jsx
import React from "react";
import { navMenuData } from "/src/data/navMenuData";

export default function NavigationBar() {
  return (
    <nav className="w-full h-[69px] pl-2 pr-3 pt-2 pb-5 border-t-[1px] border-gray-200">
      <ul className="w-full h-full flex justify-between items-center">
        {navMenuData.map((item) => (
          <li key={item.id} className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
            <a className={`block relative h-full text-paragraph-sm font-normal ${item.icon} bg-no-repeat bg-top`} href={item.link}>
              <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

##### 위의 컴포넌트들을 불러와서 App.jsx에 마크업

```js
// App.jsx
import React from "react";
import Container from "./components/Container";
import PostList from "./components/Board/PostList";
import AddressBar from "./components/Header/AddressBar";
import CategoryBar from "./components/Header/CategoryBar";
import NavigationBar from "./components/Footer/NavigationBar";

function App() {
  return (
    <Container>
      <header className="w-full">
        <AddressBar />
        <CategoryBar />
      </header>

      <main className="relative overflow-x-hidden overflow-y-auto flex-1">
        <PostList />
      </main>

      <footer className="bg-white">
        <NavigationBar />
      </footer>
    </Container>
  );
}

export default App;
```

##### 마지막으로 root에 렌더링

```js
// main.js
import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./index.css";

const rootElement = createRoot(document.querySelector("#root"));
rootElement.render(App());
```

#### 3. 회고

- 처음 계획은 React API의 `createElement` 를 사용하여 마크업하려고 시도해보았지만, 컴포넌트 코드의 중첩이 심하고 또 tailwindcss를 사용하기에 className이 너무 길어서 JSX Syntax를 사용하는 것으로 방향을 바꿨습니다.
