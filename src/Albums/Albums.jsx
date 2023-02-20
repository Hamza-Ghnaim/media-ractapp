import React, { Fragment, useState, useEffect, useContext } from "react";
import classes from "./Albums.module.css";
import Album from "./Album";
import AuthContext from "../ContextFolder/Context";
import axios from "axios";
const Albums = () => {
  const { userInfo } = useContext(AuthContext);

  const [AlbumsArray, setAlbumsArray] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      
      const Response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userInfo?.id}/albums`
      );
      // const Response = await response.json();
      
      setAlbumsArray(Response.data);
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
            <Album data={album} />
          </Fragment>
        ))}
    </Fragment>
  );
};
export default Albums;
