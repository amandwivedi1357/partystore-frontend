import "./Checkout.css";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { HiCurrencyRupee } from "react-icons/hi";
import { useState } from "react";
import { Address } from "./Address.jsx";

export const Checkout = () => {
const [addresstoggle,setAddresstoggle]=useState(false);

const openAddressPopup= () => {
  setAddresstoggle(true);
};

const closeAddressPopup=()=>{
  setAddresstoggle(false);
}

  return (
    <div id="checkout-page-main-wrapper">
      <div id="checkout-main-header-wrap">
        <div id="checkout-header-logo-wrap">
          <img src="./Navbar-img/logo.png" alt="" />
        </div>
        <div id="checkout-header-stepper-wrap">
          <div id="checkout-header-stepper-cart-wrap">
            <img src="./Checkout-img/cart.png" alt="" />
            <div>Cart</div>
          </div>

          <div className="checkout-header-stepper-divider"></div>

          <div id="checkout-header-stepper-address-wrap">
            <img src="./Checkout-img/address.png" alt="" />
            <div>Address</div>
          </div>

          <div className="checkout-header-stepper-divider"></div>

          <div id="checkout-header-stepper-payment-wrap">
            <img src="./Checkout-img/payment.png" alt="" />
            <div>Payment</div>
          </div>
        </div>
      </div>

      {addresstoggle === true && (
        <div id="checkout-address-popup-component">
          <Address addressclosetoggle={closeAddressPopup} />
        </div>
      )}

      <div id="checkout-page-main-content-wrap">
        <div id="checkout-page-user-address-main-wrap">
          <div id="checkout-page-user-address-headline">Choose Address</div>
          <div id="checkout-page-user-address-sub-headline">
            Detailed address will help our delivery partner reach your doorstep
            quickly
          </div>
          <div
            id="checkout-page-user-add-new-address-wrap"
            onClick={openAddressPopup}
          >
            <span>
              <MdOutlineAddLocationAlt />
            </span>
            <span>Add New Address</span>
          </div>
        </div>

        <div id="checkout-page-user-cart-main-wrap">
          <div id="checkout-page-user-cart-main-imag-wrap">
            <img src="./Checkout-img/checkout-cart.png" alt="" />
          </div>
          <div>
            <div id="checkout-page-user-cart-details-wrap">
              <FaShoppingCart />
              <div>Cart</div>
              <div>10 Items</div>
              <FiChevronDown />
            </div>
            <div id="checkout-page-user-cart-content-wrap">
              <div className="checkout-page-user-cart-content-single-product-wrap">
                <div className="checkout-page-user-cart-content-single-product-image-title-description-wrap">
                  <div className="checkout-page-user-cart-content-single-product-image-wrap">
                    <img src="./Home-img/home-slider02-prod05.jpeg" alt="" />
                  </div>
                  <div className="checkout-page-user-cart-content-single-product-title-desc-wrap">
                    <div>Red Normal Balloons </div>
                    <div>Party Store</div>
                  </div>
                </div>
                <hr className="checkout-page-user-cart-content-single-product-hr" />

                <div className="checkout-page-user-cart-content-single-product-quantity-price-wrap">
                  <div className="checkout-page-user-cart-content-single-product-quantity-wrap">
                    <span>Quantity : </span>
                    <span>40</span>
                  </div>

                  <div className="checkout-page-user-cart-content-single-product-price-wrap">
                    <span>₹</span>
                    <span>4999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="checkout-page-products-final-price-details-wrap">
            <HiCurrencyRupee />
            <div>Price Details</div>
            <div>
              <span>₹</span> 4999
            </div>
            <FiChevronDown />
          </div>

          <div id="checkout-page-user-cart-flyer-wrap">
            <img src="./Checkout-img/secure-pay.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
