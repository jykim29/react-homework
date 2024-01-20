import React from "react";
import { navMenuData } from "/src/data/navMenuData";

export default function NavigationBar() {
  return (
    <nav className="w-full h-[69px] pl-2 pr-3 pt-2 pb-5 border-t-[1px] border-gray-200">
      <ul className="w-full h-full flex justify-between items-center">
        {navMenuData.map((item) => (
          <li key={item.id} className="h-full w-12 pt-0.5 hover:bg-gray-100 hover:rounded transition-all duration-300">
            <a className={`block relative h-full text-paragraph-sm font-normal ${item.icon} bg-no-repeat bg-top`} href={item.link}>
              <span className="absolute w-full text-center bottom-0 left-1/2 -translate-x-1/2">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
