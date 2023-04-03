import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { BirthdayDrop } from "./Dropdowns/BirthdayDrop";
import { CelebrationDrop } from "./Dropdowns/CelebrationDrop";
import { FestivalDrop } from "./Dropdowns/FestivalDrop";
import { useLocation } from "react-router-dom";
import { Login } from "./Login.jsx";
import { Cart } from "./Cart.jsx";
import { Register } from "./Register.jsx";
import { getAuth, signOut } from "firebase/auth";

export const Navbar = () => {
  //Autentication popup state handling

  const [loginToggle, setloginToggle] = useState(false);
  const [registerToggle, setregisterToggle] = useState(false);
  const [isLoggedin ,setisLoggedin] = useState(false);
  const [userRegister ,setUserRegister] = useState({});

useEffect(() => {
  const auth = getAuth();
  const user = auth.currentUser;
  user!==null ? setisLoggedin(true) : setisLoggedin(false);
}, [loginToggle]);

  const handleLoginPopup = () => {
    setregisterToggle(false);
    setloginToggle(true);
  };


  const handleLogout =()=>{
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setisLoggedin(false);
        // Sign-out successful. 
        console.log("user signout successful")
      })
      .catch((error) => {
        // An error happened
        console.log(error);
      });
  }

  const Loginpopupclose = () => {
    setloginToggle(false);
  };

  const handleRegister = () => {
    setloginToggle(false);
    setregisterToggle(true);
  };

  const registerpopupclose = () => {
    setregisterToggle(false);
  };

  //Cart popup state handling

  const [cartToggle, setcartToggle] = useState(false);

  const handleCartToggle = () => {
    setcartToggle(true);
  };
  const cartToggleClose = () => {
    setcartToggle(false);
  };

  //  Navigation dropdowns state and events handling

  const [birthdaytoggle, setbirthdaytoggle] = useState(false);

  const [celebrationtoggle, setcelebrationtoggle] = useState(false);

  const [festivaltoggle, setfestivaltoggle] = useState(false);

  const handleBirthdayMouseEnter = () => {
    setbirthdaytoggle(true);
  };

  const handleCelebrationMouseEnter = () => {
    setcelebrationtoggle(true);
  };

  const handleFestivalMouseEnter = () => {
    setfestivaltoggle(true);
  };

  const handleBirthdayMouseLeave = () => {
    setbirthdaytoggle(false);
  };

  const handleCelebrationMouseLeave = () => {
    setcelebrationtoggle(false);
  };

  const handleFestivalMouseLeave = () => {
    setfestivaltoggle(false);
  };

  const { pathname } = useLocation();
  if (pathname === "/checkout") return null;

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
            src="/Navbar-img/logo.png"
            alt="logo"
            id="navbar-second-section-logo"
          />
        </div>
        <div id="navbar-second-section-user-details-wrap">
          {/*<div id="navbar-second-section-user-logo-wrap">
            <img
              src="/Navbar-img/User.png"
              alt="user"
              id="navbar-second-section-user-logo"
            />
          </div> */}
          {isLoggedin === false && (
            <div id="navbar-user-login-button-wrap">
              <button onClick={handleLoginPopup}>Login</button>
            </div>
          )}

          {isLoggedin === true && (
            // <div id="navbar-second-section-user-avatar-wrap">
            //   <div>
            //     <img
            //       src="/Navbar-img/user.png"
            //       alt="user"
            //       id="navbar-second-section-user-logo"
            //     />
            //   </div>
            <div id="navbar-user-login-button-wrap">
              <button onClick={handleLogout}>Logout</button>
            </div>
            // </div>
          )}

          <div id="navbar-second-section-wishlist-logo-wrap">
            <img
              src="/Navbar-img/wishlist.png"
              alt="wishlist"
              id="navbar-second-section-wishlist-logo"
            />
          </div>
          <div
            id="navbar-second-section-cart-logo-wrap"
            onClick={handleCartToggle}
          >
            <img
              src="/Navbar-img/cart.png"
              alt="cart"
              id="navbar-second-section-cart-logo"
            />
          </div>
        </div>
      </div>
      <div id="navbar-products-packages-searchbar-wrap">
        <div id="navbar-products-packages-wrap">
          <div
            onMouseEnter={handleBirthdayMouseEnter}
            onMouseLeave={handleBirthdayMouseLeave}
          >
            <div className="navbar-products-packages-elements">Birthdays</div>
            {birthdaytoggle === true && <BirthdayDrop />}
          </div>

          <div
            onMouseEnter={handleCelebrationMouseEnter}
            onMouseLeave={handleCelebrationMouseLeave}
          >
            <div className="navbar-products-packages-elements">
              Celebrations
            </div>
            {celebrationtoggle === true && <CelebrationDrop />}
          </div>

          <div
            onMouseEnter={handleFestivalMouseEnter}
            onMouseLeave={handleFestivalMouseLeave}
          >
            <div className="navbar-products-packages-elements">Festivals</div>
            {festivaltoggle === true && <FestivalDrop />}
          </div>
          <div className="navbar-products-packages-elements">
            Your zinggalas
          </div>
          <div className="navbar-products-packages-elements">Accessories</div>
        </div>
        <div id="navbar-searchbar-wrap">
          <input type="search" placeholder="Search baloons,cakes,Themes etc." />
          <CiSearch id="navbar-searchbar-icon" />
        </div>
      </div>
      {loginToggle && (
        <Login
          Loginpopupclose={Loginpopupclose}
          handleRegister={handleRegister}
        />
      )}
      {cartToggle && <Cart cartToggleClose={cartToggleClose} />}
      {registerToggle && <Register registerpopupclose={registerpopupclose} />}
    </div>
  );
};
