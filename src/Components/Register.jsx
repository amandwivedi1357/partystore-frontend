import "./Register.css";
import { RxCross1 } from "react-icons/rx";
import { useState ,useEffect } from "react";
import axios from "axios";
import {
  getAuth
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Redux/actions";

export const Register = ({registerpopupclose,handleRegister}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone , setPhone] =useState(null);

      const dispatch = useDispatch();

 const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

 const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }; 


  const handlePhoneNumber= () =>{
     let user_details = getAuth().currentUser;
     setPhone(user_details.phoneNumber);
  }

useEffect(() => {
  handlePhoneNumber()
  },[]);

  const handleUserData=()=>{
    axios
      .post("https://angry-leather-jacket-wasp.cyclic.app/auth", {
        username: username,
        email: email,
        phone: phone,
      })
      .then(() => dispatch(getUserData(phone)))
      .then(registerpopupclose());
  }

  return (
    <div id="register-popup-main-wrap">
      <div id="user-register-main-wrapper">
        <div id="user-register-column-one-wrap">
          <div id="user-register-column-one-headline">Register</div>
          <div id="user-register-column-one-description">
            You are just one step away from amazing party decoration offers.
          </div>
          <div id="user-register-column-one-image-wrap">
            <img src="/Auth-img/login.png" alt="" />
          </div>
        </div>

        <div id="user-register-column-two-wrap">
          <RxCross1
            id="user-register-popup-close-button"
            onClick={registerpopupclose}
          />
          <label htmlFor="first_name" id="user-register-column-two-name-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="user-register-column-two-input"
            name="first_name"
            onChange={handleNameChange}
            value={username}
          />
          <label htmlFor="email_id" id="user-register-column-two-email-label">
            Email ID
          </label>
          <input
            type="text"
            placeholder="Enter Your Email ID"
            className="user-register-column-two-input"
            name="email_id"
            onChange={handleEmailChange}
            value={email}
          />
          <br />
          <button id="user-register-column-two-continue-button" onClick={handleUserData}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
