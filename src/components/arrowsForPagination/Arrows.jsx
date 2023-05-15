import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

import "./Arrows.css";

export const Arrows = (props) => {
  const { allSneakers, setCurrentPage, currentPage } = props;
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(true);
  const allPages = Math.ceil(allSneakers.length / 8);
  console.log(allPages);
  useEffect(() => {
    if (currentPage === allPages) {
      setIsRight(false);
    } else {
      setIsRight(true);
    }
    if (currentPage === 1) {
      setIsLeft(false);
    } else {
      setIsLeft(true);
    }
  }, [currentPage]);

  function increase() {
    setCurrentPage((value) => value + 1);
  }
  function decrease() {
    setCurrentPage((value) => value - 1);
  }

  return (
    <div className="paginationContainer">
      <div>
        <span onClick={decrease} className={isLeft ? "" : "disabledArrow"}>
          <AiOutlineLeftCircle />
        </span>
        <p>{currentPage}</p>
        <span onClick={increase} className={isRight ? "" : "disabledArrow"}>
          <AiOutlineRightCircle />
        </span>
      </div>
    </div>
  );
};
