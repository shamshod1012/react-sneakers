import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { BsCart2 } from "react-icons/bs";
import { BiHeart, BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="headerContainer">
      <Link to={"/"}>
        <div className="headerLeft">
          <img src={"/assets/images/logo.png"} alt="" />
          <div>
            <p>REACT SNEAKERS</p>
            <span>Магазин лучших кроссовок</span>
          </div>
        </div>
      </Link>
      <div className="headerRight">
        <div>
          <span>
            <BsCart2 className="cart" />
          </span>
          <span className="fullPrice">23342 руб</span>
        </div>
        <Link to={"/favorites"}>
          <BiHeart className="fullLike" />
        </Link>
        <Link to={"/orders"}>
          <BiUserCircle className="profileImg" />
        </Link>
      </div>
    </div>
  );
};
