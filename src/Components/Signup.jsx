import "./Signup.css";
import { RxCross1 } from "react-icons/rx";

export const Signup = ({ signpopupclose, handleLogin, handleRegister }) => {
  return (
    <div id="signup-popup-main-wrap">
      <div id="user-signup-main-wrapper">
        <div id="user-signup-column-one-wrap">
          <div id="user-signup-column-one-headline">Sign Up</div>
          <div id="user-signup-column-one-description">
            Looks like you are new here. Sign Up with your mobile number.
          </div>
          <div id="user-signup-column-one-image-wrap">
            <img src="./Auth-img/login.png" alt="" />
          </div>
        </div>

        <div id="user-signup-column-two-wrap">
          <RxCross1
            id="user-signup-popup-close-button"
            onClick={signpopupclose}
          />
          <input
            type="number"
            placeholder="Enter Phone Number"
            id="user-signup-column-two-input"
          />
          <br />
          <button
            id="user-signup-column-two-continue-button"
            onClick={handleRegister}
          >
            Continue
          </button>
          <div id="user-signup-column-two-log-in-redirect-wrap">
            <span>Existing user?</span>
            <span
              id="user-signup-column-two-log-in-redirect-div"
              onClick={handleLogin}
            >
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
