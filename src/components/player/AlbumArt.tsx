import React from "react";
import { Container, Row, Col } from "react-bootstrap";

type AlbumArtProps = {
  imageUrl: string;
};

const AlbumArt = ({ imageUrl }: AlbumArtProps) => {
  return (
    <Container className={"container-fluid"}>
      <Col className={"px-0 py-2"}>
        <img src={imageUrl} className={"img-fluid album-art"} alt="album art" />
      </Col>
    </Container>
  );
};

export default AlbumArt;
