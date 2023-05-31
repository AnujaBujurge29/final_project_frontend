import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="p-4 m-4">
      <h1>About Page</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos veniam
        repellat assumenda itaque! Voluptas, dolorem eligendi! Architecto saepe
        fuga nulla voluptates enim, illum ullam pariatur itaque deserunt
        excepturi nam praesentium!
      </p>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        ab, illo facere vitae vel nisi nobis beatae perferendis! Vel ab at
        labore quo assumenda natus maiores quae culpa odit commodi?
      </p>
      <br />
      <Link to={`/books`}>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
        >
          Go to My Books
        </button>
      </Link>
    </div>
  );
}
