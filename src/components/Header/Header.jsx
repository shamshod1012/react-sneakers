import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import { BsCart2 } from "react-icons/bs";
// import { useSelector } from "react-redux";
import { BiHeart, BiUserCircle } from "react-icons/bi";
export const Header = () => {
  const dispatch = useDispatch();
  // const { totalPrice } = useSelector((state) => state);
  function openOverlay() {
    dispatch({ type: "OPEN_OVERLAY" });
  }

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
        <div
          onClick={() => {
            openOverlay();
          }}
        >
          <span>
            <BsCart2 className="cart" />
          </span>
          <span className="fullPrice">{/*totalPrice*/} руб.</span>
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
