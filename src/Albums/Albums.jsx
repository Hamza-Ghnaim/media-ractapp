import React, { Fragment, useState, useEffect,useContext } from "react";
import { useLocation } from "react-router";
import classes from "./Albums.module.css";
import Album from "./Album";
import Context from "../ContextFolder/Context";
const Albums = () => {
  const loc = useLocation()
const {userInfo}=useContext(Context);
console.log(userInfo);  
  const [AlbumsArray, setAlbumsArray] = useState([]);


  useEffect(() => {
    const Fetch = async () => {
      if(userInfo){
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userInfo.id}/albums`
        );
        const Response = await response.json();
        console.log(Response);
        setAlbumsArray(Response);
      } 
    };
    // setUserInfo(JSON.parse(localStorage.userinfo));
    Fetch();
  }, [userInfo]);


  return (
    <Fragment>
        <div className={classes.enclosing}>
        <div className={classes.container}>
          <h1 className={classes.title}>Discover</h1>
          <p className={classes.paragraph}>
            <strong>WHAT'S NEW TODAY</strong>
          </p>
        <br />
        </div>
      </div>
      {AlbumsArray &&
        AlbumsArray.map((album) => (
          <Fragment key={album.id}>
            <Album data={album}/>
          </Fragment>
        ))}
    </Fragment>
  );
};
export default Albums;