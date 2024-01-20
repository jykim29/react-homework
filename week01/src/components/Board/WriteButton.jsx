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
