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
