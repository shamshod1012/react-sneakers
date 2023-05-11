import React from "react";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";

import "./Cards.css";
import {
  // fetchSingleItems,
  remoteItems,
  changeFavorites,
} from "../../redux/thunk";

import { useDispatch } from "react-redux";

import { changeFavorites2 } from "../../redux/thunk";

export const Cards = ({ items }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);

  const changeFavoritesTest = (item, set, state) => {
    if (state) {
      dispatch(changeFavorites2("http://localhost:8000/allSneakers", item));
      dispatch(remoteItems("http://localhost:8000/favorites", item.id));
    } else {
      dispatch(changeFavorites("http://localhost:8000/allSneakers", item));
      // dispatch(fetchSingleItems("http://localhost:8000/favorites", item));
    }
    set((value) => !value);
  };

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
              changeFavoritesTest={changeFavoritesTest}
              item={sneakers}
            />
          );
        })}
      </div>
    </div>
  );
};
