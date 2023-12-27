import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import partn1 from "../assets/images/png/partners/partn1.png";
import partn2 from "../assets/images/png/partners/partn2.png";
import partn3 from "../assets/images/png/partners/partn3.png";

const Partners = () => {
  return (
    <section className="partners">
      <h4 className="">Наші партнери</h4>
      <Container className="">
        <Row className="">
          <Col className="">
            <Card>
              <Card.Img variant="top" src={partn1} alt="Partner One" />
            </Card>
          </Col>

          <Col className="">
            <Card>
              <Card.Img variant="top" src={partn2} alt="Partner Two" />
            </Card>
          </Col>

          <Col className="">
            <Card>
              <Card.Img variant="top" src={partn3} alt="Partner Three" />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
