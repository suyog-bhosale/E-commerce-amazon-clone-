import React from "react";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import "./checkOutProduct.css";
import { useStatevalue } from "./StateProvider";

/**
 * @author
 * @function CheckOutProduct
 **/

const CheckOutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStatevalue();

  const removeFromBAskrt = () => {
    dispatch({
      type: "REMOVE_FORM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkOutProduct">
      <img className="checkOutProduct_image" src={image} alt="" />
      <div className="checkOutProduct__info">
        <p className="checkOutProduct__title">{title}</p>
        <p className="CheckOutProdct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkOutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarSharpIcon />
            ))}
        </div>
        <button onClick={removeFromBAskrt}>Remove</button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
