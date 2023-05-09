import React from "react";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";

import "./Cards.css";
import { fetchSingleItems, remoteItems } from "../../redux/thunk";

import { changeFavotie } from "../../redux/thunk";
import { useDispatch } from "react-redux";
export const Cards = ({ items }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);

  function changeFavorites(item) {
    dispatch(changeFavotie(" http://localhost:8000/allSneakers", item));

    dispatch(
      fetchSingleItems(
        "http://localhost:8000/allSneakers",
        "http://localhost:8000/favorites",
        item
      )
    );
  }
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
              changeFavorites={changeFavorites}
              item={sneakers}
            />
          );
        })}
      </div>
    </div>
  );
};
