import React from "react";

import "./Header.css";

import logo from "../../assets/images/logo.png";
import { BsCart2 } from "react-icons/bs";
import { BiHeart, BiUserCircle } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <img src={logo} alt="" />
        <div>
          <p>REACT SNEAKERS</p>
          <span>Магазин лучших кроссовок</span>
        </div>
      </div>
      <div className="headerRight">
        <div>
          <span>
            <BsCart2 className="cart" />
          </span>
          <span className="fullPrice">1905 руб</span>
        </div>

        <BiHeart className="fullLike" />

        <BiUserCircle className="profileImg" />
      </div>
    </div>
  );
};
