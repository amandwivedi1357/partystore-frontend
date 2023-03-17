import "./Celebrations.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export const Celebrations = () => {
  const [celebrationdata, setCelebrationData] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/celebration")
      .then((res) => setCelebrationData(res.data))
      .catch((err) => console.log(err));
      
  }, []);

  return (
    <div id="packages-celebration-main-wrapper">
        <div className="celebration-main-headline">
             All Celebrations
        </div>

        <div className="celebration-categories-wrap">
          {celebrationdata &&
            celebrationdata.map((product) => {
              return (
                <div
                  className="celebration-single-category-wrap"
                  key={product._id}
                >
                  <div className="celebration-single-category-img-wrap">
                    <img
                      src={product.image}
                      alt=""
                      className="celebration-single-category-img"
                    />
                  </div>

                  <div className="celebration-single-category-title">
                    {product.category}
                  </div>
                  <div className="celebration-single-category-rating">
                    <Stack spacing={1}>
                      <Rating
                        name="read-only"
                        value={product.rating}
                        readOnly
                        size="small"
                      />
                    </Stack>
                  </div>

                  <div className="celebration-single-category-description">
                    {product.description}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
  );
};
