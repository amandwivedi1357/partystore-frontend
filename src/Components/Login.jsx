import "./Login.css";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { firebase } from "../firebase-config.js";

export const Login = ({ Loginpopupclose, handleSignup }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handlePhoneChange=(e)=>{
     setPhone(e.target.value);
  }

const handleOtpChange = (e) => {
  setOtp(e.target.value);
};

const recaptchaConfig=()=>{

  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("recaptcha verified")
      },defaultCountry:"IN"
    },
    auth
  );
}

const onSignInSubmit=()=>{
  recaptchaConfig();
    const phoneNumber = "+91"+phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent")
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("OTP error")
      });
}

const onSubmitOTP=()=>{
  const code = otp;
  console.log(code)
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  alert("User signed in successfully");
  console.log(JSON.stringify(user))
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  alert("user sign in error")
});
}
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
          <div id="sign-in-button"></div>
          <input
            type="text" 
            placeholder="Enter Phone Number Or Email ID"
            id="user-login-column-two-input"
            name="phone number"
            onChange={handlePhoneChange}
            value={phone}
          />
          <br />
          <button
            id="user-login-column-two-otp-button"
            onClick={onSignInSubmit}
          >
            Request OTP
          </button>

          {/* otp input */}

          <input
            type="text"
            placeholder="Enter OTP"
            id="user-login-column-two-input"
            name="OTP"
            onChange={handleOtpChange}
            value={otp}
          />
          <br />
          <button id="user-login-column-two-otp-button" onClick={onSubmitOTP}>
            Verify OTP
          </button>

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
