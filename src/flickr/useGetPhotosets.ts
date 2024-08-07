import { useState, useEffect } from "react";
import { flickr, userId } from "./common";

interface Sets {
  photosets: {
    photoset: [
      {
        id: string;
        title: {
          _content: string;
        };
      },
    ];
  };
}

const useGetPhotosets = () => {
  const [sets, setSets] = useState<Sets>({
    photosets: {
      photoset: [
        {
          id: "",
          title: {
            _content: "",
          },
        },
      ],
    },
  });

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
