import React, { useEffect, useState } from "react";
import style from "./Gallery.module.scss";
import Photo from "../Photo/Photo";
import Chooser from "../Chooser/Chooser";
import { flickr, userId } from "../../../flickr/common";

interface IPhoto {
  id: string;
  title: string;
  server: string;
  secret: string;
}

const Gallery = () => {
  const [photosetId, setPhotosetId] = useState("72177720313722432");
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [title, setTitle] = useState<string>("");

  const getPhotos = (photosetId: string) => {
    flickr("flickr.photosets.getPhotos", {
      user_id: userId,
      photoset_id: photosetId,
    }).then((data) => {
      setPhotos(data?.photoset?.photo);
      setTitle(data?.photoset?.title);
    });
  };

  useEffect(() => {
    getPhotos(photosetId);
  }, [photosetId]);

  return (
    <div className={style.gallery}>
      <div className="grid">
        <h2>{title}</h2>
        <Chooser setPhotosetId={setPhotosetId} />
        <div className={style.grid}>
          {photos.map((photo) => {
            return (
              <Photo
                key={photo.id}
                url={`https://flickr.com/photos/scribblenz/${photo.id}`}
                id={photo.id}
                title={photo.title}
                server={photo.server}
                secret={photo.secret}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
