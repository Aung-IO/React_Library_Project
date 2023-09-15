import React from "react";
import cover from "../assets/cover.jpg";

export default function BookList() {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8];
  let genres = ["front-end", "backend", "api", "mobile"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {posts.map(() => (
        <dir className="p-4 border border-1">
          <img src={cover} alt="" />
          <div className="text-center mt-2 space-y-2">
            <h1>Book Titel</h1>
            <p>Book Description</p>

            {/* Genres */}
            <div className="flex flex-wrap">
              {genres.map((genre) => (
                <span className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500">
                  {" "}
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </dir>
      ))}
    </div>
  );
}
