import React from "react";
import { Col } from "react-bootstrap";
import { render } from "react-dom";

type AlbumArtProps = {
  imageUrl: string;
};

const AlbumArt = ({ imageUrl }: AlbumArtProps) => {
  return (
    <>
      <Col className="align-self-center">
        <img className="album-art" src={imageUrl} alt="album art" />
      </Col>
    </>
  );
};

export default AlbumArt;
