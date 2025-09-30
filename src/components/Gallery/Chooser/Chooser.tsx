import {ReactNode} from "react";
import useGetPhotosets from "@/flickr/useGetPhotosets";
import { useState, useEffect } from 'react';

interface Props {
  setPhotosetId: React.Dispatch<React.SetStateAction<string>>;
}

const Chooser = ({ setPhotosetId }: Props) => {
  const [options, setOptions] = useState<ReactNode[]>();

  const {data, isLoading, error} = useGetPhotosets();

  useEffect(() => {
      console.log(data)
      if (!isLoading && data && !error) {
      const optionSet = data?.photosets.photoset.map((set) => {
        return (
          <option key={set.id} value={set.id}>
            {set.title._content}
          </option>
        );
      });
      setPhotosetId(data?.photosets.photoset[0].id);
      setOptions(optionSet);
    }
  }, [data, isLoading, error]);

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
