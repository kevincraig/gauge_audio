import React from "react";

type AlbumArtProps = {
  imageUrl: string;
};

const AlbumArt = ({ imageUrl }: AlbumArtProps) => {
  return (
    <>
      <img src={imageUrl} alt="album art" />
    </>
  );
};

export default AlbumArt;
