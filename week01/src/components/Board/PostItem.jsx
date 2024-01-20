import React from "react";
import { convertTime } from "/src/lib/utils/convertTime";

export default function PostItem({ category, subCategory, title, age, gender, date, myLocation, created, count, maxCount }) {
  return (
    <li className="hover:bg-gray-100 ">
      <div className="relative p-3 flex flex-col justify-center items-start gap-1 border-b">
        <div className="flex items-center gap-1 mb-7">
          <span className="text-label-sm p-1 leading-none bg-bluegray-600 text-white rounded">{category}</span>
          <span className="text-label-sm p-1 leading-none bg-tertiary text-white rounded">{subCategory}</span>
        </div>
        <a href="" className="absolute top-0 left-0 w-full h-full flex-auto text-paragraph-md font-normal text-contents-content-primary ">
          <span className="absolute top-[38px] left-3 w-[90%] overflow-hidden whitespace-nowrap text-ellipsis">{title}</span>
        </a>
        <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-people_full-icon bg-no-repeat bg-left">
          {age} {gender}
        </span>
        <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-calender-icon bg-no-repeat bg-left">{date.slice(0, 10)}</span>
        <div className="w-full flex justify-between">
          <span className="text-paragraph-sm font-normal text-gray-600">
            {myLocation} · {convertTime(created)}
          </span>
          <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-people-icon bg-no-repeat bg-left">
            {count}/{maxCount}명
          </span>
        </div>
      </div>
    </li>
  );
}
