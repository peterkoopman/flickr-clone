import React from "react";
import useGetPhotosets from "../../../flickr/useGetPhotosets";

interface Props {
  setPhotoset: Function;
}

const Chooser: React.FC<Props> = ({ setPhotoset }) => {
  const choices = useGetPhotosets();

  const options = choices?.photosets.photoset.map((set) => {
    return (
      <option key={set.id} value={set.id}>
        {set.title._content}
      </option>
    );
  });

  return (
    <div className="chooser">
      <select
        onChange={(e) => {
          setPhotoset(e.target.value);
        }}
      >
        {options}
      </select>
    </div>
  );
};

export default Chooser;
