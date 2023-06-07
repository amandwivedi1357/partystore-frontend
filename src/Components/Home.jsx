import React from "react";
import "./Home.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { TiHeartFullOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const Home = () => {
  
  var productinfo = null;

  var slider01_settings = {
    className: "homepage-slider01-slider02-slider-component",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  };

  var slider02_settings = {
    className: "homepage-slider01-slider02-slider-component",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  var slider03_settings = {
    className: "homepage-banner-slider-component",
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var slider04_settings = {
    className: "homepage-testimonial-section-slider-component",
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };

   const { user, isError, isLoading } = useSelector((state) => ({
     user: state.user,
     isError: state.isError,
     isLoading: state.isLoading,
   }));

 const handleWishlist=(productinfo)=>{
  if (user) {
    axios
      .post(
        `https://angry-leather-jacket-wasp.cyclic.app/wishlist/${user[0]._id}`,
        {
          productName: productinfo.productName,
          description: productinfo.description,
          price: productinfo.price,
          image: productinfo.image,
        }
      )
      .then((res) => console.log(res.data));
  } 
   }

   const handleWishlistevent=(e)=>{
         e.target.style.color="red";
   }

const handleCart = (productinfo) => {
  if (user) {
    axios
      .post(
        `https://angry-leather-jacket-wasp.cyclic.app/cart/${user[0]._id}`,
        {
          productName: productinfo.productName,
          description: productinfo.description,
          price: productinfo.price,
          image: productinfo.image,
        }
      )
      .then((res) => console.log(res.data));
  }
};

  return (
    <div id="homepage-main-wrapper">
      {/* Banner section starts here */}

      <div id="homepage-packages-and-banner-wrap">
        <div id="homepage-packages-wrap">
          <ul id="homepage-packages-list-ul">
            <li>POPULAR PACKAGES</li>
            <a href="/celebrations/Bridal Shower">
              <li>Bridal Shower</li>
            </a>
            <a href="/celebrations/Baby Arrival">
              <li>Baby arrival</li>
            </a>
            <a href="/celebrations/Congrats Party">
              <li>Congrats Party</li>
            </a>
            <a href="/celebrations/House Warming">
              <li>House Warming</li>
            </a>
            <a href="/celebrations/Engagement">
              <li>Engagement</li>
            </a>
            <a href="/celebrations/Saree Function">
              <li>Saree Function</li>
            </a>
            <a href="/celebrations/Bachelorette party">
              <li>Bachelorette party</li>
            </a>
            <a href="/products">
              <li>The Party Store</li>
            </a>
            <a href="/celebrations/Wedding Anniversary">
              <li>Wedding Anniversary</li>
            </a>
          </ul>
        </div>

        <Slider {...slider03_settings}>
          <div className="homepage-banner-wrap">
            <img
              src="./Home-img/banner01.jpg"
              alt="banner"
              className="homepage-banner-image"
            />
          </div>
          <div className="homepage-banner-wrap">
            <img
              src="./Home-img/banner02.jpeg"
              alt="banner"
              className="homepage-banner-image"
            />
          </div>
          <div className="homepage-banner-wrap">
            <img
              src="./Home-img/banner03.jpg"
              alt="banner"
              className="homepage-banner-image"
            />
          </div>
          <div className="homepage-banner-wrap">
            <img
              src="./Home-img/banner04.jpg"
              alt="banner"
              className="homepage-banner-image"
            />
          </div>
        </Slider>
      </div>

      {/* Banner section ends here */}

      {/* offer statement section starts here */}
      <div id="homepage-offer-statement-section-wrap">
        <img src="./Home-img/offer.png" alt="" />
        <div id="homepage-offer-statement-section-text">
          <div className="homepage-offer-statement-section-text-contents">
            All your party need one place
          </div>
          <div className="homepage-offer-statement-section-text-contents">
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
          <div id="homepage-second-offer-statement-section-offer02-text02">
            Get up to 25% OFF
          </div>
        </div>
      </div>
      {/* second offer statement section ends here */}

      {/* around the world decoration section starts here */}

      {/* <div className="homepage-themes-section-wrap">
        <div className="homepage-themes-section-title">
          Around the world decoration
        </div>

        <div id="homepage-around-the-world-section-slider-wrap">
          <Slider {...slider03_settings}>
            <div className="homepage-themes-section-slider-slide">
              <div className="homepage-themes-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider03-prod01.jpeg"
                  alt=""
                  className="homepage-themes-section-slide-img"
                />
              </div>

              <div className="homepage-themes-section-slide-title-rating-wrap">
                <div className="homepage-themes-section-slide-title">
                  Airport theme decoration
                </div>
                <div className="homepage-themes-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-themes-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>2000</div>
              </div>
            </div>

            <div className="homepage-themes-section-slider-slide">
              <div className="homepage-themes-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider03-prod02.jpeg"
                  alt=""
                  className="homepage-themes-section-slide-img"
                />
              </div>

              <div className="homepage-themes-section-slide-title-rating-wrap">
                <div className="homepage-themes-section-slide-title">
                  Zack theme decoration
                </div>
                <div className="homepage-themes-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-themes-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>2000</div>
              </div>
            </div>

            <div className="homepage-themes-section-slider-slide">
              <div className="homepage-themes-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider03-prod03.jpeg"
                  alt=""
                  className="homepage-themes-section-slide-img"
                />
              </div>

              <div className="homepage-themes-section-slide-title-rating-wrap">
                <div className="homepage-themes-section-slide-title">
                  Around the world theme
                </div>
                <div className="homepage-themes-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-themes-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>2000</div>
              </div>
            </div>

            <div className="homepage-themes-section-slider-slide">
              <div className="homepage-themes-section-slide-img-wrap">
                <img
                  src="./Home-img/home-slider03-prod04.jpeg"
                  alt=""
                  className="homepage-themes-section-slide-img"
                />
              </div>

              <div className="homepage-themes-section-slide-title-rating-wrap">
                <div className="homepage-themes-section-slide-title">
                  Airport theme decoration
                </div>
                <div className="homepage-themes-section-slide-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
              </div>

              <div className="homepage-themes-section-slide-price-wrap">
                <div>MRP</div>
                <div>₹</div>
                <div>2000</div>
              </div>
            </div>
          </Slider>
        </div>
      </div> */}
      {/* around the world decoration section ends here */}

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
            <a
              href="/birthday/prince"
              className="homepage-what-are-you-celeb-slider-link"
            >
              {" "}
              <div
                className="homepage-what-are-you-celeb-slider-slide"
                id="homepage-what-are-you-celeb-birthday-slide"
              >
                <div className="homepage-what-are-you-celeb-slider-slide-title">
                  Birthday
                </div>
              </div>
            </a>

            <a
              href="/celebrations/Baby Shower"
              className="homepage-what-are-you-celeb-slider-link"
            >
              {" "}
              <div
                className="homepage-what-are-you-celeb-slider-slide"
                id="homepage-what-are-you-celeb-babyshower-slide"
              >
                <div className="homepage-what-are-you-celeb-slider-slide-title">
                  Baby Shower
                </div>
              </div>
            </a>

            <a href="#" className="homepage-what-are-you-celeb-slider-link">
              <div
                className="homepage-what-are-you-celeb-slider-slide"
                id="homepage-what-are-you-celeb-houseparty-slide"
              >
                <div className="homepage-what-are-you-celeb-slider-slide-title">
                  House Party
                </div>
              </div>
            </a>

            <a href="#" className="homepage-what-are-you-celeb-slider-link">
              {" "}
              <div
                className="homepage-what-are-you-celeb-slider-slide"
                id="homepage-what-are-you-celeb-officeparty-slide"
              >
                <div className="homepage-what-are-you-celeb-slider-slide-title">
                  Office Party
                </div>
              </div>{" "}
            </a>

            <a
              href="/celebrations/Saree Function"
              className="homepage-what-are-you-celeb-slider-link"
            >
              <div
                className="homepage-what-are-you-celeb-slider-slide"
                id="homepage-what-are-you-celeb-wedding-slide"
              >
                <div className="homepage-what-are-you-celeb-slider-slide-title">
                  Saree Function
                </div>
              </div>
            </a>
          </Slider>
        </div>
      </div>
      {/* what are you celebrating section ends here */}

      {/* corporate decor section starts here */}
      <div id="homepage-corporate-decorations-section-wrap">
        <div id="homepage-corporate-decorations-main-headline">
          Corporate Festive Decors
        </div>
        <div id="homepage-corporate-decorations-sub-headline">
          Celebrate festivals with zinggalas decor
        </div>
        <div id="homepage-corporate-decorations-cards-main-wrap">
          <div className="homepage-corporate-decorations-single-card-wrap">
            <a href="/festivals/Navratri">
              <div className="homepage-corporate-decorations-single-card-img-wrap">
                <img
                  src="https://deowgxgt4vwfe.cloudfront.net/uploads/1634389415_original.jpg"
                  alt=""
                  className="homepage-corporate-decorations-single-card-img"
                />
              </div>

              <div className="homepage-corporate-decorations-single-card-title">
                Navratri
              </div>
              <div className="homepage-corporate-decorations-single-card-rating">
                <Stack spacing={1}>
                  <Rating name="read-only" value="5" readOnly size="small" />
                </Stack>
              </div>

              <div className="homepage-corporate-decorations-single-card-description">
                Like to do things differently? Host A Congrats Party with
                zinggalas
              </div>
            </a>
          </div>

          <div className="homepage-corporate-decorations-single-card-wrap">
            <a href="/festivals/Independance Day">
              <div className="homepage-corporate-decorations-single-card-img-wrap">
                <img
                  src="https://www.fnp.com/images/pr/x/v20190122222820/republic-day-decoration_1.jpg"
                  alt=""
                  className="homepage-corporate-decorations-single-card-img"
                />
              </div>

              <div className="homepage-corporate-decorations-single-card-title">
                Independance Day
              </div>
              <div className="homepage-corporate-decorations-single-card-rating">
                <Stack spacing={1}>
                  <Rating name="read-only" value="5" readOnly size="small" />
                </Stack>
              </div>

              <div className="homepage-corporate-decorations-single-card-description">
                Like to do things differently? Host A Congrats Party with
                zinggalas
              </div>
            </a>
          </div>

          <div className="homepage-corporate-decorations-single-card-wrap">
            <a href="/festivals/Janmashtami">
              <div className="homepage-corporate-decorations-single-card-img-wrap">
                <img
                  src="https://i.pinimg.com/originals/5e/16/af/5e16af559821852d24d0ebb80b00fdee.jpg"
                  alt=""
                  className="homepage-corporate-decorations-single-card-img"
                />
              </div>

              <div className="homepage-corporate-decorations-single-card-title">
                Janmashtami
              </div>
              <div className="homepage-corporate-decorations-single-card-rating">
                <Stack spacing={1}>
                  <Rating name="read-only" value="5" readOnly size="small" />
                </Stack>
              </div>

              <div className="homepage-corporate-decorations-single-card-description">
                Like to do things differently? Host A Congrats Party with
                zinggalas
              </div>
            </a>
          </div>

          <div className="homepage-corporate-decorations-single-card-wrap">
            <a href="/festivals/Republic Day">
              <div className="homepage-corporate-decorations-single-card-img-wrap">
                <img
                  src="https://www.fnp.com/images/pr/x/v20190122222820/republic-day-decoration_3.jpg"
                  alt=""
                  className="homepage-corporate-decorations-single-card-img"
                />
              </div>

              <div className="homepage-corporate-decorations-single-card-title">
                Republic Day
              </div>
              <div className="homepage-corporate-decorations-single-card-rating">
                <Stack spacing={1}>
                  <Rating name="read-only" value="5" readOnly size="small" />
                </Stack>
              </div>

              <div className="homepage-corporate-decorations-single-card-description">
                Like to do things differently? Host A Congrats Party with
                zinggalas
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* corporate decor section ends here */}

      {/* wedding anniversary section starts here */}
      <div id="homepage-wedding-anniversary-section-wrap">
        <div id="homepage-wedding-anniversary-main-headline">
          Wedding Anniversary
        </div>
        <div id="homepage-wedding-anniversary-sub-headline">
          Packages you’ll need to plan all your events
        </div>
        <div id="homepage-wedding-anniversary-packages-section-wrap">
          <div className="homepage-wedding-anniversary-single-package-card-wrap">
            <TiHeartFullOutline
              className="homepage-wedding-anniversary-single-package-card-wishlist-icon"
              onClick={(e) =>
                handleWishlist(
                  (productinfo = {
                    productName: "Silver Package",
                    description:
                      "Wedding anniversary silver package. zinggalas event planning redefined",
                    price: 2999,
                    image: "./Home-img/silver.jpeg",
                  }),
                  handleWishlistevent(e)
                )
              }
            />
            <div className="homepage-wedding-anniversary-single-package-card-image-wrap">
              <img
                src="./Home-img/silver.jpeg"
                alt=""
                className="homepage-wedding-anniversary-single-package-card-image"
              />
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-title-rating-wrap">
              <div className="homepage-wedding-anniversary-single-package-card-title">
                Silver Package
              </div>
              <div className="homepage-wedding-anniversary-single-package-card-rating">
                <Stack spacing={1}>
                  <Rating name="read-only" value="5" readOnly size="small" />
                </Stack>
              </div>
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-price">
              <span>₹</span>
              <span>2999</span>
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-description">
              Wedding anniversary silver package. zinggalas event planning
              redefined
            </div>
            <button
              className="homepage-wedding-anniversary-single-package-card-buy-now-button"
              onClick={() =>
                handleCart(
                  (productinfo = {
                    productName: "Silver Package",
                    description:
                      "Wedding anniversary silver package. zinggalas event planning redefined",
                    price: 2999,
                    image: "./Home-img/silver.jpeg",
                  })
                )
              }
            >
              Book now
            </button>
          </div>

          <div className="homepage-wedding-anniversary-single-package-card-wrap">
            <TiHeartFullOutline
              className="homepage-wedding-anniversary-single-package-card-wishlist-icon"
              onClick={(e) =>
                handleWishlist(
                  (productinfo = {
                    productName: "Gold Package",
                    description:
                      "Wedding anniversary gold package. zinggalas event planning redefined",
                    price: 5999,
                    image: "./Home-img/gold.jpg",
                  }),
                  handleWishlistevent(e)
                )
              }
            />
            <div className="homepage-wedding-anniversary-single-package-card-image-wrap">
              <img
                src="./Home-img/gold.jpg"
                alt=""
                className="homepage-wedding-anniversary-single-package-card-image"
              />
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-title-rating-wrap">
              <div className="homepage-wedding-anniversary-single-package-card-title">
                Gold Package
              </div>
              <div className="homepage-wedding-anniversary-single-package-card-rating">
                <Stack spacing={1}>
                  <Rating name="read-only" value="5" readOnly size="small" />
                </Stack>
              </div>
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-price">
              <span>₹</span>
              <span>5999</span>
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-description">
              Wedding anniversary gold package. zinggalas event planning
              redefined
            </div>
            <button
              className="homepage-wedding-anniversary-single-package-card-buy-now-button"
              onClick={() =>
                handleCart(
                  (productinfo = {
                    productName: "Gold Package",
                    description:
                      "Wedding anniversary gold package. zinggalas event planning redefined",
                    price: 5999,
                    image: "./Home-img/gold.jpg",
                  })
                )
              }
            >
              Book now
            </button>
          </div>

          <div className="homepage-wedding-anniversary-single-package-card-wrap">
            <TiHeartFullOutline
              className="homepage-wedding-anniversary-single-package-card-wishlist-icon"
              onClick={(e) =>
                handleWishlist(
                  (productinfo = {
                    productName: "Platinum Package",
                    description:
                      "Wedding anniversary platinum package. zinggalas event planning redefined",
                    price: 8499,
                    image: "./Home-img/platinum.jpg",
                  }),
                  handleWishlistevent(e)
                )
              }
            />
            <div className="homepage-wedding-anniversary-single-package-card-image-wrap">
              <img
                src="./Home-img/platinum.jpg"
                alt=""
                className="homepage-wedding-anniversary-single-package-card-image"
              />
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-title-rating-wrap">
              <div className="homepage-wedding-anniversary-single-package-card-title">
                Platinum Package
              </div>
              <div className="homepage-wedding-anniversary-single-package-card-rating">
                <Stack spacing={1}>
                  <Rating name="read-only" value="5" readOnly size="small" />
                </Stack>
              </div>
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-price">
              <span>₹</span>
              <span>8499</span>
            </div>
            <div className="homepage-wedding-anniversary-single-package-card-description">
              Wedding anniversary plat package. zinggalas event planning
              redefined
            </div>
            <button
              className="homepage-wedding-anniversary-single-package-card-buy-now-button"
              onClick={() =>
                handleCart(
                  (productinfo = {
                    productName: "Platinum Package",
                    description:
                      "Wedding anniversary platinum package. zinggalas event planning redefined",
                    price: 8499,
                    image: "./Home-img/platinum.jpg",
                  })
                )
              }
            >
              Book now
            </button>
          </div>
        </div>
      </div>
      {/* wedding anniversary section ends here */}

      {/* testimonial section starts here */}

      <div id="homepage-testimonial-section-slider-wrap">
        <Slider {...slider04_settings}>
          <div className="homepage-testimonial-section-slide-client-wrap">
            <div className="homepage-testimonial-section-slide-client-heading">
              Our happy clients
            </div>
            <div className="homepage-testimonial-section-slide-client-sub-heading">
              They are talking about Us{" "}
            </div>

            <div className="homepage-testimonial-section-slide-client-details-wrap">
              <div className="homepage-testimonial-section-slide-client-details">
                <div className="homepage-testimonial-section-slide-client-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
                <div className="homepage-testimonial-section-slide-client-title">
                  Dr. Tejasvi
                </div>
                <div className="homepage-testimonial-section-slide-client-description">
                  Had an amazing experience!! Celebrating my first wedding
                  anniversary with "zinggalas" is a beautiful experience
                  🔥🔥,thank you Vikram.
                </div>
              </div>

              {/* <div className="homepage-testimonial-section-slide-client-img-wrap">
                <img
                  src="./Home-img/home-testimonial-client.png"
                  alt=""
                  className="homepage-testimonial-section-slide-client-img"
                />
              </div> */}
            </div>
          </div>

          <div className="homepage-testimonial-section-slide-client-wrap">
            <div className="homepage-testimonial-section-slide-client-heading">
              Our happy clients
            </div>
            <div className="homepage-testimonial-section-slide-client-sub-heading">
              They are talking about Us{" "}
            </div>

            <div className="homepage-testimonial-section-slide-client-details-wrap">
              <div className="homepage-testimonial-section-slide-client-details">
                <div className="homepage-testimonial-section-slide-client-rating">
                  <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </Stack>
                </div>
                <div className="homepage-testimonial-section-slide-client-title">
                  Anthony Vipin Das
                </div>
                <div className="homepage-testimonial-section-slide-client-description">
                  This store truly lives up to its name with its stunning party
                  collection. Vikram is an event manager with decades of
                  experience and personally helps you create unique personalized
                  plans for your celebrations. A visit to THE PARTY STORE is
                  highly recommended and cheers to creating memories of a
                  lifetime for your loved ones! 🎉
                </div>
              </div>

              {/* <div className="homepage-testimonial-section-slide-client-img-wrap">
                <img
                  src="./Home-img/home-testimonial-client.png"
                  alt=""
                  className="homepage-testimonial-section-slide-client-img"
                />
              </div> */}
            </div>
          </div>
        </Slider>
      </div>

      {/* testimonial section ends here */}

      {/* celebration moments starts here */}

      <div id="homepage-celeb-moments-section-wrap">
        <div id="homepage-celeb-moments-section-heading">
          Our Celebration moments{" "}
        </div>
        <div id="homepage-celeb-moments-section-sub-heading">
          Take a look at !
        </div>

        <div id="homepage-celeb-moments-section-content-grid-wrap">
          <div id="homepage-celeb-moments-section-content-grid-01"></div>
          <div id="homepage-celeb-moments-section-content-grid-02"></div>
          <div id="homepage-celeb-moments-section-content-grid-03"></div>
          <div id="homepage-celeb-moments-section-content-grid-04"></div>
          <div id="homepage-celeb-moments-section-content-grid-05"></div>
          <div id="homepage-celeb-moments-section-content-grid-06"></div>
          <div id="homepage-celeb-moments-section-content-grid-07"></div>
        </div>
      </div>
      {/* celebration moments ends here */}
    </div>
  );
};
