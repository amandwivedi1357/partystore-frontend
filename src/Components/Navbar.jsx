import "./Navbar.css";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div id="navbar-main-wrapper">
      <div id="navbar-logo-wrap">
        <img src="./logo.jpeg" alt="" id="navbar-logo-image" />
      </div>
      <div className="navbar-elements">Themes</div>
      <div className="navbar-elements">Party Supplies</div>
      <div className="navbar-elements">Tableware</div>
      <div className="navbar-elements">Shop by Occasion</div>
      <div className="navbar-elements">Accessories</div>
      <div>
        <FiUser className="Navbar-elements-user-icons"/>
      </div>
      <div>
        <FiShoppingCart className="Navbar-elements-user-icons" />
      </div>
    </div>
  );
};
