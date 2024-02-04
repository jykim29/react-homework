export default function Header({ onToggleModal }) {
  return (
    <header className="w-full">
      <div className="flex justify-between">
        <div className="flex h-full items-center">
          <h1 className="items-center pl-3 text-label-lg font-semibold">
            남가좌제2동
          </h1>
          <button
            type="button"
            aria-label="내 동네 설정하기"
            className="direction w-10 h-10 bg-direction-icon bg-no-repeat bg-center hover:bg-gray-100 hover:rounded transition-all duration-300"
          ></button>
        </div>
        <ul className="flex">
          <li>
            <a
              href=""
              role="button"
              aria-label="검색하기"
              className="search block w-10 h-10 bg-search-icon bg-no-repeat bg-center hover:bg-gray-100 hover:rounded transition-all duration-300"
            ></a>
          </li>
          <li>
            <a
              id="notification"
              href=""
              role="button"
              aria-label="알림"
              className="alram block w-10 h-10 bg-alram-icon bg-no-repeat bg-center hover:bg-gray-100 hover:rounded transition-all duration-300"
            ></a>
          </li>
        </ul>
      </div>

      <nav className="w-full px-3 py-2 border-b border-b-contents-content-secondary">
        <ul className="flex items-center gap-1 h-[29px]">
          <li>
            <button
              onClick={onToggleModal}
              className="pl-7 pr-1.5 py-1.5 leading-none text-paragraph-sm font-normal rounded-full bg-white border border-contents-content-tertiary bg-hamburger-icon bg-[6px_center] bg-no-repeat hover:brightness-95 transition-all duration-300"
            >
              관심분야
            </button>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => e.preventDefault()}
              id="together"
              className="inline-block p-1.5 leading-none h-full text-paragraph-sm font-normal rounded-full bg-white border border-contents-content-tertiary hover:brightness-95 transition-all duration-300"
            >
              같이해요
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => e.preventDefault()}
              id="qna"
              className="inline-block p-1.5 leading-none h-full text-paragraph-sm font-normal rounded-full bg-white border border-contents-content-tertiary hover:brightness-95 transition-all duration-300"
            >
              질의응답
            </a>
          </li>
        </ul>
      </nav>

      <div className="absolute right-[145px] z-[2]">
        <div
          id="write-container"
          className="fixed bottom-20 w-[132px] flex flex-col gap-2 items-end"
        >
          <button className="block w-12 h-12 rounded-full bg-plus-icon bg-center bg-no-repeat bg-secondary shadow-lg hover:brightness-90 transition-all duration-300">
            <span className="sr-only">글쓰기</span>
          </button>
        </div>
      </div>
    </header>
  );
}
