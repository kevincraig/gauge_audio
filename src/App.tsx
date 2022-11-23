import React, { useState, useEffect } from "react";
import { Player, PlayerControls } from "./components/player";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { BottomBar, TopBar } from "./components/common";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  // if (loading) {
  //     setLoading(false);
  //     return <div>Loading...</div>;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Row className={"min-vh-100"}>
          <TopBar />
          <Row>
            <Col className={"col-11 d-flex"}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/player"
                  element={
                    <Player
                      trackName={""}
                      albumName={""}
                      artistName={""}
                      albumArtUrl={""}
                      provider={""}
                    />
                  }
                />
              </Routes>
            </Col>
            <Col className={"col-sm-1"}>
              <Col>
                <PlayerControls />
              </Col>
            </Col>
          </Row>
          <div className={"position-"}>
            <BottomBar />
          </div>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
