import React, { Fragment, useState, useEffect } from "react";
import classes from "./Albums.module.css";
import Album from "./Album";
const Albums = () => {

  const user = JSON.parse(localStorage.userinfo);
  const [AlbumsArray, setAlbumsArray] = useState([]);


  useEffect(() => {
    const Fetch = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/albums`
      );
      const Response = await response.json();
      setAlbumsArray(Response);
    };
    Fetch();
  }, []);





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