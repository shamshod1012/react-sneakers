import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { fetchSingleItems, remoteItems } from "../../redux/thunk";
import "./Card.css";
import { useSelector } from "react-redux";

export const Card = ({ item, changeFavorites }) => {
  const { favorites } = useSelector((state) => state);
  const { id, title, image, price, isFavorite } = item;
  const dispatch = useDispatch();

  // const isFavorite = favorites.some((favorite) => {
  //   console.log(favorite.id);
  //   console.log(id);

  //   return favorite.id === id;
  // });

  const [isLiked, setIsLiked] = useState(isFavorite);
  const [isOrder, setIsOrder] = useState(false);

  function handleFavoriteClick() {
    setIsLiked((liked) => !liked);
    if (isLiked) {
      changeFavorites(item);

      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: item });
      dispatch(remoteItems("http://localhost:8000/favorites", item.id));
    } else {
      changeFavorites(item);
    }
  }

  function handleOrderClick() {
    setIsOrder((ordered) => !ordered);
    if (isOrder) {
      dispatch(remoteItems("http://localhost:8000/orders", item.id));

      dispatch({ type: "REMOVE_FROM_ORDERS", payload: item });
    } else {
      dispatch(fetchSingleItems("http://localhost:8000/orders", item));

      dispatch({ type: "ADD_TO_ORDERS", payload: item });
    }
  }
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <div
          className={!isLiked ? "" : "likedCard"}
          onClick={handleFavoriteClick}
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
