import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook, deleteBook } from "../../Services/book-api";

export default function Book(props) {

const {id} = useParams()
  const nav = useNavigate();
  const [book, setBook] = useState({});
  useEffect(() => {
    getBook(id).then((res) => setBook(res.data.books));
  }, [id]);
  
  const deleteHandler = () => {
    deleteBook(id)
      .then((res) => res.data)
      .then(() => nav("/books"));
  };
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_5px_50px_-3px_rgba(0,0,0,1),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row mb-3 ml-[280px]">
      <div className="flex flex-col justify-start p-6">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={book.image}
      /><br/>
        <h3 className="mb-2 text-2xl font-medium text-neutral-800 dark:text-neutral-50 underline">
          <strong>{book.name}</strong>
        </h3>
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">Author: <strong>{book.author}</strong></h5>
        <h4 className="mb-2 text-md font-medium text-neutral-800 dark:text-neutral-50"> {book.description}</h4><br/>
        <h6 className="mb-2 text-md font-medium text-neutral-800 dark:text-neutral-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae harum iure deserunt cum. Facilis adipisci aspernatur dolore praesentium maxime. Consequuntur nihil ipsa placeat delectus quibusdam, impedit porro fuga excepturi?</h6><br/>
        {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={deleteHandler}>Update</button>  */}
{/* 
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={deleteHandler}>Delete</button>  */}
        <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            nav("/books");
          }}
        >
          Back to Store
        </button>
        &nbsp;
      </div>
    </div>
  );
}
