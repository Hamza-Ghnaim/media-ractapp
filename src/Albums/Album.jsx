import React, {useContext} from "react";
import Context from "../ContextFolder/Context";
import { useNavigate } from "react-router-dom";
import classes from "./Albums.module.css";


const Album = ({data}) => {
  const {userInfo} = useContext(Context)
  const navigate = useNavigate();
  console.log(data);
  // const user = JSON.parse(localStorage.userinfo);

  const SeePhotos = (id) => {
    navigate(`./Photos/?albumID=${id}`);

  };

  return (
    <>
    {userInfo && (
      <div className={classes.posts_div}>
        <div className={classes.userINFO}>
          <div className={classes.userNAMES}>
            <h3 className={classes.name}>{userInfo.name}</h3>
            <h5 className={classes.username}>@{userInfo.username}</h5>
          </div>
        </div>
        <p
          className={classes.post}
          onClick={() => SeePhotos(data.id)}
        >
          {data.title}
        </p>
        <hr id="hr1" className={classes.hr1} />
      </div>
    )}
    </>

  );
};

export default Album;