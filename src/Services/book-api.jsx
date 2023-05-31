// All endpoints
import axios from 'axios';

const API_URL = "https://mern-project-backend-58df.onrender.com/books"
// const API_URL = 'http://localhost:3001/books';

//Index: Show all the things! 
export async function getBooksList() {
    const URL = API_URL;
    const response =await axios.get(URL);
    return response;
}
// Index: Show one thing! 
export async function getBook(id) {
    const URL = `${API_URL}/${id}`;
    const response =await axios.get(URL)
    // .then((res) =>res.data)
    return response;
}
// Edit an Book
export async function editBook(id, updatedBook) {
    const URL = `${API_URL}/${id}`;
    const response =await axios.put(URL, updatedBook)
    .then((res) =>res.data)
 
    return response;
}
// Create an Book
export async function createBook(event) { 
    const URL = API_URL;
    const response = await axios.post(URL, event)
    .then((res) =>res.data)
    return response;
}
// Delete an Book
export async function deleteBook(id) {
    const URL = `${API_URL}/${id}`;
    const response =await axios.delete(URL)
    .then((res) =>res.data)
    return response;
}