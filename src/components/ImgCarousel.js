import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img alt="" src="/aeropress_mockup.png" />
        <a href="https://dominikjuriga.me/aeropress-timer/" className="legend">
          AeroPress Timer
        </a>
      </div>
      <div>
        <img alt="" src="/photofolio.jpg" />
        <a href="https://dominikjuriga.me/photofolio" className="legend">
          Photography Portfolio
        </a>
      </div>
    </Carousel>
  );
};

export default ImgCarousel;
