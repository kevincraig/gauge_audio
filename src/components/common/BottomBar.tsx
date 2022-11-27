import React from "react";
import { Row, Col } from "react-bootstrap";
import { AudioProvider, SeekBar } from "../player";

const BottomBar = () => {
  return (
    <>
      <Row className={"p-2"}>
        <Col>
          <AudioProvider provider={"spotify"} />
          <SeekBar currentTime={80} duration={234} />
        </Col>
      </Row>
    </>
  );
};

export default BottomBar;
