import React from "react";

import { Header, Wrapper, Cards } from "../../components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { OverlayCard } from "../../components/overLayCard";
export const Favorites = () => {
  const [data, setData] = useState([]);

  const { allSneakers } = useSelector((state) => state);

  useEffect(() => {
    const favorites = allSneakers.filter((element) => {
      return element.isFavorite === true;
    });
    setData(favorites);
  }, [allSneakers]);

  return (
    <Wrapper>
      <Header />

      {data.length ? (
        <Cards items={data} title={"Sevimli Oyoq Kiyimlar"} />
      ) : (
        <div className={"emptyFavorites"}>
          <p>😞</p>
          <p>Hech Qanday Sevimlilar Yo'q</p>
        </div>
      )}
      <OverlayCard />
    </Wrapper>
  );
};
