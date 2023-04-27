import React from "react";
import { allSneakers } from "../../data";
import { Card } from "../Card/Card";

import "./Cards.css";
export const Cards = () => {
  return (
    <div className="sneakersContainer">
      <div className="sneakersHeader">
        <p>Все кроссовки</p>

        <input type="text" placeholder="Search..." />
      </div>

      <div className="sneakersMain">
        {allSneakers.map((sneakers) => {
          return <Card {...sneakers} />;
        })}
      </div>
    </div>
  );
};
