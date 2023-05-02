import "./Birthdays.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Birthdays = () => {
  let { theme } = useParams();
  const [birthdaydata, setBirthdayData] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/birthday/${theme}`)
      .then((res) => setBirthdayData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="celebration-categories-main-wrapper">
      <div className="celebration-main-headline">
        {theme[0].toUpperCase() + theme.slice(1)} <span id="birthday-main-headline-themes-title">(Themes)</span>
      </div>

      <div className="celebration-categories-wrap">
        {birthdaydata &&
          birthdaydata.map((product) => {
            return (
              <a href={`/birthday/${theme}/${product.category}`}>
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
              </a>
            );
          })}
      </div>
    </div>
  );
};
