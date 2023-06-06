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
    axios(
      `https://angry-leather-jacket-wasp.cyclic.app/birthday/${theme}`
    )
      .then((res) => setBirthdayData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="birthday-categories-main-wrapper">
      <div className="birthday-main-headline">
        {theme[0].toUpperCase() + theme.slice(1)} <span id="birthday-main-headline-themes-title">(Themes)</span>
      </div>

      <div className="birthday-categories-wrap">
        {birthdaydata &&
          birthdaydata.map((product) => {
            return (
              <a href={`/birthday/${theme}/${product.category}`}>
                <div
                  className="birthday-single-category-wrap"
                  key={product._id}
                >
                  <div className="birthday-single-category-img-wrap">
                    <img
                      src={product.image}
                      alt=""
                      className="birthday-single-category-img"
                    />
                  </div>

                  <div className="birthday-single-category-title">
                    {product.category}
                  </div>
                  <div className="birthday-single-category-rating">
                    <Stack spacing={1}>
                      <Rating
                        name="read-only"
                        value={product.rating}
                        readOnly
                        size="small"
                      />
                    </Stack>
                  </div>

                  <div className="birthday-single-category-description">
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
