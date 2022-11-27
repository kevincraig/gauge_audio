import React from "react";
import { Row, Col } from "react-bootstrap";

type SeekBarProps = {
  currentTime: number;
  duration: number;
  // onSeek: (time: number) => void;
};

const SeekBar = ({ currentTime, duration }: SeekBarProps) => {
  return (
    <Row className={"me-auto"}>
      <Col className="col-1">
        <span>0:00</span>
      </Col>
      <Col className="col-sm-10">
        <progress className={"w-100"} />
        {/*<input*/}
        {/*  className={"w-100"}*/}
        {/*  type={"range"}*/}
        {/*  value={currentTime}*/}
        {/*  step={1}*/}
        {/*  min={0}*/}
        {/*  max={duration}*/}
        {/*  // onChange={(e) => onSeek(parseInt(e.target.value))}*/}
        {/*/>*/}
      </Col>
      <Col className="col-1">
        <span>0:00</span>
      </Col>
    </Row>
  );
};

export default SeekBar;
