import { memo } from "react";
import BoardEmpty from "./BoardEmpty";
import TogetherItem from "./TogetherItem";
import Skeleton from "./Skeleton";
import QnaItem from "./QnaItem";

function BoardList({ boardData = [], isLoading }) {
  let contents = boardData.map((item) => {
    if (item.type === "together")
      return <TogetherItem key={item.id} {...item} />;
    if (item.type === "qna") return <QnaItem key={item.id} {...item} />;
  });
  if (isLoading)
    contents = new Array(5).fill(null).map((_, idx) => <Skeleton key={idx} />);
  if (!isLoading && boardData.length === 0) contents = <BoardEmpty />;
  return (
    <main className="relative overflow-x-hidden overflow-y-auto flex-1">
      <h2 className="sr-only">게시글 목록</h2>
      <ul>{contents}</ul>
    </main>
  );
}

export default memo(BoardList, (prev, next) => {
  return prev.isLoading === next.isLoading;
});
