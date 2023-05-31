import React from "react";
import { FaBook } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-white dark:bg-[#0c2b5e] pr-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2 pl-0">
        <div className="flex items-center">
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            <FaBook />BOOK Store      
          </span>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white dark:bg-[#0c2b5e] md:dark:bg-[#0c2b5e] ">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-[#0c2b5e] md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 border-b-2 border-white border-solid  md:hover:border-b-gray-900 md:dark:border-[#0c2b5e] md:dark:hover:border-b-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-200 dark:hover:text-white border-b-2 border-white border-solid md:hover:border-b-gray-900 md:dark:hover:border-b-blue-200 md:dark:border-[#0c2b5e]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/addbooks"
                className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-200 dark:hover:text-white border-b-2 border-white border-solid md:hover:border-b-gray-900 md:dark:hover:border-b-blue-200 md:dark:border-[#0c2b5e]"
              >
                Add Books
              </a>
            </li>
            <li>
              <a
                href="/books"
                className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-200 dark:hover:text-white border-b-2 border-white border-solid md:hover:border-b-gray-900 md:dark:hover:border-b-blue-200 md:dark:border-[#0c2b5e]"
              >
                My Books
              </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;