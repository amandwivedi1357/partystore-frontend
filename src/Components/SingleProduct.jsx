import "./SingleProduct.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const SingleProduct=()=>{

   let { id } = useParams();
    const [productdata, setProductData] = useState();

    useEffect(() => {
      axios(`http://localhost:443/celebration/${id}`)
        .then((res) => setProductData(res.data))
        .catch((err) => console.log(err));
    },[id]);

    return (
      <>
        {productdata && (
          <div id="singleproduct-main-wrapper">
            <div id="singleproduct-image-content-wrap">
              <div id="singleproduct-image-content-image01-wrap">
                <img
                  src={productdata.images[0]}
                  alt=""
                  id="singleproduct-image-content-image01"
                />
              </div>

              <div id="singleproduct-image-content-image02-image03-wrap">
                <div id="singleproduct-image-content-image02-wrap">
                  <img
                    src={productdata.images[1]}
                    alt=""
                    id="singleproduct-image-content-image02"
                  />
                </div>

                <div id="singleproduct-image-content-image03-wrap">
                  <img
                    src={productdata.images[2]}
                    alt=""
                    id="singleproduct-image-content-image03"
                  />
                </div>
              </div>
            </div>

            <div id="singleproduct-product-details-wrap">
              <div id="singleproduct-product-details-product-title-wrap">
                <span>{productdata.category}</span>
                <span>-</span>
                <span>{productdata.package}</span>
              </div>
              <div id="singleproduct-product-details-product-description">
                {productdata.description}
              </div>

              <div id="singleproduct-product-details-rating">
                <Stack spacing={1}>
                  <Rating
                    name="read-only"
                    value={productdata.rating}
                    readOnly
                    size="small"
                  />
                </Stack>
              </div>

              <div id="singleproduct-product-details-price-and-rental-days-wrap">
                <div id="singleproduct-product-details-price-wrap">
                  <span>₹</span>
                  <span>{productdata.price}</span>
                </div>
                <div id="singleproduct-product-details-rental-days-wrap">
                  <div>
                    <img src="/SingleProduct-img/Clock.png" alt="" />
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

              <hr id="singleproduct-product-details-hr-divider" />
            </div>
          </div>
        )}
      </>
    );
}