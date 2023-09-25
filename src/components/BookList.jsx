import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cover from "../assets/cover.jpg";
import { db } from "../firebase";
import useTheme from "../hooks/useTheme";

export default function BookList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");
  let { isDark } = useTheme();

  let [error, setError] = useState("");
  let [books, setBooks] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    let ref = collection(db, "books");
    getDocs(ref).then((docs) => {
      if (docs.empty) {
        setError("No Document Found!");
        setLoading(false);
      } else {
        let books = [];
        docs.forEach((doc) => {
          let book = { id: doc.id, ...doc.data() };
          books.push(book);
        });
        setBooks(books);
        setLoading(false);
        setError("");
      }
    });
  }, []);

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
              <dir
                className={`p-4 border border-1 min-h-[470px] ${
                  isDark ? "bg-dcard border-primary text-white" : ""
                }`}
              >
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
