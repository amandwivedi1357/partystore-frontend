import "./Wishlist.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const Wishlist=()=>{
    return (
      <div id="wishlist-main-wrapper">
        <div>My Wishlist (4)</div>
        <div className="wishlist-products-section-wrap">
          <div className="wishlist-single-product-card-wrap">
            <div className="wishlist-single-product-card-image-wrap">
              <img
                src="./Home-img/home-slider02-prod03.jpeg"
                alt=""
                className="wishlist-single-product-card-image"
              />
            </div>
            <div className="wishlist-single-product-card-title-rating-wrap">
              <div className="wishlist-single-product-card-title">product</div>
              <div className="wishlist-single-product-card-rating">
                <Stack spacing={1}>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </Stack>
              </div>
            </div>
            <div className="wishlist-single-product-card-price">
              <span>₹</span>
              <span>price</span>
            </div>
            <div className="wishlist-single-product-card-description">
              description
            </div>
            <a href="">
              <button className="wishlist-single-product-card-cart-button">
                Add to cart
              </button>
            </a>
          </div>
        </div>
      </div>
    );
}