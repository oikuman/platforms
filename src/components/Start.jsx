import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Start.css";
// import { ReactComponent as MyIcon } from "../assets/images/icons/Date.svg";

const Start = () => {
  return (
    <>
    <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="mt-3">
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h1 className="heading">ПРивіт ми</h1>
          <Col xs={12} sm={6} md={4} className="mt-3">
            <Button variant="primary">hello</Button>
          </Col>
          <Col xs={12} sm={6} md={4} className="mt-3">
            <Button variant="outline-primary">Primary</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Start;
