import React from "react";
import { useSelector } from "react-redux";
import { Cards, Slider, Header, Wrapper } from "../../components";
import { OverlayCard } from "../../components/overLayCard/";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "../../redux/thunk";

import { Arrows } from "../../components/arrowsForPagination";

import "./Home.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { showingSneakers, allSneakers, isOverlayHide } = state;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchItems(
        `http://localhost:8000/allSneakers?_page=${currentPage}&_limit=8`,
        "SAVE_ALL_SNEAKERS"
      )
    );
    navigate(`page/${currentPage}`);
  }, [currentPage]);
  return (
    <div className={isOverlayHide ? "Home" : "Home hiddenHome"}>
      <Wrapper>
        <Header />
        <Slider />

        <Cards
          currentPage={currentPage}
          items={allSneakers}
          title={"Barcha Oyoq Kiyimlar"}
        />
        <OverlayCard />
        <Arrows
          allSneakers={showingSneakers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Wrapper>
    </div>
  );
};
