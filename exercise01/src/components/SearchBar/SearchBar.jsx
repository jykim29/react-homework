import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import SearchWindow from "./SearchWindow";

export default function SearchBar() {
  const [isShowSearchWindow, setIsShowSearchWindow] = useState(false);
  const handleFocus = () => {
    setIsShowSearchWindow(true);
  };
  if (isShowSearchWindow) {
    return <SearchWindow setIsShowSearchWindow={setIsShowSearchWindow} />;
  }
  return (
    <>
      <form className={classes.form}>
        <a href="">
          <img src="assets/logo.svg" alt="네이버" />
        </a>
        <label htmlFor="input" className="sr-only">
          검색어
        </label>
        <input id="input" className={classes.input} type="search" placeholder="검색어를 입력해주세요." onFocus={handleFocus} />
        <button type="submit" className={classes.submit}>
          <img src="assets/naver_circle.svg" alt="검색" />
        </button>
      </form>
    </>
  );
}
