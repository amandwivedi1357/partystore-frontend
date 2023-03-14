import "./SingleProduct.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const SingleProduct=()=>{
    return (
      <div id="singleproduct-main-wrapper">
        <div id="singleproduct-image-content-wrap">
          <div id="singleproduct-image-content-image01-wrap">
            <img
              src="./Home-img/home-slider02-prod03.jpeg"
              alt=""
              id="singleproduct-image-content-image01"
            />
          </div>

          <div id="singleproduct-image-content-image02-image03-wrap">
            <div id="singleproduct-image-content-image02-wrap">
              <img
                src="./Home-img/home-slider02-prod03.jpeg"
                alt=""
                id="singleproduct-image-content-image02"
              />
            </div>

            <div id="singleproduct-image-content-image03-wrap">
              <img
                src="./Home-img/home-slider02-prod03.jpeg"
                alt=""
                id="singleproduct-image-content-image03"
              />
            </div>
          </div>
        </div>

        <div id="singleproduct-product-details-wrap">
          <div id="singleproduct-product-details-product-title-wrap">
            <span>Baby Arrival Celebration</span>
            <span>-</span>
            <span>Silver Package</span>
          </div>
          <div id="singleproduct-product-details-product-description">
            Baby Arrival celebration at your doorstep
          </div>

          <div id="singleproduct-product-details-rating">
            <Stack spacing={1}>
              <Rating name="read-only" value={5} readOnly size="small" />
            </Stack>
          </div>

          <div id="singleproduct-product-details-price-and-rental-days-wrap">
            <div id="singleproduct-product-details-price-wrap">
              <span>₹</span>
              <span>2999</span>
            </div>
            <div id="singleproduct-product-details-rental-days-wrap">
              <div>
                <img src="./SingleProduct-img/Clock.png" alt="" />
              </div>
              <div>1( Days to Rent )</div>
            </div>
          </div>
          <div id="singleproduct-product-details-buttons-wrap">
            <button id="singleproduct-product-details-cart-button">
              Add to cart
            </button>
            <button id="singleproduct-product-details-book-now-button">
              Book Now
            </button>
          </div>

          <hr id="singleproduct-product-details-hr-divider"/>
        </div>
      </div>
    );
}