import "./Celebrations.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";

export const Celebrations = () => {

   const [celebrationdata, setCelebrationData] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:1235/celebration")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCelebrationData(res);
      });
  }, []);


return (
  <div id="packages-celebration-main-wrapper">
    {celebrationdata && celebrationdata.map((section) => {
      return (
        <div className="celebration-package-section-wrap" key={section._id}>
          <div className="celebration-package-section-headline">
            {section.heading}
          </div>
          <div className="celebration-package-section-packages-wrap">
            {section.packages &&
              section.packages.map((product) => {
                return (
                  <div
                    className="celebration-package-section-silver-package-wrap"
                    key={product._id}
                  >
                    <div className="celebration-package-section-silver-package-img-wrap">
                      <img
                        src={product.image}
                        alt=""
                        className="celebration-package-section-silver-package-img"
                      />
                    </div>

                    <div className="celebration-package-section-title-rating-wrap">
                      <div className="celebration-package-section-silver-package-title">
                        {product.title}
                      </div>
                      <div className="celebration-package-section-silver-package-rating">
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

                    <div className="celebration-package-section-silver-package-price-wrap">
                      <div>₹</div>
                      <div>{product.price}</div>
                    </div>

                    <div className="celebration-package-section-silver-package-description">
                      {product.description}
                    </div>

                    <button className="celebration-package-section-silver-package-buy-button">
                      Book Now
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      );
    })}
  </div>
);

}