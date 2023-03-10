import React, { Fragment, useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./Albums.module.css";
import axios from "axios";

const Photos = () => {


  const [photos, setphotos] = useState([]);
  const [searchParams] = useSearchParams();
  const albumID = searchParams.get("albumID");
  useEffect(() => {
    const Fetch = async () => {

      const Response2 = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`
      );
      // const Response2 = await response2.json();
      setphotos(Response2.data);
    };
    Fetch();
    // localStorage.removeItem('userinfo');
  });
return (
    <Fragment>
        {photos &&
        photos.map((photo) => (
            <div key={photo.id} className={classes.addedCOMMENTDIV}>
                <div className={classes.commenterINFO}>
                <img className={classes.photo} src={photo.url} alt="img" />
                <div className={classes.commentorNAMES}>
                </div>
                </div>
                <hr className={classes.hr2} />
            </div>
        ))}
    </Fragment>
  );
};

export default Photos;


