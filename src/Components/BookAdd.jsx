import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../Services/book-api";

export default function BookAdd() {
  // style variables
  const inputStyle =
    "block w-[500px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 ";
  const nav = useNavigate();
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      name: String(e.target.name.value),
      author: String(e.target.author.value),
      description: String(e.target.description.value),
      price: Number(e.target.price.value),
      image:String(e.target.image.value)
    };
    createBook(book).then(() => nav("/books"));
  };

  return (
    <div className="pl-[400px] pt-[30px]">
      <h1>Add Books</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-l font-medium text-black dark:text-black">
            Book Title:
          </label>
          <input
            type="text"
            placeholder="Title of Book"
            name="name"
            onChange={handleChange}
            value={input.name}
            className={inputStyle}
          ></input>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
            Author:
          </label>
          <input
            name="author"
            onChange={handleChange}
            value={input.author}
            type="text"
            placeholder="Author of Book"
            className={inputStyle}
          ></input>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
            Description:
          </label>
          <input
            name="description"
            onChange={handleChange}
            value={input.description}
            type="text"
            placeholder="Description"
            className={inputStyle}
          ></input>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
            Price:
          </label>
          <input
            name="price"
            onChange={handleChange}
            value={input.price}
            type="number"
            step="5"
            placeholder="Price"
            className={inputStyle}
          ></input>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
            Image:
          </label>
          <input
            name="image"
            onChange={handleChange}
            value={input.image}
            type="text"
            placeholder="Image"
            className={inputStyle}
          ></input>
        </div>
        <input
          type="submit"
          value="Add Book"
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-l px-5 py-2.5 mr-2 mb-2 dark:bg-gray-500 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-blue-800 dark:text-black"
        />
      </form>
    </div>
  );
}
