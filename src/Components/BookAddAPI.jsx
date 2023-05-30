import React from "react";

export default function BookAddAPI() {
  return (
    <div>
      <h1>Add Books</h1>
      <br />
      <div className="pl-[400px] pt-[30px]">
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-l font-medium text-black dark:text-black">
              Book Title:
            </label>
            <input
              placeholder="Book Name"
              className="block w-[500px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            ></input>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
              Author:
            </label>
            <input
              type="text"
              placeholder="Author of Book"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
              Description:
            </label>
            <input
              type="text"
              placeholder="Description"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
              Price:
            </label>
            <input
              type="number"
              step="5"
              placeholder="Price"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-l px-5 py-2.5 mr-2 mb-2 dark:bg-gray-500 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-blue-800 dark:text-black"
        >
          Add Book
        </button>
        </form>
      </div>
    </div>
  );
}
