import React, { Fragment, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// import classes from "./Comments.module.css";

const Photos = () => {
//   const user = JSON.parse(localStorage.userinfo);
  const [photos, setphotos] = useState([]);
  const [searchParams] = useSearchParams();
  const albumID = searchParams.get("albumID");
  useEffect(() => {
    const Fetch = async () => {

      const response2 = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`
      );
      const Response2 = await response2.json();
      setphotos(Response2);
    };
    Fetch();
  });
//   const post = Album.title;
return (
    <Fragment>
        {photos &&
        photos.map((photo) => (
            <div key={photo.id} >
                <div >
                <img src={photo.url} alt="img" />
                <div >
                </div>
                </div>
                <hr />
            </div>
        ))}
    </Fragment>
  );
};

export default Photos;


