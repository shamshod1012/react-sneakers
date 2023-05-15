import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchItems } from "../../redux/thunk";
import { changeOrder2 } from "../../redux/thunk";
import { useEffect } from "react";
import { useState } from "react";
export const OverlaySingleCard = (item) => {
  const [bool, setBool] = useState(true);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     fetchItems("http://localhost:8000/allSneakers", "SAVE_ALL_SNEAKERS")
  //   );
  // }, [bool]);

  const { image, id, title, price } = item;
  return (
    <div className="overlaySingleCard">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p className="overLayCardTitle">{title}</p>
        <p className="overLayCardPrice">{price} руб.</p>
      </div>
      <div
        className="OverlayDeleteIcon"
        onClick={() => {
          setBool((bool) => !bool);
          dispatch(changeOrder2("http://localhost:8000/allSneakers", item));
        }}
      >
        <p>+</p>
      </div>
    </div>
  );
};
