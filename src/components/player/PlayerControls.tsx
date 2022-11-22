import { useToggle } from "../../hooks";
import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import {
  PlayCircleFill,
  PauseCircleFill,
  SkipForwardCircleFill,
  SkipBackwardCircleFill,
  SkipBackwardBtn,
  SkipForwardBtn,
  PauseBtnFill,
  PlayBtnFill,
} from "react-bootstrap-icons";

function PlayerControls() {
  const [isPlaying, togglePlaying] = useToggle();
  console.log("Is Playing ", isPlaying);
  let playing = isPlaying.toString();

  return (
    <Col>
      <Button
        type="button"
        variant="text"
        className="action-icon"
        onClick={togglePlaying}
      >
        <SkipBackwardBtn />
      </Button>
      <Button
        type="button"
        variant="text"
        className="action-icon"
        onClick={togglePlaying}
      >
        {isPlaying ? <PauseBtnFill /> : <PlayBtnFill />}
      </Button>
      <Button
        type="button"
        variant="text"
        className="action-icon"
        onClick={togglePlaying}
      >
        <SkipForwardBtn />
      </Button>
    </Col>
  );
}

export default PlayerControls;
