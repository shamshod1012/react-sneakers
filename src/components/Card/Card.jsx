import React from "react";

import {
  AiOutlinePlusSquare,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

import "./Card.css";

export const Card = ({ id, title, image, price }) => {
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <div className="">
          <AiOutlineHeart className="emptyHeart" size={24} />
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
