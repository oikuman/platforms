import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import imageOne from "../assets/images/jpg/01.jpg";
import imageTwo from "../assets/images/jpg/02.jpg";

const DarkSpan = styled.span`
  color: tomato;
  font-family: "eUkraineHead";
`;

const LightSpan = styled.span`
  color: green;
  font-family: "eUkraineHead";
`;

const Demand = () => {
  return (
    <>
      <Container id="demand">
        <Row>
          <Col xs={12} className="mt-3 d-flex justify-content-center">
            <h2>
              <DarkSpan>Платформи реєстрів</DarkSpan>{" "}<LightSpan>найкраще рішення для</LightSpan>
            </h2>
          </Col>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <Figure>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={imageOne}
              />
              <Figure.Caption>
              <h2>Центральні органи виконавчої влади</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
          <Figure>
              <Figure.Image
                // width={171}
                // height={180}
                alt="171x180"
                src={imageTwo}
              />
              <Figure.Caption>
                <h2>Державні установи</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Demand;
