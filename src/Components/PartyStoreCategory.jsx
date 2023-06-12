import "./PartyStoreCategory.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PartyStoreCategory=()=>{

    let { category } = useParams();
    const [categorydata, setCategorydata] = useState([]);

   useEffect(() => {
  axios(`http://angry-leather-jacket-wasp.cyclic.app/products/${category}`)
    .then((res) => setCategorydata(res.data))
    .catch((err) => console.log(err));
}, [category]);

    return (
      <div id="partystore-product-category-main-wrapper">
        {categorydata[0] && (<div id="partystore-product-category-main-headline">
          The party store <span>({categorydata[0].category})</span>
        </div>)}

        <div id="partystore-product-category-products-wrap">
          {categorydata &&
          categorydata.map((product) => {
            return (
              <div className="partystore-product-category-single-product-card">
                <div className="partystore-product-category-single-product-image-wrap">
                  <img
                    src={product.image}
                    alt=""
                    className="partystore-product-category-single-product-image"
                  />
                </div>
                <div className="partystore-product-category-single-product-title-rating-wrap">
                  <div className="partystore-product-category-single-product-title">
                    {product.title}
                  </div>
                  <div className="partystore-product-category-single-product-rating">
                    <Stack spacing={1}>
                      <Rating
                        name="read-only"
                        value={product.rating}
                        readOnly
                        size="small"
                      />
                    </Stack>
                  </div>
                </div>

                <div className="partystore-product-category-single-product-price-wrap">
                  <span>MRP </span> <span>₹</span> <span>{product.price} / Packet</span>
                </div>

                <div className="partystore-product-category-single-product-button-wrap">
                  <button className="partystore-product-category-single-product-buy-now-button">
                    Buy Now
                  </button>
                  <button className="partystore-product-category-single-product-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            );})}
        </div>
      </div>
    );
}