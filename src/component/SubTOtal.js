import React from "react";
import { useStatevalue } from "./StateProvider";
import "./subTOtal.css";

import { getbasketTotal } from "./reduer";
/**
 * @author
 * @function SubTOtal
 **/

const SubTOtal = (props) => {
  const [{ basket }, dispatch] = useStatevalue();

  return (
    <div className="subtotal">
      <p>
        SubTOtal({basket.length} item):<strong>{getbasketTotal(basket)}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This order conatins gift
      </small>

      <button>Proceed to checkout</button>
    </div>
  );
};

export default SubTOtal;
