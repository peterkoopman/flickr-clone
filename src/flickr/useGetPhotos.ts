import { useEffect, useState } from "react";
import { flickr, userId } from "./common";

interface Photo {
  id: string;
  title: string;
  server: string;
  secret: string;
}

interface Photoset {
  photoset: {
    photo: Photo[];
  };
}

const useGetPhotos = (photoset_id: string) => {
  const [photos, setPhotos] = useState<Photoset>({
    photoset: {
      photo: [],
    },
  });

  useEffect(() => {
    flickr("flickr.photosets.getPhotos", {
      user_id: userId,
      photoset_id: photoset_id,
    }).then((data) => {
      setPhotos(data);
    });
  }, [photoset_id]);
  return photos;
};

export default useGetPhotos;
