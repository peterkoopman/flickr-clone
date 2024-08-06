import React from "react";
import style from "./Gallery.module.scss";
import useGetPhotosets from "../../../flickr/useGetPhotosets";

const Gallery: React.FC = () => {
  const gallery = useGetPhotosets();

  const photos = gallery?.photosets?.photoset[0];

  return (
    <div className={style.gallery}>
      <div className="grid">
        <h2>{photos?.title._content}</h2>
      </div>
    </div>
  );
};

export default Gallery;
