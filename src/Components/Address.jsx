import "./Address.css";
import { RxCross1 } from "react-icons/rx";

export const Address = ({ addressclosetoggle }) => {
  return (
    <div id="checkout-page-address-popup-main-wrap">
      <div id="checkout-page-address-popup-header-wrap">
        <RxCross1 onClick={addressclosetoggle} />
        <span>New Address</span>
      </div>

      <div id="checkout-page-address-popup-address-content-wrap">
        <div id="checkout-page-address-popup-address-headline">Address</div>
        <div id="checkout-page-address-popup-address-input-wrap">
          <input type="number" placeholder="Pin code" />
          <input type="text" placeholder="House / Flat / Office No." />
          <textarea
            type="text"
            placeholder="Road Name / Area / Colony / "
          ></textarea>
        </div>
      </div>

      <div id="checkout-page-address-popup-contact-content-wrap">
        <div id="checkout-page-address-popup-contact-headline">Contact</div>
        <div id="checkout-page-address-popup-contact-description">
          Information provided here will be used to contact you for delivery
          update
        </div>
        <div id="checkout-page-address-popup-contact-input-wrap">
          <input type="number" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email id { Optional }" />
        </div>
      </div>

      <hr id="checkout-page-address-popup-divider" />

      <button id="checkout-page-address-popup-button-wrap">
        Ship to this address
      </button>
    </div>
  );
};