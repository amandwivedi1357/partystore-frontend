import "./Cart.css"
import { BiArrowBack } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/actions";
import { useEffect } from "react";

export const Cart = ({ cartToggleClose }) => {

  const { user,cart, isError, isLoading } = useSelector((state) => ({
    user:state.user,
    cart: state.cart,
    isError: state.isError,
    isLoading: state.isLoading,
  }));
 
  const dispatch = useDispatch();
    
 
 useEffect(() => {
     if(user!=null){dispatch(getCartData(user[0]._id))}
 },[] )
 
  return (
    <>
      {user!=null && (
        <div id="cart-popup-main-wrapper">
          <div id="cart-popup-header-wrap">
            <BiArrowBack onClick={cartToggleClose} />
            <div>Cart</div>
            {cart!==null && cart.cartItems &&<div>{cart.cartItems.length}</div>}
            <div>View Wishlist</div>
          </div>
          <div id="cart-products-main-wrapper">
            {cart!=null && cart.cartItems &&
              cart.cartItems.map((product) => {
                return (
                  <div className="cart-product-wrap">
                    <div className="cart-product-image-title-description-wrap">
                      <div className="cart-product-image-wrap">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="cart-product-title-description-wrap">
                        <div className="cart-product-title">
                          {product.productName}
                        </div>
                        <div className="cart-product-description">
                          {product.description}
                        </div>
                      </div>

                      <div className="cart-product-delete-icon">
                        <RiDeleteBin6Line />
                      </div>
                    </div>
                    <hr className="cart-product-divider" />

                    <div className="cart-product-quantity-price-wrap">
                      <div className="cart-product-quantity-buttons-wrap">
                        <button>+</button>
                        <div>0</div>
                        <button>-</button>
                      </div>
                      <div className="cart-product-price-wrap">
                        <span>₹</span>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="cart-total-pay-wrap">
            <div>Price Details</div>
            <div className="cart-total-pay-wrap-products-quantity-price-wrap">
             {cart!=null && cart.cartItems && <div>Cart (MRP {cart.cartItems.length} items)</div>}
              <div>
                <span>₹</span>2999
              </div>
            </div>
            <div className="cart-total-pay-wrap-products-final-price">
              <div>You Pay</div>
              <div>
                <span>₹</span>4999
              </div>
            </div>
          </div>
          <div className="cart-grand-total-proceed-button-wrap">
            <div className="cart-grand-total-wrap">
              <div className="cart-grand-total-content">
                <span>₹</span>4999
              </div>
              <div className="cart-grand-total-content-title">Grand Total</div>
            </div>
            <a href="/checkout" id="checkout-proceed-button-a-tag">
              <div className="cart-proceed-button-wrap">
                <span>Proceed</span>
                <span className="cart-proceed-button-arrow-icon">
                  <BsArrowRight />
                </span>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};