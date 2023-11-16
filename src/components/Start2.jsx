import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Upword from "./Upword";
import BriefModal from "./BriefModal";
import "./Start2.css";

const SpanOne = styled.span`
  color: #116dd8;
`;

const SpanTwo = styled.span`
  color: #131415;
`;

const CommOne = styled.span`
  color: #323336;
`;

const CommTwo = styled.span`
  color: #323336;
`;

const Start2 = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="banner">
        <Container>
          <Row>
            <Col xs={12} className="">
              <Upword />
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <h1 className="h1 text-center marginTitle">
                <SpanOne>Платформи реєстрів</SpanOne> <SpanTwo>—</SpanTwo>
                <br />
                <SpanTwo>фундамент цифрової держави</SpanTwo>
              </h1>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <p className="text-center marginComment">
                <CommOne className="normal medium">
                  Відтепер розробляти такі реєстри стане зручніше.
                </CommOne>{" "}
                <CommTwo className="normal light newLine">
                  Держоргани зекономлять мільйони, а українці швидше
                  отримуватимуть якісні сервіси онлайн.
                </CommTwo>
              </p>
            </Col>
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="d-flex flex-column flex-md-row btnsMargin">
                <Button variant="primary btn-large" className="btn1Margin" onClick={handleShow}>
                  Заповнити бриф
                </Button>
                {/* finish */}
                <Button
                  href="#apply"
                  variant="outline-primary btn-large"
                  className="btn2Margin"
                >
                  Залишити заявку
                </Button>
              </div>
            </Col>
            {/* <Col xs={12} sm={6} className="d-flex justify-content-center"></Col> */}
          </Row>
        </Container>
      </header>
      <BriefModal show={show} handleClose={handleClose}/>
    </>
  );
};

export default Start2;
