import React from "react";

export default function BookItem(props) {
  const { _id, name, author, price, description, availability } = props.book;
  return (
    <div className="list-items bg-white dark:bg-[#0c2b5e] dark:text-gray-400 ">
      <div className="h-[210px] m-1">
        <h1>Title: {name}</h1>
        <h2>Author: {author}</h2>
        <p>Price: {price}</p>
        <p>Desciption: {description}</p>
        <br />
        {/* <p>Availability: {availability}</p> */}
      </div>

      <div className="flex py-2 place-content-between my-0">
        
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Update
        </button>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
      </div>
    </div>
  );
}
