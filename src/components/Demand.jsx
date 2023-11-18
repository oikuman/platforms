import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import imageOne from "../assets/images/jpg/01.jpg";
import imageTwo from "../assets/images/jpg/02.jpg";

import "./Demand.css";

const DarkSpan = styled.span`
  color: #116dd8;
`;

const LightSpan = styled.span`
  color: #131415;
`;

const Demand = () => {
  return (
    <>
      <section id="demand" className="section">
      <Container  className="m-0 p-0">
        <Row className="m-0 ps-3 pe-3 ps-lg-7 pe-lg-7">
          <Col xs={12} className="d-flex justify-content-center ps-0 pe-0 margin-head">
            <h2 className="text-center">
              <DarkSpan>Платформи реєстрів</DarkSpan>
              <br />
              <LightSpan>найкраще рішення для</LightSpan>
            </h2>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="d-flex justify-content-center ps-0 pe-0"
          >
            <Figure className="d-flex flex-column align-items-center">
              <Figure.Image
                className="demand-image"
                alt="first image"
                src={imageOne}
              />
              <Figure.Caption>
                <h6 className="text-center">
                  <span className="">Центральні органи виконавчої влади</span>
                </h6>
                <p className="text-center">
                  <span className="">
                    які потребують оновлення бази реєстрів на більш сучасну та
                    зручну
                  </span>
                </p>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            className="d-flex justify-content-center ps-0 pe-0"
          >
            <Figure className="d-flex flex-column align-items-center">
              <Figure.Image
                className="demand-image"
                alt="second image"
                src={imageTwo}
              />
              <Figure.Caption>
                <h6 className="text-center">
                  <span className="">Державні установи</span>
                </h6>
                <p className="text-center">
                  <span className="">
                    які поки не мають цифровізованої бази реєстрів
                  </span>
                </p>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
      </section>
    </>
    
  );
};

export default Demand;
