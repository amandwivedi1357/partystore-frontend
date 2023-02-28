import "./Navbar.css";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
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
          <div>Themes</div>
          <div>Party supplies</div>
          <div>Table wear</div>
          <div>Shop by occasion</div>
          <div>Accessories</div>
        </div>
        <div id="navbar-searchbar-wrap">
          <input type="search" placeholder="Search baloons,cakes,Themes etc."/>
          <CiSearch id="navbar-searchbar-icon"/>
        </div>
      </div>
    </div>
  );
};
