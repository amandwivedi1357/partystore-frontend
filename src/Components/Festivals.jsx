import "./Festivals.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export const Festivals = () => {
  const [festivaldata, setFestivalData] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/festival`)
      .then((res) => setFestivalData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="festival-categories-main-wrapper">
      <div className="festival-main-headline">All Festivals</div>

      <div className="festival-categories-wrap">
        {festivaldata &&
          festivaldata.map((product) => {
            return (
              <a href={`/festivals/${product.category}`}>
                <div
                  className="festival-single-category-wrap"
                  key={product._id}
                >
                  <div className="festival-single-category-img-wrap">
                    <img
                      src={product.image}
                      alt=""
                      className="festival-single-category-img"
                    />
                  </div>

                  <div className="festival-single-category-title">
                    {product.category}
                  </div>
                  <div className="festival-single-category-rating">
                    <Stack spacing={1}>
                      <Rating
                        name="read-only"
                        value={product.rating}
                        readOnly
                        size="small"
                      />
                    </Stack>
                  </div>

                  <div className="festival-single-category-description">
                    {product.description}
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};
