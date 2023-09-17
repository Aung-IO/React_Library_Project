import React from "react";
import { useParams } from "react-router-dom";
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
        <div className="text-center mt-2 space-y-2">
          <h1>{book.title}</h1>
          <p>{book.description}</p>
        </div>
      )}
    </>
  );
}
