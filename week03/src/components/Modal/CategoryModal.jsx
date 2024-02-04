import { useEffect, useRef, useState } from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryModal({
  category,
  onToggleModal,
  onToggleFollow,
}) {
  const modalBoxRef = useRef();
  const handleClick = (e) => {
    if (e.target === e.currentTarget) onToggleModal();
  };

  useEffect(() => {
    modalBoxRef.current.focus();
  }, []);
  return (
    <div
      onClick={handleClick}
      className={`absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] block opacity-1 z-10`}
    >
      <ul
        ref={modalBoxRef}
        tabIndex="0"
        className="absolute bottom-0 w-full bg-white flex flex-col text-paragraph-md font-normal rounded-t-lg"
      >
        <li className="py-4 px-3 flex justify-between items-center">
          <h2 id="modalTitle" className="text-label-lg">
            관심분야
          </h2>
          <button onClick={handleClick} className="bg-close-icon w-5 h-5">
            <span className="sr-only">관심분야 선택창 닫기</span>
          </button>
        </li>

        {category.map((item) => {
          return (
            <CategoryItem
              key={item.id}
              onToggleFollow={onToggleFollow}
              {...item}
            />
          );
        })}
      </ul>
    </div>
  );
}
