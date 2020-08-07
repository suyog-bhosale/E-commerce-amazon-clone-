import React from "react";
import { useStatevalue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import SubTOtal from "./SubTOtal";
const Checkout = (props) => {
  const [{ basket }, dispatch] = useStatevalue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping Basket is empty</h2>
            <hr></hr>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">your Shopping basket</h2>
            <hr></hr>
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout_Right">
          <SubTOtal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
