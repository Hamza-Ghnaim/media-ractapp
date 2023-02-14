import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Albums.module.css";


const Album = (props) => {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.userinfo);

  const SeePhotos = (id) => {
    navigate(`./Photos/?albumID=${id}`);

  };

  return (
      <div className={classes.posts_div}>
        <div className={classes.userINFO}>
          <div className={classes.userNAMES}>
            <h3 className={classes.name}>{user.name}</h3>
            <h5 className={classes.username}>@{user.username}</h5>
          </div>
        </div>
        <p
          className={classes.post}
          onClick={() => SeePhotos(props.data.id)}
        >
          {props.data.title}
        </p>
        <hr id="hr1" className={classes.hr1} />
      </div>
  );
};

export default Album;