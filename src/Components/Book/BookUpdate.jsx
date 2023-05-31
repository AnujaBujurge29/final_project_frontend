// EditEvents.js is used to update/edit
import { getBook, editBook } from "../../Services/book-api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookUpdate() {
 
  const inputStyle =
    "block w-[500px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 ";
  const id = useParams().id;
  const nav = useNavigate();
  // const [book, setBook] =  useState()
  const [input, setInput] = useState();
  useEffect(() => {
    getBook(id)
    .then((res) => setInput(res.data.books))
    
  }, [id]);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      // [e.target.name]: e.target.defaultValue,
    }));
  };

  const updateBook = (e) => {
    e.preventDefault();
    // console.log(input);
    const updatedBook = {
      name: String(e.target.name.value),
      author: String(e.target.author.value),
      description: String(e.target.description.value),
      price: Number(e.target.price.value),
      image:String(e.target.image.value)
    };
    // console.log(updatedBook);
    editBook(id, updatedBook).then(()=> nav(`/books`))
  };
  return (
    <div>
      <br />
      <div className="pl-[400px] pt-[10px]">
        <h2>Book:</h2><br/>
        {input && (<form onSubmit={updateBook}>
          <div>
            <div className="mb-1">
              <label className="block mb-2 text-l font-medium text-black dark:text-black">
                Book Title:
              </label>
              <input
                type="text"
                placeholder="Title of book"
                defaultValue={input.name}
                name="name"
                onChange={handleChange}
                className={inputStyle}
              ></input>
            </div>
            <div className="mb-1">
              <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
                Author:
              </label>
              <input
                name="author"
                defaultValue={input.author}
                type="text"
                placeholder="Author of Book"
                onChange={handleChange}
                className={inputStyle}
              ></input>
            </div>
            <div className="mb-1">
              <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
                Description:
              </label>
              <input
                name="description"
                defaultValue={input.description}
                type="text"
                placeholder="Description"
                onChange={handleChange}
                className={inputStyle}
              ></input>
            </div>
            <div className="mb-1">
              <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
                Price:
              </label>
              <input
                name="price"
                defaultValue={input.price}
                type="number"
                step="5"
                placeholder="Price"
                onChange={handleChange}
                className={inputStyle}
              ></input>
            </div>
            <div className="mb-1">
              <label className="block mb-2 text-l font-medium text-gray-900 dark:text-black">
              Image:
              </label>
              <input
                name="image"
                defaultValue={input.image}
                type="text"
                placeholder="Image url"
                onChange={handleChange}
                className={inputStyle}
              ></input>
            </div>
            <input
              type="submit"
              defaultValue="update"
              className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-l px-5 py-2.5 mr-2 mb-2 dark:bg-gray-500 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-blue-800 dark:text-black"
            />
          </div>
        </form>)}
      </div>
    </div>
  );
}