import React from "react";
import { Card } from "../Card/Card";

import "./Cards.css";

export const Cards = ({ items, title, currentPage }) => {
  return (
    <div className="sneakersContainer">
      <div className="sneakersHeader">
        <p>{title}</p>

        <input type="text" placeholder="Search..." />
      </div>

      <div className="sneakersMain">
        {items.map((sneakers) => {
          return (
            <Card key={sneakers.id} currentPage={currentPage} item={sneakers} />
          );
        })}
      </div>
    </div>
  );
};
