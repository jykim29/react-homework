import React, { useEffect, useRef, useState } from "react";
import classes from "./SearchWindow.module.css";

export default function SearchWindow({ setIsShowSearchWindow }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const handleClick = () => {
    setIsShowSearchWindow(false);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className={classes.background}>
      <form className={classes.searchForm}>
        <button onClick={handleClick}>←</button>
        <input type="text" value={input} placeholder="검색어를 입력해주세요." spellCheck="false" ref={inputRef} onChange={(e) => setInput(e.target.value)} />
        <button>검색</button>
      </form>
    </div>
  );
}
