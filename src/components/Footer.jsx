import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo_sm.png";

import { ReactComponent as Face } from "../assets/images/icons/facebook.svg";
import { ReactComponent as In } from "../assets/images/icons/linkedin.svg";

import RoundIcon from "../elements/Round";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={2}
              className="d-flex justify-content-center flex-md-column"
            >
              <a href="#" className="">
                <Image src={logo} className="footer-logo" alt="logo" />
              </a>

              <div className="d-none d-md-flex">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RoundIcon icon={<Face />} radius={11} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RoundIcon icon={<In />} radius={11} />
                </a>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6}>
              <ul className="footer-list first-list" style={{ minHeight: 128 }}>
                <li className="footer-list-item small normal">
                  <a href="#">
                    <span className="text-white">Для кого сервіс</span>
                  </a>
                </li>
                {/* check */}
                <li className="footer-list-item small normal">
                  <a href="#">
                    <span className="text-white">Тарифи</span>
                  </a>
                </li>
                <li className="footer-list-item small normal">
                  <a href="#">
                    <span className="text-white">Найчастіші питання</span>
                  </a>
                </li>
                <li className="footer-list-item small normal">
                  <a href="#">
                    <span className="text-white">Контакти</span>
                  </a>
                </li>
              </ul>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={4}
              className="d-flex justify-content-center d-md-none"
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RoundIcon icon={<Face />} radius={11} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RoundIcon icon={<In />} radius={11} />
              </a>
            </Col>

            <Col xs={12} sm={12} md={4} className="d-none d-md-block">
              <p className="text-white">Залишилися питання?</p>
              <Form className="mb-3 ms-0 me-0">
                <Form.Group className="mb-3" controlId="formFooterEmail" >
                  <Form.Control type="email" placeholder="Ваш e-mail" className="footer-input" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFooterPhone">
                  <Form.Control type="tel" pattern="[\+\-0-9]*" placeholder="Ваш номер телефону" className="footer-input" />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Зв&apos;язатися
                  </Button>
                </div>
              </Form>
            </Col>

            <hr style={{ borderTop: "1px solid #7B7F85" }} className="w-100" />

            <Col xs={12}>
              <ul
                className="footer-list second-list"
                style={{ minHeight: 128 }}
              >
                <li className="footer-list-item small light">
                  <a href="#">Публічна оферта</a>
                </li>
                <li className="footer-list-item small light">
                  <a href="#">Політика конфіденційності</a>
                </li>
                <li className="footer-list-item small light">
                  <a href="#">Політика Cookie</a>
                </li>
                <li className="footer-list-item small light">
                  <a href="#">Політика безпеки</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <a href="#" className="footer-ioc small light">
                <span>© 2023 ДП «ІОЦ Мінсоцполітики України»</span>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
