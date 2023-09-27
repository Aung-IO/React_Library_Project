import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import BookDetail from "../pages/BookDetail";
import Create from "../pages/Create";
import Home from "../pages/Home";
import Search from "../pages/search";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/books/:id",
        element: <BookDetail />,
      },
    ],
  },
]);

export default router;
