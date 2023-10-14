import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex >= 0 ? newIndex : 0);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex < items.length ? newIndex : items.length - 1);
      carouselRef.current.slideNext();
    }
  };

  const items = data.map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="relative px-4 lg:px-8 border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          ref={carouselRef}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 6 && (
          <Button
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "rotate(90deg) translateY(-20%) translateX(50%)",
              bgcolor: "white",
            }}
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "rotate(90deg) translateY(80%) translateX(50%)",
              bgcolor: "white",
            }}
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
