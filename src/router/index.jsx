import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Create from "../pages/create";
import Home from "../pages/home";
import Search from "../pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
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
    ],
  },
]);

export default router;
