import React, { useContext,useEffect, useState } from "react";
import AuthContext from "../ContextFolder/Context";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import axios from "axios";



const Login = () => {

  const { setUserInfo }=useContext(AuthContext);
  const {setisLogged}=useContext(AuthContext);
  const [users,setUsers]=useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  useEffect(() => {
    const Fetch = async () => {
     const Users = await axios.get("https://jsonplaceholder.typicode.com/users");
    //       let Users =await fetch(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // Users = await (Users.json());
    setUsers(Users.data);

    };

    Fetch();
    localStorage.clear();
  }, []);

  const loginHandler = async (event) => {
    try {
      event.preventDefault();
      setisLogged(true);
      // const userEmail = event?.target?.elements?.email?.value;
      const userEmail = document.getElementById("email").value;
      
      const user = (users).find((item) => item.email.toLowerCase() === userEmail.toLowerCase());
      if (user !== undefined) {
        localStorage.userinfo = JSON.stringify(user);
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
        <input
          id="email"
          className={classes.input}
          type="email"
          placeholder="Enter Username"
          name="uname"
          required
        />
        <input
          className={classes.input}
          type="password"
          placeholder="Enter Password"
          name="psw"
        />
        <input
          className={classes.button}
          id="button"
          type="submit"
          value="Log In"
        />
      </form>
    </div>
  );
};

export default Login;
