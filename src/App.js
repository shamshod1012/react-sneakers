import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/home/Home";
import { Favorites } from "./pages/favorites";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "./redux/thunk";

import { useSelector } from "react-redux";

import { ErrorPage } from "./pages/error page";
import { Orders } from "./pages/orders";
const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);
function App() {
  const state = useSelector((state) => state);
  const { allSneakers } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchItems("http://localhost:8000/allSneakers", "SAVE_SHOWING_SNEAKERS")
    );
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
