import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container className={"text-center "}>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
      </Row>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
      </Row>
    </Container>
  );
};

export default Home;
