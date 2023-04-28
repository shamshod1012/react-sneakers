import React from "react";
import { Card } from "../Card/Card";

import "./Cards.css";
export const Cards = ({ items }) => {
  return (
    <div className="sneakersContainer">
      <div className="sneakersHeader">
        <p>Все кроссовки</p>

        <input type="text" placeholder="Search..." />
      </div>

      <div className="sneakersMain">
        {items.map((sneakers) => {
          return <Card key={sneakers.id} item={sneakers} />;
        })}
      </div>
    </div>
  );
};
