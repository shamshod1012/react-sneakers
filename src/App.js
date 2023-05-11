import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/home/Home";
import { Favorites } from "./pages/favorites";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "./redux/thunk";

import { useSelector } from "react-redux";
import { Orders } from "./pages/orders";
const router = createBrowserRouter([
  {
    path: "/",
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
]);

function App() {
  const { allSneakers } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchItems("http://localhost:8000/allSneakers", "SAVE_ALL_SNEAKERS")
    );
  }, [allSneakers]);

  return <RouterProvider router={router} />;
}

export default App;
