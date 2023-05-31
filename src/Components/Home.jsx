import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4 m-4">
      <div>
        <br />
        <h1>Home page</h1>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, autem
          rem dolorum perspiciatis recusandae aliquam eos dolores voluptatibus
          nihil, maxime ipsa nulla ex atque, eius minima ut reprehenderit
          consectetur eveniet.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus ab, illo facere vitae vel nisi nobis beatae
          perferendis! Vel ab at labore quo assumenda natus maiores quae culpa
          odit commodi?
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
    </div>
  );
}
