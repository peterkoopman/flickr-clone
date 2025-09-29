import { createFlickr } from "flickr-sdk";
import { useState, useEffect } from "react";
import { FlickrServices } from "flickr-sdk";

export interface Photoset {
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const userId = "11077827@N02";

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const { flickr }: FlickrServices = createFlickr(
          "05bcf684d4158a40dd7ab3dd9c4a625b"
        );
        const photosets = await flickr("flickr.photosets.getList", {
          user_id: userId,
        });

        setSets(photosets as Sets);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSets();
  }, []);
  return {data: sets, isLoading, error};
};

export default useGetPhotosets;
