import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <nav className="w-full h-[69px] pl-2 pr-3 pt-2 pb-5 border-t-[1px] border-gray-200">
        <ul className="w-full h-full flex justify-between items-center">
          <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
            <a className="block relative h-full text-paragraph-sm font-normal bg-home-icon bg-no-repeat bg-top" href="">
              <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">홈</span>
            </a>
          </li>

          <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
            <a className="block relative h-full text-paragraph-sm font-normal bg-board_full-icon bg-no-repeat bg-top" href="">
              <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">게시판</span>
            </a>
          </li>

          <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
            <a className="block relative h-full text-paragraph-sm font-normal bg-near-icon bg-no-repeat bg-top" href="">
              <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">내 근처</span>
            </a>
          </li>

          <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
            <a className="block relative h-full text-paragraph-sm font-normal bg-chat-icon bg-no-repeat bg-top" href="">
              <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">채팅</span>
            </a>
          </li>

          <li className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
            <a className="block relative h-full text-paragraph-sm font-normal bg-my-icon bg-no-repeat bg-top" href="">
              <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">나의 이듬</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
