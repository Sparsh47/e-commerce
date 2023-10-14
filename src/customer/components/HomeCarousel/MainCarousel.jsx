import React from "react";
import { carouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = carouselData.map((item) => {
    return (
      <img
        className="cursor-pointer -z-10"
        src={item.image}
        role="presentation"
        alt=""
      />
    );
  });
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default MainCarousel;
