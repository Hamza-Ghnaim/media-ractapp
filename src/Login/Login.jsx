import React, {useContext} from "react";
import Context from "../ContextFolder/Context";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const {setUserInfo} = useContext(Context)
  const loginHandler = async (event) => {
    try {
      event.preventDefault();
      const userEmail = document.getElementById("email").value;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const user =  (await response.json()).find((item) => item.email.toLowerCase() === userEmail.toLowerCase());
      if (user !== undefined) {
        localStorage.userinfo = JSON.stringify(user);
        // setUserInfo(JSON.stringify(user));
        setUserInfo(user);

        navigate("/Albums");
      } else {
        throw new Error("Please enter a valid Email");
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className={classes.enclosing}>
    <p className="title">Log in</p>
    <form className={classes.form} method="get" onSubmit={loginHandler}>
      <input id="email" className={classes.input} type="email" placeholder="Enter Username" name="uname" required/>
      <input   className={classes.input} type="password" placeholder="Enter Password" name="psw" />
      <input className={classes.button} id = "button" type="submit" value="Log In"/>
      </form>
    </div>
  );
};

export default Login;