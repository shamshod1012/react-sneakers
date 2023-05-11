import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

import "./Card.css";
import { changeFavorites, changeFavorites2 } from "../../redux/thunk";
import { changeOrder, changeOrder2 } from "../../redux/thunk";

export const Card = ({ item, changeFavoritesTest }) => {
  const { id, title, image, price, isFavorite, isOrdered } = item;
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(isFavorite);
  const [isOrder, setIsOrder] = useState(isOrdered);

  function handleFavoriteClick() {
    if (isLiked) {
      dispatch(changeFavorites2("http://localhost:8000/allSneakers", item));
      setIsLiked(false);
    } else {
      dispatch(changeFavorites("http://localhost:8000/allSneakers", item));
      setIsLiked(true);
    }
  }

  function handleOrderClick() {
    if (isOrder) {
      dispatch(changeOrder2("http://localhost:8000/allSneakers", item));
      setIsOrder(false);
    } else {
      dispatch(changeOrder("http://localhost:8000/allSneakers", item));
      setIsOrder(true);
    }
  }
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <div
          className={!isLiked ? "" : "likedCard"}
          onClick={() => {
            handleFavoriteClick();
          }}
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
          onClick={handleOrderClick}
        >
          {isOrder ? <BsCheckLg size={25} /> : <BiPlus size={25} />}
        </div>
      </div>
    </div>
  );
};
