import "./CelebrationPackages.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CelebrationPackages = () => {

   let { category } = useParams();
   const [categorydata, setCategorydata] = useState([]);

   useEffect(() => {
     axios(`http://localhost:5000/celebration/${category}`)
       .then((res) => setCategorydata(res.data))
       .catch((err) => console.log(err));
   }, [category]);


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
                <a href={`/celebrations/${product.category}/${product._id}`}>
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
