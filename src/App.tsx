import React, { useState, useEffect } from "react";
import {
  Player,
  AlbumArt,
  AlbumInfo,
  SeekBar,
  AudioProvider,
} from "./components/player";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
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
      <Row className="min-vh-100">
        <Col className="align-self-center">
          <AlbumArt imageUrl="https://picsum.photos/350" />
        </Col>
        <Col className="align-self-center">
          <AudioProvider provider={"Tidal"} />
          <AlbumInfo
            albumName="Album Name"
            artistName="Artist Name"
            trackName="Track Name"
          />
          <Player />
        </Col>

        <SeekBar currentTime={40} duration={234} />
      </Row>
    </Container>
  );
}

export default App;
