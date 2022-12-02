import { useToggle } from "../../hooks";
import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import {
  SkipBackwardBtn,
  SkipForwardBtn,
  PauseBtnFill,
  PlayBtnFill,
  House,
} from "react-bootstrap-icons";

function PlayerControls() {
  const [isPlaying, togglePlaying] = useToggle();
  console.log("Is Playing ", isPlaying);
  let playing = isPlaying.toString();

  return (
    <Container className={"player-controls"}>
      <Button type="button" variant="text" className="action-icon" href={"/"}>
        <House />
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
        <SkipBackwardBtn />
      </Button>

      <Button
        type="button"
        variant="text"
        className="action-icon"
        onClick={togglePlaying}
      >
        <SkipForwardBtn />
      </Button>
    </Container>
  );
}

export default PlayerControls;
