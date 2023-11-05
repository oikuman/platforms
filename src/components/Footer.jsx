import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container >
          <Row >
            <Col xs={12} className="d-flex justify-content-center">
              <Image src={logo} />
            </Col>
            <Col xs={12}>
              <ListGroup variant="flush">
                <ListGroup.Item
                  className="border-0 text-center text-white"
                  style={{ backgroundColor: "#131415" }}
                >
                  <span className="ms-2">Для кого сервіс</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 text-center text-white"
                  style={{ backgroundColor: "#131415" }}
                >
                  <span className="ms-2">Тарифи</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 text-center text-white"
                  style={{ backgroundColor: "#131415" }}
                >
                  <span className="ms-2">Контакти</span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12}>
              <ListGroup variant="flush">
                <ListGroup.Item
                  className="border-0 text-center text-white"
                  style={{ backgroundColor: "#131415" }}
                >
                  <span className="ms-2">Публічна оферта</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 text-center text-white"
                  style={{ backgroundColor: "#131415" }}
                >
                  <span className="ms-2">Політика конфіденційності</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 text-center text-white"
                  style={{ backgroundColor: "#131415" }}
                >
                  <span className="ms-2">Політика Cookie</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 text-center text-white"
                  style={{ backgroundColor: "#131415" }}
                >
                  <span className="ms-2">Політика безпеки</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="border-0 text-center text-white"
                  style={{ backgroundColor: "#131415" }}
                >
                  <span className="ms-2">
                    © 2023 ДП «ІОЦ Мінсоцполітики України»
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
