import React from "react";

import { Header, Wrapper, Cards } from "../../components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export const Orders = () => {
  const [data, setData] = useState([]);
  const { allSneakers } = useSelector((state) => state);
  useEffect(() => {
    const orders = allSneakers.filter((element) => {
      return element.isOrdered === true;
    });

    setData(orders);
  }, [allSneakers]);

  return (
    <Wrapper>
      <Header />
      {data.length ? (
        <Cards items={data} title={"Sevimli Oyoq Kiyimlar"} />
      ) : (
        <div className={"emptyFavorites"}>
          <p>😞</p>
          <p>Hech Qanday Buyurtmalar Yo'q</p>
        </div>
      )}
    </Wrapper>
  );
};
