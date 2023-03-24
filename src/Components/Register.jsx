import "./Register.css";
import { RxCross1 } from "react-icons/rx";

export const Register = () => {
  return (
    <div id="user-register-main-wrapper">
      <div id="user-register-column-one-wrap">
        <div id="user-register-column-one-headline">Register</div>
        <div id="user-register-column-one-description">
          You are just one step away from amazing party decoration offers.
        </div>
        <div id="user-register-column-one-image-wrap">
          <img src="./Auth-img/login.png" alt="" />
        </div>
      </div>

      <div id="user-register-column-two-wrap">
        <RxCross1 id="user-register-popup-close-button" />
        <label htmlFor="first_name" id="user-register-column-two-name-label">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="user-register-column-two-input"
          name="first_name"
        />
        <label htmlFor="email_id" id="user-register-column-two-email-label">
          Email ID
        </label>
        <input
          type="text"
          placeholder="Enter Your Email ID"
          className="user-register-column-two-input"
          name="email_id"
        />
        <br />
        <button id="user-register-column-two-continue-button">Continue</button>
      </div>
    </div>
  );
};
