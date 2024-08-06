import React, { useState, useEffect } from "react";

const Album: React.FC = () => {
  const [flickr, setFlickr] = useState({});
  const [album, setAlbum] = useState({
    albumId: "",
    albumName: " ",
    albums: [
      {
        name: "",
        key: "",
      },
    ],
    photos: [
      {
        id: "",
        url: "",
      },
    ],
    photoView: "",
  });

  return (
    <div className="album">
      <h2>{album.albumName}</h2>
    </div>
  );
};

export default Album;
