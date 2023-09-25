import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookImg from "../assets/cover.jpg";
import { db } from "../firebase";
import useTheme from "../hooks/useTheme";

export default function BookDetail() {
  let { isDark } = useTheme();
  let { id } = useParams();
  let [error, setError] = useState("");
  let [book, setBook] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let ref = doc(db, "books", id);
    getDoc(ref).then((doc) => {
      if (doc.exists()) {
        let book = { id: doc.id, ...doc.data() };
        setBook(book);
        setLoading(false);
        setError("");
      } else {
        setError("No Document Found!");
        setLoading(false);
      }
    });
  }, [id]);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      {book && (
        <div className="grid grid-cols-2 mt-3 h-screen">
          <div>
            <img src={bookImg} alt="" className="w-[70%]" />
          </div>

          <div className={`space-y-4 ${isDark ? "text-white" : ""}`}>
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <div className="space-x-3">
              {book.categories.map((category) => (
                <span
                  key={category}
                  className=" text-white rounded-full px-3 py-1 text-sm bg-blue-500"
                >
                  {category}
                </span>
              ))}
            </div>

            <p>{book.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
