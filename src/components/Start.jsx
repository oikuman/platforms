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
          <Col xs={12} sm={6} md={4} className="mt-3"></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <h1 className="heading text-center">
              <span>Платформи реєстрів</span>{' '}
              <span>—</span><br/>
              <span>фундамент цифрової держави</span>
            </h1>
          </Col>
          <Col
            xs={12}
            sm={12}
            className="mt-3 d-flex justify-content-center"
          >
            <p className="text-center">
              <span>Відтепер розробляти такі реєстри стане зручніше.</span>
              <span>Держоргани зекономлять мільйони, а українці швидше отримуватимуть якісні сервіси онлайн.</span>
            </p>
          </Col>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <Button variant="primary">Заповнити бриф</Button>
          </Col>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <Button variant="outline-primary">Залишити заявку</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Start;
