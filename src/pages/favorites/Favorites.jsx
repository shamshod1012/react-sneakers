import React from "react";

import { Header, Wrapper, Cards } from "../../components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
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
      <Cards items={data} />
    </Wrapper>
  );
};
