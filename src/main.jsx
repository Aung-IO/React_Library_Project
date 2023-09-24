import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";

import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>

    <RouterProvider router={router} />
  </ThemeContextProvider>
);
