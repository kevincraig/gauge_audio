import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { AlbumArt, AlbumInfo } from "./index";

type PlayerProps = {
  trackName: string;
  albumName: string;
  artistName: string;
  albumArtUrl: string;
  isPlaying: boolean;
  positionMs: number;
  durationMs: number;
  provider: string;
};

function Player({
  trackName,
  albumName,
  artistName,
  albumArtUrl,
  provider,
}: PlayerProps) {
  return (
    <Container className={"player-container"}>
      <Col className={"col-md-5 col-lg-4"}>
        <AlbumArt imageUrl="https://picsum.photos/250" />
      </Col>
      <Col className={"center-column"}>
        <AlbumInfo
          className={"album-info"}
          albumName="Album Name"
          artistName="Artist Name"
          trackName="Track Name"
        />
      </Col>
    </Container>
  );
}

export default Player;
