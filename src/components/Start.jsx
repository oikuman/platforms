import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Start.css";
// import { ReactComponent as MyIcon } from "../assets/images/icons/Date.svg";
import BriefModal from "./BriefModal";

// background: linear-gradient(0deg, #116DD8, #116DD8),
// linear-gradient(0deg, #131415, #131415);


const SpanOne = styled.span`
  color: #116DD8;
`;


const Start = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="mt-3"></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <h1 className="heading text-center">
              <SpanOne>Платформи реєстрів</SpanOne>{' '}
              <span>—</span><br/>
              <span>фундамент цифрової держави</span>
            </h1>
          </Col>
          <Col
            xs={12}
            className="d-flex justify-content-center"
          >
            <p className="text-center">
              <span>Відтепер розробляти такі реєстри стане зручніше.</span>
              <span>Держоргани зекономлять мільйони, а українці швидше отримуватимуть якісні сервіси онлайн.</span>
            </p>
          </Col>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <Button variant="primary" onClick={handleShow}>Заповнити бриф</Button>
          </Col>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <Button variant="outline-primary">Залишити заявку</Button>
          </Col>
        </Row>
      </Container>
      <BriefModal show={show} handleClose={handleClose}/>
    </>
  );
};

export default Start;
