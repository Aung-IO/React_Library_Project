import React from "react";
import { useParams } from "react-router-dom";
import bookImg from "../assets/cover.jpg";
import useFetch from "../hooks/useFetch";

export default function BookDetail() {
  let { id } = useParams();
  let {
    data: book,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      {book && (
        <div className="grid grid-cols-2 mt-3">
          <div>
            <img src={bookImg} alt="" className="w-[70%]" />
          </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <div className="space-x-3">
            {book.categories.map( category => (
              <span key={category} className=" text-white rounded-full px-3 py-1 text-sm bg-blue-500">{category}</span>
            ))}
          </div>

          <p>{book.description}</p>
        </div>
          
        </div>
      )}
    </>
  );
}
