import React from "react";
import "./Slider.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const images = [
  "https://imageio.forbes.com/blogs-images/josephdeacetis/files/2018/10/180519_AB-KOIO2869_focus.jpg?format=jpg&width=960",
  "https://e0.pxfuel.com/wallpapers/940/270/desktop-wallpaper-blue-sneakers-ultra-wide-tv-net-sneaker.jpg",
  "https://images.wallpaperscraft.com/image/single/sneakers_shoes_texture_168868_2560x1024.jpg",
  "https://images.wallpaperscraft.com/image/single/sneakers_shoes_legs_115414_2560x1024.jpg",
];
export const Slider = () => {
  const [idx, setIdx] = useState(0);
  const [i1, setI1] = useState();
  const [i2, setI2] = useState();
  useEffect(() => {
    if (idx === 0) {
      setI1(false);
    } else {
      setI1(true);
    }
    if (idx === images.length - 1) {
      setI2(false);
    } else {
      setI2(true);
    }
  }, [idx]);

  return (
    <div className="slider">
      {i1 && (
        <p
          className="icon i1"
          onClick={() => {
            setIdx((value) => {
              return value - 1;
            });
          }}
        >
          <AiOutlineLeft />
        </p>
      )}
      <div>
        {images.map((item, i) => {
          let position = "nextSlide";
          if (idx === i) {
            position = "activeSlide";
          }
          if (i < idx) {
            position = "lastSlide";
          }

          return (
            <article key={i} className={`${position} sliderArticle`}>
              <img src={item} alt="" />
            </article>
          );
        })}
      </div>{" "}
      {i2 && (
        <p
          className="icon i2"
          onClick={() => {
            setIdx((value) => {
              return value + 1;
            });
          }}
        >
          <AiOutlineRight />
        </p>
      )}
    </div>
  );
};
