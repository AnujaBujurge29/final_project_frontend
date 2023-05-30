import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className=" fixed bottom-0 bg-gray-300 rounded-lg shadow m-4 dark:bg-gray-800 w-[1600px] ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a className="hover:underline">Anuja Bujurge™ {"  "}</a> All
            Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://mern-project-backend-58df.onrender.com/books"
                className="mr-4 hover:underline md:mr-6"
              >
                Backend Link
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
