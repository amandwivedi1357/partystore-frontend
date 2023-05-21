import "./SingleProduct.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

export const FestivalSingleProduct = () => {
  let { category, id } = useParams();

  const [productdata, setProductData] = useState();

  const { user, isError, isLoading } = useSelector((state) => ({
    user: state.user,
    isError: state.isError,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    axios(
      `https://angry-leather-jacket-wasp.cyclic.app/festival/${category}/${id}`
    )
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }, [category, id]);

  const handleCart = () => {
    if (user) {
      axios
        .post(
          `https://angry-leather-jacket-wasp.cyclic.app/cart/${user[0]._id}`,
          {
            productName: productdata.category + "-" + productdata.package,
            description: productdata.description,
            price: productdata.price,
            image: productdata.images[0],
          }
        )
        .then((res) => console.log(res.data));
    } else {
      alert("please login to add to cart");
    }
  };
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
              <button
                id="singleproduct-product-details-cart-button"
                onClick={handleCart}
              >
                Add to cart
              </button>
              <button id="singleproduct-product-details-book-now-button">
                Book Now
              </button>
            </div>

            <hr id="singleproduct-product-details-hr-divider" />

            <div id="singleproduct-product-details-inclusions-exclusions-wrap">
              <div>
                {productdata.inclusions && (
                  <div id="singleproduct-product-details-inclusions-headline">
                    Inclusions
                  </div>
                )}
                {productdata.inclusions &&
                  productdata.inclusions.map((inclusions) => {
                    return (
                      <div className="singleproduct-product-details-inclusions-wrap">
                        <div>
                          <MdOutlineDone />
                        </div>
                        <div>{inclusions}</div>
                      </div>
                    );
                  })}
              </div>

              <div>
                {productdata.exclusions && (
                  <div id="singleproduct-product-details-exclusions-headline">
                    Exclusions
                  </div>
                )}
                {productdata.exclusions &&
                  productdata.exclusions.map((exclusions) => {
                    return (
                      <div className="singleproduct-product-details-exclusions-wrap">
                        <div>
                          <RxCross2 />
                        </div>
                        <div>{exclusions}</div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div id="singleproduct-product-details-ad-ons-main-wrap">
              <div id="singleproduct-product-details-ad-ons-headline">
                Package Add-ons
              </div>
              {productdata.ad_ons &&
                productdata.ad_ons.map((adons) => {
                  return (
                    <div className="singleproduct-product-details-ad-ons-content-wrap">
                      <div className="singleproduct-product-details-ad-ons-content-details-image-wrap">
                        <div className="singleproduct-product-details-ad-ons-content-details-wrap">
                          <div>{adons.title}</div>
                          <div>{adons.description}</div>
                          <div>
                            <Stack spacing={1}>
                              <Rating
                                name="read-only"
                                value={adons.rating}
                                readOnly
                                size="small"
                              />
                            </Stack>
                          </div>
                          <div className="singleproduct-product-details-ad-ons-content-details-price">
                            <span>₹</span>
                            <span>{adons.price}</span>
                            {adons.additional_info && (
                              <span>{adons.additional_info}</span>
                            )}
                          </div>
                        </div>

                        <div className="singleproduct-product-details-ad-ons-content-image-wrap">
                          <img
                            src="https://s3-alpha-sig.figma.com/img/e581/ea7e/125d02262170708fd8c7b8bbd64d113f?Expires=1680480000&Signature=NosH9-Ln8CVw9fLk4TMoFVZ6iipQZ-6hxeXXXC9jngQdbJFrJIcVeBArjpGWLiml9kqVs5dKCCmBDGqds9rZ~hMIGZ8kEsGi9jiakCgaJCBoer3kbtR2IdJxbUzOTOgztruZRgT-e6ah6LDjgw9Y~aC16eXuiLUr~Mqpik65ygrT77SWG99m9lG~sEdBJLh5crJrH6grYOOQU9Y91~Pmb8MQh1YNCXMF36ahLRL3xIG4aVX9OUhUWR-wWGIVuM80XvP83GTgzjbORTXthodFn7o4q9YhZiFJrzAUWKN3GJDmFrwD6l0bo0lPNuQ93yjNPpUnV~nyfP4QfdTnPGGTsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="singleproduct-product-details-ad-ons-content-buttons-wrap">
                        <button>+</button>
                        <button>0</button>
                        <button>-</button>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/*  */}
          </div>
        </div>
      )}
    </>
  );
};
