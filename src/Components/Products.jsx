import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Products=()=>{
    const [productsdata, setProductsData] = useState([]);

    useEffect(() => {
      axios(`https://angry-leather-jacket-wasp.cyclic.app/products`)
        .then((res) => setProductsData(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
      <div id="partystore-products-main-wrapper">
        <div id="partystore-products-main-headline">
          The Party Store <span>(All products)</span>
        </div>

        <div id="partystore-products-categories-wrap">
          {productsdata &&
            productsdata.map((product) => {
              return (
                <a href={`/products/${product.category}`}>
                  <div
                    className="partystore-products-single-category-wrap"
                    key={product._id}
                  >
                    <div className="partystore-products-single-category-img-wrap">
                      <img
                        src={product.image}
                        alt=""
                        className="partystore-products-single-category-img"
                      />
                    </div>

                    <div className="partystore-products-single-category-title">
                      {product.category}
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    );
}