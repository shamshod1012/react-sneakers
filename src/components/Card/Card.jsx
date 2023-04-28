import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  AiOutlinePlusSquare,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

import { BiPlus } from "react-icons/bi";

import "./Card.css";

export const Card = ({ item }) => {
  const dispatch = useDispatch();

  const { id, title, image, price } = item;
  const [isLiked, setIsliked] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  function setFavorite() {
    setIsliked((value) => !value);
    if (isLiked) {
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: item });
    } else {
      dispatch({ type: "ADD_TO_FAVORITES", payload: item });
    }
  }
  function setOrder() {
    setIsOrder((order) => !order);

    if (isOrder) {
      dispatch({ type: "REMOVE_FROM_ORDERS", payload: item });
    } else {
      dispatch({ type: "ADD_TO_ORDERS", payload: item });
    }
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

        <div
          className={isOrder ? "orderIcon orderedIcon" : "orderIcon"}
          onClick={setOrder}
        >
          {isOrder ? <BsCheckLg size={25} /> : <BiPlus size={25} />}
        </div>
      </div>
    </div>
  );
};
