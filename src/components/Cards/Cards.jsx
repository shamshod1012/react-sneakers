import React from "react";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";

import "./Cards.css";
import {
  remoteItems,
  changeFavorites,
} from "../../redux/thunk";

import { useDispatch } from "react-redux";

import { changeFavorites2 } from "../../redux/thunk";

export const Cards = ({ items }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);

 

  return (
    <div className="sneakersContainer">
      <div className="sneakersHeader">
        <p>Все кроссовки</p>

        <input type="text" placeholder="Search..." />
      </div>

      <div className="sneakersMain">
        {items.map((sneakers) => {
          return (
            <Card
              key={sneakers.id}
               
              item={sneakers}
            />
          );
        })}
      </div>
    </div>
  );
};
