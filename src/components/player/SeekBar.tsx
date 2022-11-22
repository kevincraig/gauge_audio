import React from "react";
import { Row, Col } from "react-bootstrap";

type SeekBarProps = {
  currentTime: number;
  duration: number;
  // onSeek: (time: number) => void;
};

const SeekBar = ({ currentTime, duration }: SeekBarProps) => {
  return (
    <Row>
      <Col className="col-sm-1">
        <p>0:00</p>
      </Col>
      <Col className="col-10">
        <input
          className={"w-100"}
          type={"range"}
          value={currentTime}
          step={1}
          min={0}
          max={duration}
          // onChange={(e) => onSeek(parseInt(e.target.value))}
        />
      </Col>
      <Col className="col-sm-1">
        <p>0:00</p>
      </Col>
    </Row>
  );
};

export default SeekBar;
