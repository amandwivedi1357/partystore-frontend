import "./Cart.css"
import { BiArrowBack } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";

export const Cart = ({ cartToggleClose }) => {

  const { user, isError, isLoading } = useSelector((state) => ({
    user: state.user,
    isError: state.isError,
    isLoading: state.isLoading,
  }));


  return (
    <div id="cart-popup-main-wrapper">
      <div id="cart-popup-header-wrap">
        <BiArrowBack onClick={cartToggleClose} />
        <div>Cart</div>
        {user && (<div>{user[0].cartItems.length}</div>)}
        <div>View Wishlist</div>
      </div>

      <div className="cart-product-wrap">
        <div className="cart-product-image-title-description-wrap">
          <div className="cart-product-image-wrap">
            <img
              src="https://s3-alpha-sig.figma.com/img/a06d/56c5/a37281997402eacd22a7278ad29d7a26?Expires=1680480000&Signature=FpIzDk6Ku3RYo7f7I6lNFAsom6Hur6eopy~A~PfCY6bXQPmm7s2Gh-Oip7Z-d3i8bhDSCKvJLDfsmeOCbTvNkMPk8udFvoxKqDD~lf139hsC3VWdjVeGj1OoL-U5th23GV2i3Sd4zZGmWuODSlublPh~B2z1SiT~4w-ipj8wod986EAYj19~t2wvXF5TsrL2FG4ygqIhbS88jVfixzg8ptNVV9gwqqfaF0FH12U3TD30qpjwGKz2DgbtzQQzcIWVUX9X-pV~9wDW6z6SDoYaSDhLlNBZ2V37SqkcJ5ALsT9AqEUDfbHbd~M1fkbAkEZU7tCMQ5Pacq0P50pys65rKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <div className="cart-product-title-description-wrap">
            <div className="cart-product-title">Balloons - Normal Balloons</div>
            <div className="cart-product-description">Party Store</div>
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
            <span>2999</span>
          </div>
        </div>
      </div>

      <div className="cart-total-pay-wrap">
        <div>Price Details</div>
        <div className="cart-total-pay-wrap-products-quantity-price-wrap">
          <div>Cart (MRP 3 items)</div>
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
  );
};