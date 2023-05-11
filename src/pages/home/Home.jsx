import React from "react";
import { useSelector } from "react-redux";
import { Cards, Slider, Header, Wrapper } from "../../components";

import "./Home.css";

export const Home = () => {
  const state = useSelector((state) => state);
  const { allSneakers } = state;
  console.log(allSneakers);
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
