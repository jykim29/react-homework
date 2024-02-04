import { useEffect, useState } from "react";
import BoardList from "./components/Board/BoardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import pb from "./lib/utils/pb";
import CategoryModal from "./components/Modal/CategoryModal";

const INITIAL_CATEGORY_LIST = [
  {
    id: 0,
    categoryName: "Programming",
    queryName: "프로그래밍",
    isFollow: false,
  },
  {
    id: 1,
    categoryName: "Design",
    queryName: "인터렉션디자인",
    isFollow: false,
  },
  {
    id: 2,
    categoryName: "UI·UX",
    queryName: "UI/UX",
    isFollow: false,
  },
  {
    id: 3,
    categoryName: "Frontend",
    queryName: "프론트엔드",
    isFollow: false,
  },
  {
    id: 4,
    categoryName: "Backend",
    queryName: "백엔드",
    isFollow: false,
  },
  {
    id: 5,
    categoryName: "Publishing",
    queryName: "퍼블리싱",
    isFollow: false,
  },
  {
    id: 6,
    categoryName: "AI",
    queryName: "AI",
    isFollow: false,
  },
  {
    id: 7,
    categoryName: "Blockchain",
    queryName: "블록체인",
    isFollow: false,
  },
];
function createCategoryQueryString(categoryList) {
  const filteredList = categoryList.filter(({ isFollow }) => isFollow === true);
  if (filteredList.length === 0) return "";
  const result = filteredList
    .map(({ queryName }) => {
      return `category = "${queryName}"`;
    })
    .join("||");
  return result;
}

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(INITIAL_CATEGORY_LIST);
  const [isLoading, setIsLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = () => {
    setIsShow((prev) => !prev);
  };
  const handleToggleFollow = (e, cateogyrId) => {
    const newCategory = [...category].map((item) => {
      if (item.id === cateogyrId) return { ...item, isFollow: !item.isFollow };
      return item;
    });
    setCategory(newCategory);
  };
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
  return (
    <div className="relative min-w-screen max-w-screen w-full mx-auto h-[100dvh] flex flex-col">
      <Header onToggleModal={handleShowModal} />
      <BoardList boardData={data} isLoading={isLoading} />
      {isShow && (
        <CategoryModal
          category={category}
          onToggleModal={handleShowModal}
          onToggleFollow={handleToggleFollow}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
