import React, { useState, useEffect } from "react";
import {
  PlayerControls,
  AlbumArt,
  AlbumInfo,
  SeekBar,
  AudioProvider,
} from "./components/player";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import { Clock } from "./components/common";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  if (loading) {
    setLoading(false);
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="vh-100">
        <Row className="clock">
          <Clock />
        </Row>
        <Col className={"col-sm-4 align-self-center"}>
          <AlbumArt imageUrl="https://picsum.photos/225" />
        </Col>
        <Col className={"align-self-center"}>
          <AudioProvider provider={"tidal"} />
          <AlbumInfo
            className={"album-info"}
            albumName="Album Name"
            artistName="Artist Name"
            trackName="Track Name"
          />
        </Col>
        <Col className={"end-columns col-sm-1 align-self-center"}>
          <PlayerControls />
        </Col>
        <Row className="seeker ">
          <SeekBar currentTime={80} duration={234} />
        </Row>
      </Row>
    </Container>
  );
}

export default App;
