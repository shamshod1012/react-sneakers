import React from "react";
import { useState, useEffect } from "react";
import { MdOutlineExitToApp } from "react-icons/md";
import { useSelector } from "react-redux";
import { OverlaySingleCard } from "./OverlaySingleCard";

import { useDispatch } from "react-redux";

import "./OverlayCard.css";
export const OverlayCard = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [totalValue, setTotalValue] = useState("");
  const { allSneakers, isOverlayHide } = useSelector((state) => state);
  useEffect(() => {
    const orders = allSneakers.filter((element) => {
      return element.isOrdered === true;
    });

    setData(orders);
  }, [allSneakers]);

  function closeOverlay() {
    dispatch({ type: "CLOSE_OVERLAY" });
  }

  function getTotal() {
    const prices = data.map((item) => {
      return item.price;
    });
    const TotalPrice = prices.reduce((q11, q22) => {
      const q1 = Number(q11);
      const q2 = Number(q22);
      return q1 + q2;
    });
    // dispatch({ type: "GETTOTALPRICE", payload: TotalPrice });
    return TotalPrice;
  }
  if (data.length) {
    getTotal();
  }

  return (
    <div className={isOverlayHide ? "closedOverlay" : "overlayCards"}>
      <div className="overlayCardleft" onClick={closeOverlay}></div>
      <div className="overlayOrdersList">
        <div className="cartheader">
          <p>Savat</p>
          <p onClick={closeOverlay}>
            <MdOutlineExitToApp />
          </p>
        </div>
        <div className="cartmain">
          {data.length ? (
            data.map((item, i) => {
              return <OverlaySingleCard key={i} {...item} />;
            })
          ) : (
            <div className={"emptyFavoritesOverlay"}>
              <p>😞</p>
              <p>Hech Qanday Buyurtmalar Yo'q</p>
              <button className="btnReturn" onClick={closeOverlay}>
                {" "}
                Ortga qaytish
              </button>
            </div>
          )}
        </div>

        {data.length ? (
          <div className="cartfooter">
            <div className="umumiyNarxContainer">
              <p>Umumiy:</p>
              <p className="umumiyNarx">{data ? `${getTotal()} руб.` : ""}</p>
            </div>
            <div className="soliqContainer">
              {" "}
              <p>Soliq 5%:</p>
              <p className="umumiyNarx">
                {data ? `${((getTotal() / 100) * 5).toFixed()} руб.` : ""}
              </p>
            </div>
            <button>Buyurtmani rasmiylashtirish</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
