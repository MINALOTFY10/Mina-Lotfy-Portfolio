import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./ImagesSlider.module.css";

import React from "react";
import Slider from "react-slick";

const SimpleSlider = ({ images }) => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0", color: "white" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className={`${classes.sliderContainer} mt-3`}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className={classes.slide}>
            <div className={classes["postcard__img_link"]}>
              <img
                className={classes["postcard__img"]}
                src={img}
                alt={`Image ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
