import React, { Children } from "react";
import { Col, Row } from "react-bootstrap";
import TopBar from "../../components/common/TopBar";
import BottomBar from "../../components/common/BottomBar";
import PlayerControls from "../../components/player/PlayerControls";
import { Outlet } from "react-router-dom";

const loading = () => <div className="text-center"></div>;

const MainLayout = () => {
  return (
    <div>
      <Row>
        <TopBar />
        <Row className={"main-content"}>
          <Col className={"col-11"}>
            <Outlet />
          </Col>
          <Col className={"col-1 align-self-start"}>
            <PlayerControls />
          </Col>
        </Row>
      </Row>
      <div className={"col-12 play-bar"}>
        <BottomBar />
      </div>
    </div>
  );
};
export default MainLayout;
