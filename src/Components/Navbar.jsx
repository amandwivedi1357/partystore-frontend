import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { BirthdayDrop } from "./Dropdowns/BirthdayDrop";
import { CelebrationDrop } from "./Dropdowns/CelebrationDrop";
import { FestivalDrop } from "./Dropdowns/FestivalDrop";


export const Navbar = () => {
  
  const [birthdaytoggle, setbirthdaytoggle] = useState(false);
  const [birthdaycount, setbirthdayCount] = useState(1);

  const [celebrationtoggle, setcelebrationtoggle] = useState(false);
  const [celebrationcount, setcelebrationCount] = useState(1);

  const [festivaltoggle, setfestivaltoggle] = useState(false);
  const [festivalcount, setfestivalCount] = useState(1);


  const handlebirthdayClick = () => {
    setbirthdayCount(birthdaycount + 1);
    if (birthdaycount % 2 == 1) {
      setbirthdaytoggle(true);
      setcelebrationtoggle(false);
      setfestivaltoggle(false);
    } else {
      setbirthdaytoggle(false);
    }
  };

  const handlecelebrationClick = () => {
    setcelebrationCount(celebrationcount + 1);
    if (celebrationcount % 2 == 1) {
      setcelebrationtoggle(true);
      setbirthdaytoggle(false);
      setfestivaltoggle(false);
    } else {
      setcelebrationtoggle(false);
    }
  };

   const handlefestivalClick = () => {
     setfestivalCount(festivalcount + 1);
     if (festivalcount % 2 == 1) {
       setfestivaltoggle(true);
       setbirthdaytoggle(false);
       setcelebrationtoggle(false);
     } else {
       setfestivaltoggle(false);
     }
   };

  return (
    <div id="navbar-main-wrapper">
      <div id="navbar-top-color-block"></div>
      <div id="navbar-second-section-main-wrap">
        <div id="navbar-second-section-contact-faq-blog-wrap">
          <div>Contact Us</div>
          <div>Blog</div>
          <div>FAQ’s</div>
        </div>
        <div id="navbar-second-section-logo-wrap">
          <img
            src="./Navbar-img/logo.png"
            alt="logo"
            id="navbar-second-section-logo"
          />
        </div>
        <div id="navbar-second-section-user-details-wrap">
          <div id="navbar-second-section-user-logo-wrap">
            <img
              src="./Navbar-img/User.png"
              alt="user"
              id="navbar-second-section-user-logo"
            />
          </div>
          <div id="navbar-second-section-wishlist-logo-wrap">
            <img
              src="./Navbar-img/wishlist.png"
              alt="wishlist"
              id="navbar-second-section-wishlist-logo"
            />
          </div>
          <div id="navbar-second-section-cart-logo-wrap">
            <img
              src="./Navbar-img/cart.png"
              alt="cart"
              id="navbar-second-section-cart-logo"
            />
          </div>
        </div>
      </div>
      <div id="navbar-products-packages-searchbar-wrap">
        <div id="navbar-products-packages-wrap">
          <div onMouseOver={handlebirthdayClick}>Birthdays</div>
          <div onMouseOver={handlecelebrationClick}>Celebrations</div>
          <div onMouseOver={handlefestivalClick}>Festivals</div>
          <div>Your zinggalas</div>
          <div>Accessories</div>
        </div>
        <div id="navbar-searchbar-wrap">
          <input type="search" placeholder="Search baloons,cakes,Themes etc." />
          <CiSearch id="navbar-searchbar-icon" />
        </div>
      </div>
      {birthdaytoggle === true && <BirthdayDrop />}
      {celebrationtoggle === true && <CelebrationDrop />}
      {festivaltoggle === true && <FestivalDrop />}
    </div>
  );
};
