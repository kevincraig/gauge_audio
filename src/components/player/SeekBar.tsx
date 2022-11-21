import React from "react";
import { Row } from "react-bootstrap";

type SeekBarProps = {
  currentTime: number;
  duration: number;
  // onSeek: (time: number) => void;
};

const SeekBar = ({ currentTime, duration }: SeekBarProps) => {
  return (
    <Row>
      <input
        type={"range"}
        value={currentTime}
        step={1}
        min={0}
        max={duration}
        // onChange={(e) => onSeek(parseInt(e.target.value))}
      />
    </Row>
  );
};

export default SeekBar;
