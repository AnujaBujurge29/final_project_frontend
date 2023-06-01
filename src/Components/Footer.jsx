import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2023{" "}
          <span
            className="text-neutral-800 dark:text-neutral-400 hover:underline"
          >Anuja Bujurge™ 
          </span>{" "}Rights Reserved.{" "}
          <span className="text-neutral-800 underline dark:text-neutral-400"><a target="_blank" to="https://mern-project-backend-58df.onrender.com/books">Backend Render Link</a></span>
        </div>
      </footer>
    </div>
  );
}
