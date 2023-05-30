import React, { useEffect, useState } from "react";
import axios from "axios";
import BookItem from './BookItem'

// const API_URL = "http://localhost:3001/books";
const API_URL = "https://mern-project-backend-58df.onrender.com/books"
const fetchHandler = async () => {
  return await axios.get(API_URL).then((res) => res.data);
};

export default function BookListIndex() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  // console.log(books);

  return (
    <div>
      {/* <h1>List of Books:</h1> */}
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <BookItem book={book} />
            </li>
          ))} 
      </ul>
    </div>
  );
}
