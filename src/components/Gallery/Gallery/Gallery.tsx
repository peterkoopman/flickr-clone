import { useEffect, useState } from "react";
import style from "./Gallery.module.scss";
import Photo from "@/components/Gallery/Photo/Photo";
import Chooser from "@/components/Gallery/Chooser/Chooser";
import { flickr, userId } from "@/flickr/common";

interface IPhoto {
  id: string;
  title: string;
  server: string;
  secret: string;
  o_width: number;
  o_height: number;
}

const calculateDims = (width: number, height: number) => {
  if(width === height) {
    return {
      width: 400,
      height: 400
    }
  }

  const maxDim = Math.max(width, height);
  const scaleFactor = 400/maxDim;

  return {
    width: width * scaleFactor,
    height: height * scaleFactor
  }
}

const Gallery = () => {
  const [photosetId, setPhotosetId] = useState<string>('');
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [title, setTitle] = useState<string>("");

  const getPhotos = (photosetId: string) => {
    if(photosetId === '') return;
    
    if(userId) {
      flickr("flickr.photosets.getPhotos", {
        user_id: userId,
        photoset_id: photosetId,
        extras: 'o_dims,url_w',
      }).then((data) => {
        setPhotos(data?.photoset?.photo);
        setTitle(data?.photoset?.title);
      }).catch((err) => {
        console.log(err);
      });
    }


  };

  useEffect(() => {
    getPhotos(photosetId);
  }, [photosetId]);

  return (
    <div className={style.gallery}>
      <div className={style.container}>
        <h2>{title}</h2>
        <Chooser setPhotosetId={setPhotosetId} />
        <div className={style.grid}>
          {photos.map((photo) => {
            return (
              <Photo
                key={photo.id}
                url={`https://flickr.com/photos/scribblenz/${photo.id}`}
                id={photo.id}
                width={calculateDims(Number(photo.o_width), Number(photo.o_height)).width}
                height={calculateDims(Number(photo.o_width), Number(photo.o_height)).height}
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
