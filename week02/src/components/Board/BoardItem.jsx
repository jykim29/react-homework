import { convertTime } from "../../lib/utils/convertTime";

export default function BoardItem({ category, title, age, gender, date, created, members, maxMember }) {
  return (
    <li className="hover:bg-gray-100 ">
      <div className="relative p-3 flex flex-col justify-center items-start gap-1 border-b">
        <div className="flex items-center gap-1 mb-7">
          <span className="text-label-sm p-1 leading-none bg-bluegray-600 text-white rounded">같이해요</span>
          <span className="text-label-sm p-1 leading-none bg-tertiary text-white rounded">{category}</span>
        </div>
        <a href="" className="absolute top-0 left-0 w-full h-full flex-auto text-paragraph-md font-normal text-contents-content-primary ">
          <span className="absolute top-[38px] left-3 w-[90%] overflow-hidden whitespace-nowrap text-ellipsis">{title}</span>
        </a>
        <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-people_full-icon bg-no-repeat bg-left">
          {age}대 / {gender} 참여가능
        </span>
        <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-calender-icon bg-no-repeat bg-left">{date.slice(0, 10)}</span>
        <div className="w-full flex justify-between">
          <span className="text-paragraph-sm font-normal text-gray-600">연희동 · {convertTime(created)}</span>
          <span className="pl-4 text-paragraph-sm font-normal text-gray-600 bg-people-icon bg-no-repeat bg-left">
            {members.length}/{maxMember}명
          </span>
        </div>
      </div>
    </li>
  );
}
