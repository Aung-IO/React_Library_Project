import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useTheme from "../hooks/useTheme";


export default function Create() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [newCategory, setNewCategory] = useState("");
  let [categories, setCategories] = useState([]);
  let {isDark} = useTheme();

  let { setPostData, data: book } = useFetch(
    "http://localhost:3000/books",
    "POST"
  );
  let navigate = useNavigate();

  let addCategory = () => {
    if (!newCategory || newCategory && categories.includes(newCategory)) {
      setNewCategory("");
      return;
    }

   
    setCategories((prev) => [newCategory, ...prev]);
    setNewCategory("");
  };

  let addBook = (e) => {
    e.preventDefault();
    let data = {
      title,
      description,
      categories,
    };

    setPostData(data);
  };

  useEffect(() => {
    if (book) {
      navigate("/");
    }
  }, [book]);

  return (
  <div className="h-screen">
      <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}
            htmlFor="grid-password"
          >
            Book Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Book Title"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}
            htmlFor="grid-password"
          >
            Book Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="textarea"
            placeholder="Book Description"
          />
          <p className={`text-gray-600 text-xs italic ${isDark ? 'text-white' : ''}`}>
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}
            htmlFor="grid-password"
          >
            Book Categories
          </label>
          <div className="flex items-center space-x-2">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="textarea"
              placeholder="Book Category"
            />
            <button
              className="bg-primary p-1 rounded-md mb-3 w-11 h-11"
              onClick={addCategory}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 m-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap">
            {categories.map((category) => (
              <span
                key={category}
                className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-primary"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button className="text-white bg-primary px-3 py-2 rounded-2xl flex gap-1 items-center w-full justify-center">
        <span>Create Book</span>
      </button>
    </form>
  </div>
  );
}
