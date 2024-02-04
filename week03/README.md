## 3주차 과제

### 목차

- [과제 목표](#🎯-과제-목표)
- [수행 과정](#🎞-수행-과정)
- [회고](#🤔-회고)

### 🎯 과제 목표

- [x] 바닐라 프로젝트의 데이터베이스 연동 부분을 리액트로 구현합니다.
- [x] 리액트 방식으로 앱의 상태 및 사이드 이펙트를 관리해봅니다.
- [ ] 커스텀 훅 함수를 1개 이상 작성해 여러 곳에서 재사용 해봅니다.
- [x] 가능한 경우, DOM 객체에 접근/조작하는 부분도 구현합니다. (옵션)
- [ ] 가능한 경우, Storybook을 활용해보세요. (옵션)

### 🎞 수행 과정

#### 1. 바닐라 프로젝트의 데이터베이스 연동 부분을 리액트로 구현

- fetch api로 포켓베이스의 데이터를 가져오는 유틸 함수를 만들어서 사용했습니다.

    <details>
      <summary><b>pb.js 코드</b></summary>

  ```js
  async function pb(url, options = {}) {
    const PB_API_URL = import.meta.env.VITE_PB_API_URL;
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      body: null,
    };
    try {
      const response = await fetch(`${PB_API_URL}/api/collections${url}`, {
        ...defaultOptions,
        ...options,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      if (!(error instanceof DOMException)) {
        throw new Error(error);
      }
    }
  }
  export default pb;
  ```

    </details>

#### 2. 리액트 방식으로 앱의 상태 및 사이드 이펙트를 관리

- `useEffect` 훅에서 api함수를 실행하여 포켓베이스 데이터를 받아오고 이것을 `useState` 훅을 사용하여 상태를 관리했습니다.
- `useEffect` 의존성 배열에 현재 카테고리 선택 상태를 나타내는 `category`를 추가하여, 선택한 카테고리가 바뀔 때마다 `useEffect` 를 실행하여 데이터를 받아오도록 하였습니다.
- React의 `StrictMode` 때문에 첫 렌더링 때 `useEffect` 가 중복 실행되어 fetch가 2번 이루어지는 것을 막기 위해 수업 시간에 배운 `AbortController` 를 사용했습니다.
- `loading` 상태도 추가하여 데이터를 받아오는 동안 스켈레톤을 표시하도록 하였습니다.

  <details>
    <summary><b>useEffect 코드</b></summary>

  ```js
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setIsLoading(true);
        const togetherResponse = await pb("/together/records", {
          signal: controller.signal,
        });
        const qnaResponse = await pb(
          `/qAndA/records?filter=${createCategoryQueryString(category)}`,
          {
            signal: controller.signal,
          },
        );
        if (!togetherResponse?.items || !qnaResponse?.items) return;
        const combineData = [...togetherResponse.items, ...qnaResponse.items];
        const sortData = combineData.toSorted(
          (a, b) =>
            new Date(b.created).getTime() - new Date(a.created).getTime(),
        );
        setData(sortData);
        sortData.length > 0 && setIsLoading(false);
      } catch (error) {
        console.error("Error:", error.message);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [category]);
  ```

  </details>

#### 3. 커스텀 훅 함수를 1개 이상 작성해 여러 곳에서 재사용

- 아직 커스텀 훅이 언제 사용되고 또 어떻게 만들어야 하는지 확실히 알지 못해서 패스했습니다😭

#### 4. 가능한 경우, DOM 객체에 접근/조작하는 부분도 구현

- `useRef` 를 사용해서 카테고리 선택 모달 DOM 객체에 접근하고 모달이 열리면 DOM객체에 `focus()` 를 실행하여 바로 모달로 포커스가 이동되게끔 했습니다.

#### 5. 가능한 경우, Storybook을 활용

- Storybook 보고 엄청 신기해서 꼭 만들어보고 싶었는데... 못했습니다😭😭

### 🤔 회고

- 사실 주말동안 몸 상태가 너무 안좋아서 거의 잠만 잤던 것 같습니다.  
  과제 목표를 다 완료하지 못해서 제 자신이 너무 아쉬웠습니다.  
  야무쌤이 말씀하신 것처럼 평일에 조금씩 해놓을걸 하는 후회가...
- 그래서 이번주에는 완료 못했던 부분 다 끝내도록 하겠습니다!
