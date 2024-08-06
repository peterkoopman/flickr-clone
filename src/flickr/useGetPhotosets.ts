import { useState, useEffect } from "react";
import { flickr, userId } from "./common";

interface Sets {
  photosets: {
    photoset: [
      {
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
