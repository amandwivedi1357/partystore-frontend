import "./Login.css";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Redux/actions";
import { firebase } from "../firebase-config.js";

export const Login = ({ Loginpopupclose, handleRegister}) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [requestotp, setRequestotp] = useState(false);

  const dispatch = useDispatch();

  const { user, isError, isLoading } = useSelector((state) => ({
    user: state.user,
    isError: state.isError,
    isLoading: state.isLoading,
  }));

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };


  const userExistsCheck = () => {
    let userData = getAuth().currentUser;
    if (userData !== null) {
      if (userData.metadata.creationTime === userData.metadata.lastSignInTime) {
        handleRegister();
        console.log("user for the first time", userData);
      } else {
        dispatch(getUserData(phone));
        console.log("user already present", userData);
      }
    } else {
      console.log("please login in");
    }
  };

  const recaptchaConfig = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("recaptcha verified");
        },
        defaultCountry: "IN",
      },
      auth
    );
  };

  const onSignInSubmit = () => {
    recaptchaConfig();
    const phoneNumber = "+91" + phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setRequestotp(true);
        console.log("OTP has been sent");
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("OTP error");
      });
  };

  const onSubmitOTP = () => {
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        userExistsCheck();
        Loginpopupclose();
        console.log(JSON.stringify(user));
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert("user sign in error");
      });
  };

  return (
    <div id="login-popup-main-wrap">
      <div id="user-login-main-wrapper">
        <div id="user-login-column-one-wrap">
          <div id="user-login-column-one-headline">Log In</div>
          <div id="user-login-column-one-description">
            To Quickly Find Your Favourite Items Saved Addresses And Payments{" "}
          </div>
          <div id="user-login-column-one-image-wrap">
            <img src="/Auth-img/login.png" alt="" />
          </div>
        </div>
        {/* phone number input */}

        {requestotp === false && (
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

            <div id="user-login-column-two-new-user-redirect-wrap">
              <span>New To zinggalas ?</span>
              <span id="user-login-column-two-new-user-redirect-div">
                Create an account
              </span>
            </div>
          </div>
        )}

        {/* otp input */}

        {requestotp === true && (
          <div id="user-login-otp-column-wrap">
            <RxCross1
              id="user-login-popup-close-button"
              onClick={Loginpopupclose}
            />
            <div id="user-login-otp-column-enter-otp-title">
              Please enter the OTP sent on your phone
            </div>
            <div id="user-login-otp-column-enter-user-ph-wrap">
              {phone} <span>Change</span>
            </div>
            <input
              type="text"
              placeholder="Enter OTP"
              id="user-login-otp-column-two-input"
              name="OTP"
              onChange={handleOtpChange}
              value={otp}
            />
            <br />
            <button id="user-login-column-two-otp-button" onClick={onSubmitOTP}>
              Verify OTP
            </button>

            <div id="user-login-otp-column-two-resend-code-wrap">
              <span>Did'nt recieve code?</span>
              <span id="user-login-column-two-new-user-redirect-div">
                Resend Code
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
