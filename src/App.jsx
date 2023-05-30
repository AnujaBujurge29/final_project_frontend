// import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
//import Routeers
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//import Components
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import BookAddAPI from "./Components/BookAddAPI";
import BookListIndex from "./Components/Book/BookListIndex";
import About from "./Components/About";
import BookDetails from "./Components/Book/BookDetails";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button
        onClick={handleThemeSwitch}
        className="bg-[#0c2b5e] rounded-3xl text-md text-gray-100 h-[45px] w-[50px] absolute top-0 right-1 pl-4 items-center"
      >
        <BsMoonFill />
      </button>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<BookAddAPI />} exact />
          <Route path="/books" element={<BookListIndex />} exact />
          <Route path="/about" element={<About />} exact />
          {/* <Route path="/books/:id" element={<BookDetails/>}/> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
