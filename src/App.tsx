import React, { useState, useEffect } from "react";
import {
  PlayerControls,
  AlbumArt,
  AlbumInfo,
  SeekBar,
  AudioProvider,
} from "./components/player";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { TopBar, MainControls } from "./components/common";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  if (loading) {
    setLoading(false);
    return <div>Loading...</div>;
  }

  return (
    <Row className="min-vh-100 w-auto p-0 m-0">
      <div className="col-12 p-0 m-0">
        <TopBar />
      </div>
      <Col className={"col-md-4 album-art"}>
        <AlbumArt imageUrl="https://picsum.photos/225" />
      </Col>
      <Col className={"center-column"}>
        <AlbumInfo
          className={"album-info"}
          albumName="Album Name"
          artistName="Artist Name"
          trackName="Track Name"
        />
      </Col>
      <Col className={"end-column col-sm-1"}>
        <Col>
          <MainControls className={"main-controls"} />
          <PlayerControls />
        </Col>
      </Col>
      <Row className="seeker">
        <div className={"service-source"}>
          <AudioProvider provider={"spotify"} />
        </div>
        <SeekBar currentTime={80} duration={234} />
      </Row>
    </Row>
  );
}

export default App;
