import React from "react";
import { useSelector } from "react-redux";
import { Cards, Slider, Header, Wrapper } from "../../components";
import { sneakers } from "../../data";
import "./Home.css";
export const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="Home">
      <Wrapper>
        <Header />
        <Slider />

        <Cards items={sneakers.allSneakers} />
      </Wrapper>
    </div>
  );
};
