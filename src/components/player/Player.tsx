import { useToggle } from "../../hooks";
import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import {
  PlayCircleFill,
  PauseCircleFill,
  SkipForwardCircleFill,
  SkipBackwardCircleFill,
} from "react-bootstrap-icons";

function Player() {
  const [isPlaying, togglePlaying] = useToggle();
  console.log("Is Playing ", isPlaying);
  let playing = isPlaying.toString();

  return (
    <Row className="align-self-center">
      <Col className="text-center">
        <Button
          type="button"
          variant="text"
          className="action-icon"
          onClick={togglePlaying}
        >
          <SkipBackwardCircleFill />
        </Button>
      </Col>
      <Col className="text-center">
        <Button
          type="button"
          variant="text"
          className="action-icon"
          onClick={togglePlaying}
        >
          {isPlaying ? <PauseCircleFill /> : <PlayCircleFill />}
        </Button>
      </Col>
      <Col className="text-center">
        <Button
          type="button"
          variant="text"
          className="action-icon"
          onClick={togglePlaying}
        >
          <SkipForwardCircleFill />
        </Button>
      </Col>
    </Row>
  );
}

export default Player;
