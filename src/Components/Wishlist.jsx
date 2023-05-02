import "./Wishlist.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistData } from "../Redux/actions";
import { useEffect } from "react";
import axios from "axios"

export const Wishlist=()=>{

   const { user, wishlist, isError, isLoading } = useSelector((state) => ({
     user: state.user,
     wishlist: state.wishlist,
     isError: state.isError,
     isLoading: state.isLoading,
   }));

    var productinfo = null;

   const dispatch = useDispatch();

   useEffect(() => {
     if (user != null) {
       dispatch(getWishlistData(user[0]._id));
     }
   },[]);

   
const handleCart = (productinfo) => {
  if (user) {
    axios
      .post(
        `https://angry-leather-jacket-wasp.cyclic.app/cart/${user[0]._id}`,
        {
          productName: productinfo.productName,
          description: productinfo.description,
          price: productinfo.price,
          image: productinfo.image,
        }
      )
      .then((res) => console.log(res.data));
  }
};

    return (
      <>
      {user!=null && (
      <div id="wishlist-main-wrapper">
        {wishlist!=null &&<div>My Wishlist ({wishlist.wishlist.length})</div>}
        <div className="wishlist-products-section-wrap">
         {wishlist!=null &&
              wishlist.wishlist.map((product) => {
                return (
                  <div className="wishlist-single-product-card-wrap">
                    <div className="wishlist-single-product-card-image-wrap">
                      <img
                        src={product.image}
                        alt=""
                        className="wishlist-single-product-card-image"
                      />
                    </div>
                    <div className="wishlist-single-product-card-title-rating-wrap">
                      <div className="wishlist-single-product-card-title">
                        {product.productName}
                      </div>
                      <div className="wishlist-single-product-card-rating">
                        <Stack spacing={1}>
                          <Rating
                            name="read-only"
                            value={5}
                            readOnly
                            size="small"
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="wishlist-single-product-card-price">
                      <span>₹</span>
                      <span>{product.price}</span>
                    </div>
                    <div className="wishlist-single-product-card-description">
                      {product.description}
                    </div>
                      <button
                        className="wishlist-single-product-card-cart-button"
                        onClick={() =>
                          handleCart(
                            productinfo = {
                              productName: product.productName,
                              description: product.description,
                              price: product.price,
                              image: product.image,
                            })
                        }
                      >
                        Add to cart
                      </button>
                  </div>
                );})}
        </div>
      </div>
      )}</>
    );
}