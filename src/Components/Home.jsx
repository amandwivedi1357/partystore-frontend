import React, { Component } from "react";
import "./Home.css"
import ControlledCarousel from "./Carousel.jsx";
export const Home = () => {

  return (
    <div id="homepage-main-wrapper">
      {/* Banner section starts here */}

      <div id="homepage-packages-and-banner-wrap">
        <div id="homepage-packages-wrap">
          <ul id="homepage-packages-list-ul">
            <li>POPULAR PACKAGES</li>
            <li>Around the world theme</li>
            <li>Baby arrival</li>
            <li>Dothi Function</li>
            <li>House Warming</li>
            <li>Office in house decor</li>
            <li>Saree Function</li>
            <li>Showroom Inauguration</li>
            <li>The Party Store</li>
            <li>Wedding Anniversary</li>
          </ul>
        </div>

        <div id="homepage-banner-wrap">
          <img
            src="./Home-img/banner.jpeg"
            alt="banner"
            id="homepage-banner-image"
          />
        </div>
      </div>

      {/* Banner section ends here */}

      {/* offer statement section starts here */}
      <div id="homepage-offer-statement-section-wrap">
        <img src="./Home-img/offer.png" alt="" />
        <div id="homepage-offer-statement-section-text">
          <div className="homepage-offer-statement-section-text-contents">
            All your party need
          </div>
          <div className="homepage-offer-statement-section-text-contents">
            one place{" "}
            <span id="homepage-offer-statement-section-offer-text-content">
              Get up to 25% OFF{" "}
            </span>
            <span className="homepage-offer-statement-section-text-contents">
              on first purchase
            </span>
          </div>
        </div>
      </div>
      {/* offer statement section ends here */}

      {/* what are you celebrating section starts here */}
      <div id="homepage-what-are-you-celeb-section-wrap">
        <div id="homepage-what-are-you-celeb-title">
          What are you celebrating ?
        </div>
        <div id="homepage-what-are-you-celeb-sub-title">
          Select your party below to start
        </div>
      </div>
      {/* what are you celebrating section ends here */}
    </div>
  );
};
