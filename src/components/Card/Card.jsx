import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  AiOutlinePlusSquare,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

import "./Card.css";

export const Card = ({ item }) => {
  const dispatch = useDispatch();

  const { id, title, image, price } = item;
  const [isLiked, setIsliked] = useState(false);

  function setFavorite() {
    dispatch({ type: "ADD_TO_FAVORITES", payload: item });

    setIsliked((value) => !value);
  }

  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <div
          className={!isLiked ? "" : "likedCard"}
          onClick={() => setFavorite()}
        >
          {!isLiked ? (
            <AiOutlineHeart size={24} />
          ) : (
            <AiFillHeart className="fullHeart" size={24} />
          )}
        </div>
        <img src={image} alt="" />
      </div>

      <div className="cardMain">{title}</div>

      <div className="cardFooter">
        <div className="cardPrice">
          <span>Цена:</span>
          <p>{price} руб</p>
        </div>
        <AiOutlinePlusSquare className="plusIcon" size={30} />
      </div>
    </div>
  );
};
