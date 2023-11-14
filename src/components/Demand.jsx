import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import imageOne from "../assets/images/jpg/01.jpg";
import imageTwo from "../assets/images/jpg/02.jpg";

const DarkSpan = styled.span`
  color: #116DD8;
`;

const LightSpan = styled.span`
  color: #131415;
`;

const Demand = () => {
  return (
    <>
      <Container id="demand">
        <Row>
          <Col xs={12} className="mt-3 d-flex justify-content-center">
            <h2 className="text-center">
              <DarkSpan>Платформи реєстрів</DarkSpan><br/>
              <LightSpan>найкраще рішення для</LightSpan>
            </h2>
          </Col>
          <Col xs={12} sm={12} md={6} className="d-flex justify-content-center">
            <Figure>
              <Figure.Image
                width={428}
                height={722}
                alt="first image"
                src={imageOne}
              />
              <Figure.Caption>
                <h6>Центральні органи виконавчої влади</h6>
                <p>які потребують оновлення бази реєстрів на більш сучасну та зручну</p>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={12} sm={12} md={6} className="d-flex justify-content-center">
          <Figure>
              <Figure.Image
                width={428}
                height={722}
                alt="second image"
                src={imageTwo}
              />
              <Figure.Caption>
                <h6>Державні установи</h6>
                <p>які поки не мають цифровізованої бази реєстрів</p>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Demand;
