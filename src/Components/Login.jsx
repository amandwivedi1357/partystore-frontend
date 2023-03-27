import "./Login.css";
import { RxCross1 } from "react-icons/rx";

export const Login = ({ Loginpopupclose, handleSignup }) => {
  return (
    <div id="login-popup-main-wrap">
      <div id="user-login-main-wrapper">
        <div id="user-login-column-one-wrap">
          <div id="user-login-column-one-headline">Log In</div>
          <div id="user-login-column-one-description">
            To Quickly Find Your Favourite Items Saved Addresses And Payments{" "}
          </div>
          <div id="user-login-column-one-image-wrap">
            <img src="./Auth-img/login.png" alt="" />
          </div>
        </div>

        <div id="user-login-column-two-wrap">
          <RxCross1
            id="user-login-popup-close-button"
            onClick={Loginpopupclose}
          />
          <input
            type="text"
            placeholder="Enter Phone Number Or Email ID"
            id="user-login-column-two-input"
          />
          <br />
          <button id="user-login-column-two-otp-button">Request OTP</button>
          <div id="user-login-column-two-new-user-redirect-wrap">
            <span>New To zinggalas ?</span>
            <span
              id="user-login-column-two-new-user-redirect-div"
              onClick={handleSignup}
            >
              Create an account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};