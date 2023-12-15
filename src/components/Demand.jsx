import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import imageOne from "../assets/images/jpg/01.jpg";
import imageTwo from "../assets/images/jpg/02.jpg";
import imageThr from "../assets/images/jpg/03.jpg";

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
            lg={4}
            className="d-flex justify-content-center ps-0 pe-0"
          >
            <Figure className="d-flex flex-column align-items-center demand-figure demand-figure-one">
              <Figure.Image
                className="demand-image"
                alt="first image"
                src={imageOne}
              />
              <Figure.Caption>
                <p className="text-center demand-text">
                  <span className="figure-caption textPrimary">Центральні органи виконавчої влади</span>
                </p>
                <p className="text-center">
                  <span className="figure-desc textPrimary">
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
            lg={4}
            className="d-flex justify-content-center ps-0 pe-0"
          >
            <Figure className="d-flex flex-column align-items-center demand-figure">
              <Figure.Image
                className="demand-image"
                alt="second image"
                src={imageTwo}
              />
              <Figure.Caption>
                <p className="text-center demand-text">
                  <span className="figure-caption textPrimary">Державні установи</span>
                </p>
                <p className="text-center">
                  <span className="figure-desc textPrimary">
                    які поки не мають цифровізованої бази реєстрів
                  </span>
                </p>
              </Figure.Caption>
            </Figure>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center ps-0 pe-0"
          >
            <Figure className="d-flex flex-column align-items-center demand-figure">
              <Figure.Image
                className="demand-image"
                alt="second image"
                src={imageThr}
              />
              <Figure.Caption>
                <p className="text-center demand-text">
                  <span className="figure-caption textPrimary">Приватні підприємства</span>
                </p>
                <p className="text-center">
                  <span className="figure-desc textPrimary">
                    які поки не мають оцифрованих реєстрів
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
