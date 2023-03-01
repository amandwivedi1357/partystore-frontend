import React, { Component } from "react";
import "./Home.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const Home = () => {

var slider01_settings = {
  className: "home-what-are-you-celeb-slider-sub-wrap",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  variableWidth: true,
};

var slider02_settings = {
  className: "home-what-are-you-celeb-slider-sub-wrap",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  variableWidth: true,
};

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

        <div id="homepage-what-are-you-celeb-slider-wrap">
          <Slider {...slider01_settings}>
            <div
              className="homepage-what-are-you-celeb-slider-slide"
              id="homepage-what-are-you-celeb-birthday-slide"
            >
              <div className="homepage-what-are-you-celeb-slider-slide-title">
                Birthday
              </div>
            </div>

            <div
              className="homepage-what-are-you-celeb-slider-slide"
              id="homepage-what-are-you-celeb-babyshower-slide"
            >
              <div className="homepage-what-are-you-celeb-slider-slide-title">
                Baby Shower
              </div>
            </div>

            <div
              className="homepage-what-are-you-celeb-slider-slide"
              id="homepage-what-are-you-celeb-houseparty-slide"
            >
              <div className="homepage-what-are-you-celeb-slider-slide-title">
                House Party
              </div>
            </div>

            <div
              className="homepage-what-are-you-celeb-slider-slide"
              id="homepage-what-are-you-celeb-officeparty-slide"
            >
              <div className="homepage-what-are-you-celeb-slider-slide-title">
                Office Party
              </div>
            </div>

            <div
              className="homepage-what-are-you-celeb-slider-slide"
              id="homepage-what-are-you-celeb-wedding-slide"
            >
              <div className="homepage-what-are-you-celeb-slider-slide-title">
                Saree Function
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* what are you celebrating section ends here */}

      {/* the party store section starts here */}

      <div id="homepage-the-party-store-section-wrap">
        <div id="homepage-the-party-store-section-headline">
          The party store
        </div>
        <div id="homepage-the-party-store-section-sub-headline">
          The only tool you’ll need to plan all your events
        </div>

        <div id="homepage-the-party-store-section-slider-wrap">
          <Slider {...slider02_settings}>
            <div className="homepage-the-party-store-section-slider-slide">
              <div className="homepage-the-party-store-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider02-prod01.jpeg"
                  alt=""
                  className="homepage-the-party-store-section-slide-img"
                />
              </div>

              <div className="homepage-the-party-store-section-slide-title-rating-wrap">
                <div className="homepage-the-party-store-section-slide-title">
                  Frozen theme balloon sets
                </div>
                <div className="homepage-the-party-store-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-the-party-store-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>250</div>
              </div>

              <div className="homepage-the-party-store-section-slide-buttons-wrap">
                <div className="homepage-the-party-store-section-slide-buy-button-wrap">
                  <button className="homepage-the-party-store-section-slide-buy-button">
                    Buy Now
                  </button>
                </div>
                <div className="homepage-the-party-store-section-slide-cart-button-wrap">
                  <button className="homepage-the-party-store-section-slide-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="homepage-the-party-store-section-slider-slide">
              <div className="homepage-the-party-store-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider02-prod02.jpeg"
                  alt=""
                  className="homepage-the-party-store-section-slide-img"
                />
              </div>

              <div className="homepage-the-party-store-section-slide-title-rating-wrap">
                <div className="homepage-the-party-store-section-slide-title">
                  Frozen theme balloon sets
                </div>
                <div className="homepage-the-party-store-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-the-party-store-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>250</div>
              </div>

              <div className="homepage-the-party-store-section-slide-buttons-wrap">
                <div className="homepage-the-party-store-section-slide-buy-button-wrap">
                  <button className="homepage-the-party-store-section-slide-buy-button">
                    Buy Now
                  </button>
                </div>
                <div className="homepage-the-party-store-section-slide-cart-button-wrap">
                  <button className="homepage-the-party-store-section-slide-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="homepage-the-party-store-section-slider-slide">
              <div className="homepage-the-party-store-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider02-prod03.jpeg"
                  alt=""
                  className="homepage-the-party-store-section-slide-img"
                />
              </div>

              <div className="homepage-the-party-store-section-slide-title-rating-wrap">
                <div className="homepage-the-party-store-section-slide-title">
                  Frozen theme balloon sets
                </div>
                <div className="homepage-the-party-store-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-the-party-store-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>250</div>
              </div>

              <div className="homepage-the-party-store-section-slide-buttons-wrap">
                <div className="homepage-the-party-store-section-slide-buy-button-wrap">
                  <button className="homepage-the-party-store-section-slide-buy-button">
                    Buy Now
                  </button>
                </div>
                <div className="homepage-the-party-store-section-slide-cart-button-wrap">
                  <button className="homepage-the-party-store-section-slide-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="homepage-the-party-store-section-slider-slide">
              <div className="homepage-the-party-store-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider02-prod04.jpeg"
                  alt=""
                  className="homepage-the-party-store-section-slide-img"
                />
              </div>

              <div className="homepage-the-party-store-section-slide-title-rating-wrap">
                <div className="homepage-the-party-store-section-slide-title">
                  Frozen theme balloon sets
                </div>
                <div className="homepage-the-party-store-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-the-party-store-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>250</div>
              </div>

              <div className="homepage-the-party-store-section-slide-buttons-wrap">
                <div className="homepage-the-party-store-section-slide-buy-button-wrap">
                  <button className="homepage-the-party-store-section-slide-buy-button">
                    Buy Now
                  </button>
                </div>
                <div className="homepage-the-party-store-section-slide-cart-button-wrap">
                  <button className="homepage-the-party-store-section-slide-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="homepage-the-party-store-section-slider-slide">
              <div className="homepage-the-party-store-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider02-prod05.jpeg"
                  alt=""
                  className="homepage-the-party-store-section-slide-img"
                />
              </div>

              <div className="homepage-the-party-store-section-slide-title-rating-wrap">
                <div className="homepage-the-party-store-section-slide-title">
                  Frozen theme balloon sets
                </div>
                <div className="homepage-the-party-store-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-the-party-store-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>250</div>
              </div>

              <div className="homepage-the-party-store-section-slide-buttons-wrap">
                <div className="homepage-the-party-store-section-slide-buy-button-wrap">
                  <button className="homepage-the-party-store-section-slide-buy-button">
                    Buy Now
                  </button>
                </div>
                <div className="homepage-the-party-store-section-slide-cart-button-wrap">
                  <button className="homepage-the-party-store-section-slide-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* the party store section ends here */}

      {/* second offer statement section starts here */}

      <div id="homepage-second-offer-statement-section-wrap">
        <div id="homepage-second-offer-statement-section-offer01-wrap">
          <div id="homepage-second-offer-statement-section-offer01-text01">
            All your party need one place
          </div>
          <div id="homepage-second-offer-statement-section-offer01-text02">
            Get up to 25% OFF
          </div>
        </div>
        <div id="homepage-second-offer-statement-section-offer02-wrap">
          <div id="homepage-second-offer-statement-section-offer02-text01">
            All your party need one place
          </div>
          <div id="homepage-second-offer-statement-section-offer02-text02">Get up to 25% OFF</div>
        </div>
      </div>
      {/* second offer statement section ends here */}
    </div>
  );
};
