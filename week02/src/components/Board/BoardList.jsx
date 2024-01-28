import articleData from "../../data/articleData.json";
import BoardItem from "./BoardItem";

export default function BoardList() {
  const isExist = articleData.items.length > 0;
  let contents = <li>게시물이 없습니다.</li>;
  if (isExist)
    contents = articleData.items.map((item) => {
      return <BoardItem key={item.id} {...item} />;
    });
  return (
    <main className="relative overflow-x-hidden overflow-y-auto flex-1">
      <h2 className="sr-only">게시글 목록</h2>
      <ul>{contents}</ul>
    </main>
  );
}
