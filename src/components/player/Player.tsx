import React from "react";
import { MainControls, TopBar } from "../common";
import { Col, Row } from "react-bootstrap";
import {
  AlbumArt,
  AlbumInfo,
  AudioProvider,
  PlayerControls,
  SeekBar,
} from "./index";

type PlayerProps = {
  trackName: string;
  albumName: string;
  artistName: string;
  albumArtUrl: string;
  provider: string;
};

const Player = ({
  trackName,
  albumName,
  artistName,
  albumArtUrl,
  provider,
}: PlayerProps) => {
  return (
    <Row>
      <Col className={"col-md-4 album-art h-100"}>
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
      <Row className="seeker">
        <div className={"service-source"}>
          <AudioProvider provider={"spotify"} />
        </div>
        <SeekBar currentTime={80} duration={234} />
      </Row>
    </Row>
  );
};

export default Player;
