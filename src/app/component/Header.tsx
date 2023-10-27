"use client";
import React, { useState } from "react";
import Link from "next/link";
type Menu = {
  path: string;
  title: string;
};

const menus: Menu[] = [
  { path: "/", title: "Home" },
  { path: "/messages", title: "Director Message" },
  { path: "/structure", title: "Department Structure" },
  { path: "/advisory", title: "Advisory Council" },
  { path: "/committee", title: "Working Committee" },
  { path: "/people", title: "People" },
  { path: "/contact", title: "Contact" },
];

const Header: React.FC = () => {
  const [state, setState] = useState(false);
  return (
    <header className="bg-red-500 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
       

        <nav className = "w-full border-b md:border-0 text-white">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-purple-600 cursor-pointer">
              
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-white-700 outline-none p-2 rounded-md focus:border-white-400 focus:border"
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
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-hite-600 hover:text-indigo-600">
                <Link href={item.path}>
                  {item.title}
                </Link>
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