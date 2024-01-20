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
