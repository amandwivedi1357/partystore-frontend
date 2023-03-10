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
    <div className="celebration-package-section-wrap">
      <div className="celebration-package-section-headline">Baby Arrival</div>
      <div className="celebration-package-section-packages-wrap">
        {celebrationdata.map((e) => {
          return (
            <div
              className="celebration-package-section-silver-package-wrap"
              key={e._id}
            >
              <div className="celebration-package-section-silver-package-img-wrap">
                <img
                  src={e.image}
                  alt=""
                  className="celebration-package-section-silver-package-img"
                />
              </div>

              <div className="celebration-package-section-title-rating-wrap">
                <div className="celebration-package-section-silver-package-title">
                  {e.title}
                </div>
                <div className="celebration-package-section-silver-package-rating">
                  <Stack spacing={1}>
                    <Rating
                      name="read-only"
                      value={e.rating}
                      readOnly
                      size="small"
                    />
                  </Stack>
                </div>
              </div>

              <div className="celebration-package-section-silver-package-price-wrap">
                <div>₹</div>
                <div>{e.price}</div>
              </div>

              <div className="celebration-package-section-silver-package-description">
                {e.description}
              </div>

              <button className="celebration-package-section-silver-package-buy-button">
                Book Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

}