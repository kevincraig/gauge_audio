import React, { useState, useEffect } from "react";
import { Player, PlayerControls } from "./components/player";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { TopBar, MainControls } from "./components/common";
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
        <Row className={"min-vh-100 w-available bg-warning"}>
          <TopBar />
          <Row>
            <Col className={"main-content col-11 bg-danger"}>
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
            <Col className={"end-column col-sm-1"}>
              <Col>
                <MainControls className={"main-controls"} />
                <PlayerControls />
              </Col>
            </Col>
          </Row>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
