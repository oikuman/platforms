import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import partn1 from "../assets/images/png/partners/partn1.png";
import partn2 from "../assets/images/png/partners/partn2.png";
import partn3 from "../assets/images/png/partners/partn3.png";

import "./Partners.css";

const Partners = () => {
  return (
    <section className="partners">
      <h2 className="text-center partners-head">Наші партнери</h2>
      <Container>
        <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-center">
            <Card className="partners-card partners-card-gap">
              <Card.Img variant="top" src={partn1} alt="Partner One" className="partners-img" />
            </Card>

            <Card className="partners-card partners-card-gap">
              <Card.Img variant="top" src={partn2} alt="Partner Two" className="partners-img" />
            </Card>

            <Card className="partners-card">
              <Card.Img variant="top" src={partn3} alt="Partner Three" className="partners-img" />
            </Card>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
