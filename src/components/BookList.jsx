import React from "react";
import { Link, useLocation } from "react-router-dom";
import cover from "../assets/cover.jpg";
import useFetch from "../hooks/useFetch";

export default function BookList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");

  let {
    data: books,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ""}`);

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {loading && <p>loading ... </p>}

      {/* book list */}

      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <dir className="p-4 border border-1">
                <img src={cover} alt="" />
                <div className="text-center mt-2 space-y-2">
                  <h1>{book.title}</h1>
                  <p>{book.description}</p>

                  {/* Genres */}
                  <div className="flex flex-wrap">
                    {book.categories.map((category) => (
                      <span
                        key={category}
                        className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </dir>
            </Link>
          ))}
        </div>
      )}
     {books && !books.length && (
        <p className="text-center text-xl text-gray-500 mt-4">
          No Search Results Found
        </p>
      )}
    </div>
  );
}
