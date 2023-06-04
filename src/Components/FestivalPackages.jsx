import "./CelebrationPackages.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { TiHeartFullOutline } from "react-icons/ti";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistData } from "../Redux/actions";

export const FestivalPackages = () => {
  let { category } = useParams();
  const [categorydata, setCategorydata] = useState([]);
  var productinfo = null;

  const { user, isError, isLoading } = useSelector((state) => ({
    user: state.user,
    isError: state.isError,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    axios(`https://angry-leather-jacket-wasp.cyclic.app/festival/${category}`)
      .then((res) => setCategorydata(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  const handleWishlist = (productinfo) => {
    if (user) {
      axios
        .post(
          `https://angry-leather-jacket-wasp.cyclic.app/wishlist/${user[0]._id}`,
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

  const handleWishlistevent = (e) => {
    e.target.style.color = "red";
  };

  return (
    <div id="celebration-packages-main-wrapper">
      <>
        {categorydata[0] && (
          <div id="celebration-packages-main-headline">
            All Packages <span>({categorydata[0].category})</span>
          </div>
        )}
      </>

      <div id="celebration-packages-section-wrap">
        {categorydata &&
          categorydata.map((product) => {
            return (
              <div className="celebration-single-package-card-wrap">
                <TiHeartFullOutline
                  id="celebration-single-package-card-wishlist-icon"
                  onClick={(e) =>
                    handleWishlist(
                      (productinfo = {
                        productName: product.package,
                        description: product.description,
                        price: product.price,
                        image: product.thumbnail,
                      }),
                      handleWishlistevent(e)
                    )
                  }
                />
                <div className="celebration-single-package-card-image-wrap">
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="celebration-single-package-card-image"
                  />
                </div>
                <div className="celebration-single-package-card-title-rating-wrap">
                  <div className="celebration-single-package-card-title">
                    {product.package}
                  </div>
                  <div className="celebration-single-package-card-rating">
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
                <div className="celebration-single-package-card-price">
                  <span>₹</span>
                  <span>{product.price}</span>
                </div>
                <div className="celebration-single-package-card-description">
                  {product.description}
                </div>
                <a href={`/festivals/${product.category}/${product._id}`}>
                  <button className="celebration-single-package-card-buy-now-button">
                    Book now
                  </button>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};
