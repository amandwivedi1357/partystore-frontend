import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Home = () => {

     var settings = {
       dots: true,
       infinite: true,
       slidesToShow: 2,
       slidesToScroll: 1,
       autoplay: true,
       speed: 2000,
       responsive: [
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             dots: false,
           },
         },
       ],
     };

  return (
    <div id="homepage-main-wrapper">
      {/* Homepage slider 01 starts here */}

      <div id="home-banner-slider-wrap">
        <Slider {...settings} id="home-banner-slider-element" width="80%">
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
          <div className="home-banner-slider">
            <img src="./slider.jpg" alt="banner slider" />
          </div>
        </Slider>
      </div>

      {/* Homepage slider 01 ends here */}
    </div>
  );
};
