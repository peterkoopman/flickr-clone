import { ReactNode } from "react";
import { useState, useEffect } from 'react';
import { flickr, userId } from '@/flickr/common';

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

interface Props {
  setPhotosetId: React.Dispatch<React.SetStateAction<string>>;
}

const Chooser = ({ setPhotosetId }: Props) => {
  const [options, setOptions] = useState<ReactNode[]>();
  const [sets, setSets] = useState<Sets | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSets = async () => {
      try {
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

  useEffect(() => {
      if (!isLoading && sets && !error) {
      const optionSet = sets?.photosets.photoset.map((set) => {
        return (
          <option key={set.id} value={set.id}>
            {set.title._content}
          </option>
        );
      });
      setPhotosetId(sets?.photosets.photoset[0].id);
      setOptions(optionSet);
    }
  }, [sets, isLoading, error, setPhotosetId]);

  return (
    <div className="chooser">
      <select
        onChange={(e) => {
          setPhotosetId(e.target.value);
        }}
      >
        {options}
      </select>
    </div>
  );
};

export default Chooser;
