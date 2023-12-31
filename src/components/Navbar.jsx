import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import darkIcon from "../assets/dark_mode.svg";
import ligthIcon from "../assets/light_mode.svg";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  let [search, setSearch] = useState("");
  let navigate = useNavigate();
  let handleSearch = () => {
    navigate(`/?search=${search}`);
  };
 let handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
 }

 let {isDark, changeTheme} = useTheme();


  return (
    <div>
      <nav className={`border border-b-1 ${isDark ? 'bg-dbg' : 'bg-white'}`}>
        <ul className="flex justify-between items-center p-3 max-w-6xl mx-auto">
          <li className="flex items-center gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              type="type"
              placeholder="Search...."
              className="outline-none hidden md:block bg-slate-100 rounded-md p-1"
            />
            <button onClick={handleSearch} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </li>
          <Link
            to="/"
            className="flex items-center gap-2 md:-ml-32 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>

            <span className="text-2xl font-bold text-primary  hidden md:block">
              Technoverse
            </span>
          </Link>
          <li className="flex gap-3 items-center">
            {/* create book btn */}
            <Link
              to="/create"
              className="text-white bg-primary px-3 py-2 rounded-2xl flex gap-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="hidden md:block">Create Book</span>
            </Link>
            {/* profile image */}
            <div className="w-11">
              <img
                src="https://d27v83ov1up738.cloudfront.net/user-profiles/zZR327gfuRcilZzkHjPyRIam50MpjeUoyVnGpy4W.jpg"
                className="w-full rounded-full"
              />
            </div>
            <div className="cursor-pointer">
            {isDark && <img src={ligthIcon} alt="" className="w-8" onClick={() => changeTheme('light')} />}
            {!isDark && <img src={darkIcon} alt=""  className="w-8" onClick={() => changeTheme('dark')}/>}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
