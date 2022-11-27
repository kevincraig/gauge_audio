import React, { useState, useEffect } from "react";
import { Player, PlayerControls } from "./components/player";
import { Col, Row } from "react-bootstrap";
import { BottomBar, TopBar } from "./components/common";
import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  const [loading, setLoading] = useState(true);

  // if (loading) {
  //     setLoading(false);
  //     return <div>Loading...</div>;
  // }

  return (
    <div className="App">
      <Row>
        <TopBar />
        <Row className={"main-content"}>
          <Col className={"col-11"}></Col>
          <Col className={"col-1"}>
            <PlayerControls />
          </Col>
        </Row>
      </Row>
      <div className={"col-12 play-bar"}>
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
