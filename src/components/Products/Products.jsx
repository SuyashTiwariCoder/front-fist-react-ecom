import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

function Products() {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/api/products");
      setProduct(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getProducts(), []);

  return (
    <>
      {product.map(
        ({ _id, title, img, rating, price, discount, isbadge, badge }) => {
          return (
            <div class="product--card" key={_id}>
              {isbadge &&
                (function () {
                  if (badge === "New") {
                    return <div class="product--badge--blue">{badge}</div>;
                  } else if (badge === "Bestseller") {
                    return <div class="product--badge--yellow">{badge}</div>;
                  } else {
                    return <div class="product--badge--red">{badge}</div>;
                  }
                })()}
              <img src={img} alt="img" />
              <div class="product--rating">
                {[...Array(rating)].map(() => (
                  <AiFillStar size={13} />
                ))}
              </div>
              <div class="product--card--heading">{title}</div>
              <div class="product--card--price">
                <i class="fas fa-rupee-sign"></i>&nbsp;
                <span class="realPrice">{price} </span>
                <del>Rs.&nbsp;1000</del>
                <span class="red">&nbsp;&nbsp;({discount}% Off)</span>
              </div>
              <div class="product--card--buttons">
                <button class="addToCart">Add to cart</button>
                <button class="addToWishlist">
                  <BsHeart />
                </button>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}

export default Products;
