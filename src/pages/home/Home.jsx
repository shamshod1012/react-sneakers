import React from "react";
import { useSelector } from "react-redux";
import { Cards, Slider, Header, Wrapper } from "../../components";
import { OverlayCard } from "../../components/overLayCard/";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "../../redux/thunk";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { allSneakers, isOverlayHide } = state;
  useEffect(() => {
    dispatch(
      fetchItems("http://localhost:8000/allSneakers", "SAVE_ALL_SNEAKERS")
    );
  }, [isOverlayHide]);
  console.log(isOverlayHide);
  return (
    <div className={isOverlayHide ? "Home" : "Home hiddenHome"}>
      <Wrapper>
        <Header />
        <Slider />

        <Cards items={allSneakers} title={"Barcha Oyoq Kiyimlar"} />
        <OverlayCard />
      </Wrapper>
    </div>
  );
};
