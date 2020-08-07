import React from "react";
import "./Product.css";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import { useStatevalue } from "./StateProvider";
import { Link } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Product = ({ id, title, image, price, rating }) => {
  const [{ basket, user }, dispatch] = useStatevalue();
  const history = useHistory();

  const addToBasket = () => {
    //addding item to basket
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    } else {
      history.push("/login");
      console.log("login ..???");
    }
  };
  return (
    <div className="product">
      <p>{title}</p>
      <div className="product_info">
        <p className="prodct_prise">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarSharpIcon />
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
