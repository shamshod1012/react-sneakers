import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Cards, Slider, Header, Wrapper } from "../../components";
import { useDispatch } from "react-redux";

import "./Home.css";
import { fetchItems } from "../../redux/thunk";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchItems("http://localhost:8000/allSneakers", "SAVE_ALL_SNEAKERS")
    );
    dispatch(fetchItems("http://localhost:8000/favorites", "SAVE_FAVORITES_S"));
  }, []);


  
  const state = useSelector((state) => state);
  const { allSneakers } = state;
  return (
    <div className="Home">
      <Wrapper>
        <Header />
        <Slider />

        <Cards items={allSneakers} />
      </Wrapper>
    </div>
  );
};
