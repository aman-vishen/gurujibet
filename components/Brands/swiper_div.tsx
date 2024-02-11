import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="images/brand/apna.webp"></img>
        </div>
        <div>
        <img src="images/brand/dimond.webp"></img>
        </div>
        <div>
        <img src="images/brand/safron.webp"></img>
        </div>
        <div>
        <img src="images/brand/skyexch.webp"></img>
        </div>
        <div>
        <img src="images/brand/world777.webp"></img>
        </div>
        {/* <div>
        <img src="images/brand/apna.webp"></img>
        </div> */}
      </Slider>
    </div>
  );
}

export default AutoPlay;