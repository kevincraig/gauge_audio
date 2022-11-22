import React from "react";
import { Col, Button } from "react-bootstrap";
import { House } from "react-bootstrap-icons";

type MainControlsProps = {
  className: string;
};

const MainControls = ({ className }: MainControlsProps) => {
  return (
    <Col className={className}>
      <Button type="button" variant="text" className="action-icon">
        <House />
      </Button>
    </Col>
  );
};
export default MainControls;
