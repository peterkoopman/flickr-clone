import { useState, useEffect } from "react";
import { flickr, userId } from "./common";

interface Photoset {
  id: string;
  title: {
    _content: string;
  };
}

interface Sets {
  photosets: {
    photoset: Photoset[];
  };
}

const useGetPhotosets = () => {
  const [sets, setSets] = useState<Sets | null>(null);

  useEffect(() => {
    flickr("flickr.photosets.getList", {
      user_id: userId,
    }).then((data) => {
      setSets(data);
    });
  }, []);

  return sets;
};

export default useGetPhotosets;
