'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Menu = {
  path: string;
  title: string;
  subMenu?: Menu[];
};

const menu: Menu[] = [
  
 
 
  
  { path: "/Recruitment-Policy.pdf", title: "Recruitment Policies" },
  { path: "/contact", title: "Contact" },
];
const menus: Menu[] = [
  { path: "/", title: "Home" },
  {
    path: "/",
    title: "About Us",
    subMenu: [
      { path: "/messages", title: "Director Message" },
  { path: "/structure", title: "Department Structure" },
    ],
  },
  
  {
    path: "/",
    title: " Committees",
    subMenu: [
      { path: "/advisory", title: "Advisory Council" },
      { path: "/committee", title: "Working Committee" },
      { path: "/people", title: "People" },
    ],
  },
  { path: "/cells", title: "Cells" },
  { path: "/Publications", title: "Publication" },
  { path: "/Recruitment-Policy.pdf", title: "Careers" },
  {
    path: "/contact",
    title: "Contact Us",
  },
  {
    path: "/contribute",
    title: "Membership Form",
  },
  
  
];



const Header: React.FC = () => {
  const [state, setState] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState(-1);

  const handleSubMenuHover = (index: number) => {
    setSubMenuIndex(index);
  };
  
  const handleSubMenuLeave = () => {
    setSubMenuIndex(-1);
  };
  
  return (
    <header className="pt-1 w-full">
      <div className="w-full mx-auto flex flex-col lg:flex lg:flex-row items-center justify-between">
        <nav className="w-full text-white text-xl">
          <div className="items-center px-4 md:flex md:px-0">
            <div className="flex items-center justify-between py-0 md:block">
              <div className={`md:hidden order-1`}>
                <button
                  className="text-black outline-none p-2 rounded-md focus:border-black focus:border"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div > 
              <Link href="/">
                
              </Link>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${
                state ? "block" : "hidden"
              }`}
            >
              <ul
                className={`flex ${
                  state ? "flex-col items-start" : "space-x-4 items-center"
                } justify-center space-y-0 md:flex md:space-x-0.5 md:space-y-0`}
              >
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className={`py-2 px-2 md:text-white text-hite-100 cursor-pointer md:w-1/6 text-black md:bg-red-500 hover:text-red-500 md:hover:bg-white`}
                    onMouseEnter={() => handleSubMenuHover(idx)}
                    onMouseLeave={handleSubMenuLeave}
                  >
                    {item.subMenu ? (
                      <div className="cursor-pointer">
                        <span className="text-sm">{item.title}</span>
                        <ul
                          className={`absolute left-0 px-10 md:px-5 mt-2 space-y-2 text-black bg-white z-10 w-full grid grid-cols-1 md:grid-cols-3 md:w-11/12 md:gap-2 ${
                            subMenuIndex === idx ? "grid" : "hidden"
                          }`}
                        >
                          {item.subMenu.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                href={subItem.path}
                                className="block px-4 py-2 text-sm transition-all hover:text-red-500 hover:underline md:text-left"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link href={item.path} className="text-sm">
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
