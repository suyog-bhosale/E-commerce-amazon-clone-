import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStatevalue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }, dispath] = useStatevalue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(basket);

  return (
    <div className="header">
      {/*  <h3>logo</h3>*/}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/* serch box  */}
      <div className="header_search">
        <input type="text" className="herader_searchiNPUT" />
        <SearchIcon className="header_seachIcon" />
      </div>
      {/*links */}
      <div className="Header__nav">
        {/*links  1*/}
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_oprtion1">hello {user?.email} </span>
            <span className="header_oprtion2">
              {user ? "sign Out" : "signIn"}
            </span>
          </div>
        </Link>

        {/*links  2*/}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_oprtion1">return </span>
            <span className="header_oprtion2">&order</span>
          </div>
        </Link>

        {/*links  2*/}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_oprtion1">your </span>
            <span className="header_oprtion2">prime</span>
          </div>
        </Link>

        {/*link 4 */}
        <Link to="/checkout" className="header_link">
          <div className="header_Bucket">
            <ShoppingBasketIcon />

            <span className=" header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
