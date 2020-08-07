import React, { useState } from "react";
import { db, auth } from "./firebase";
import { Link } from "@material-ui/core";
import "./Login.css";
import { useHistory } from "react-router-dom";

/**
 * @author
 * @function Login
 **/

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignInHandler = (e) => {
    e.preventDefault();

    //loin logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //  redirect into home page
      })
      .catch((e) => alert(e.message));
  };

  const registerUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/"); //redirect
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="Login">
      <Link to="/">
        <img
          className="Login_logo"
          src="https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/04/amazon-biobased.jpg?fit=625%2C352&ssl=1"
          alt="logon-logo"
        />
      </Link>
      <div className="Login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={onSignInHandler}
            className="login_button"
          >
            Sign In
          </button>
          <p>
            Publish your passions your way. Whether you'd like to share your
            knowledge, experiences or the latest news, create a unique and
            beautiful blog for free
          </p>
          <button onClick={registerUser} className="login_create">
            Create your account
          </button>
          <small>you can directly creat account by filling above feild</small>
        </form>
      </div>
    </div>
  );
};

export default Login;
