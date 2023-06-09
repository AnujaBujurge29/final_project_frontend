import React from "react";
import { Link } from "react-router-dom";
import { deleteBook } from "../../Services/book-api";
import { useNavigate } from "react-router-dom";

export default function BookItem(props) {
  const { _id, name, author, price, description, image } = props.book;
  const nav = useNavigate();
  const deleteHandler = () => {
    deleteBook(_id)
      .then((res) => res.data)
      
      .then(() => nav("/"))
  };
  return (
    <div className="list-items bg-white dark:bg-[#0c2b5e] dark:text-gray-400 h-[500px] ">
      <div className="h-[150px] m-1">
        <Link to={`/${props.book._id}`}>
                    <div className ="card"></div>
                    <h1 className="font-bold text-red-800 dark:text-white underline">{name}</h1>
                   </Link>
        <h3>Author: {author}</h3>
        <p>Price: {price}</p>
        <p>Desciption: {description}</p>
      </div>
      <div><img src={image} className="h-[150px]"/><br/></div>
      <div className="flex p-1  place-content-between m-0  ">
        <Link to={`/books/${_id}`}>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Update
          </button>
        </Link>
        <button
          onClick={deleteHandler}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
