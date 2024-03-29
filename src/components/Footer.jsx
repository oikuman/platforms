import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import logo from "../assets/images/LOGO_white.svg";

import { ReactComponent as Face } from "../assets/images/icons/facebook.svg";
import { ReactComponent as In } from "../assets/images/icons/linkedin.svg";

import { ReactComponent as Contact1 } from "../assets/images/icons/Contact1.svg";
import { ReactComponent as Contact2 } from "../assets/images/icons/Contact2.svg";
import { ReactComponent as Contact3 } from "../assets/images/icons/Contact3.svg";

import RoundIcon from "../elements/Round";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-first-part">
          <Container>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={2}
                className="d-flex justify-content-start flex-md-column justify-content-md-start"
              >
                <a href="#" className="d-inline-block footer-logo-ref">
                  <Image src={logo} className="footer-logo" alt="logo" />
                </a>

                <div className="d-none d-md-flex">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-block footer-icon-one"
                  >
                    <RoundIcon icon={<Face />} radius={11} />
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-block"
                  >
                    <RoundIcon icon={<In />} radius={11} />
                  </a>
                </div>
              </Col>

              <Col xs={12} sm={12} md={6}>
                <ul
                  className="footer-list first-list"
                  style={{ minHeight: 128 }}
                >
                  <li className="footer-list-item small normal">
                    <a href="#demand">
                      <span className="text-white">Для кого сервіс</span>
                    </a>
                  </li>
                  {/* check */}
                  <li className="footer-list-item small normal">
                    <a href="#tariffs">
                      <span className="text-white">Тарифи</span>
                    </a>
                  </li>
                  <li className="footer-list-item small normal">
                    <a href="#faq">
                      <span className="text-white">Найчастіші питання</span>
                    </a>
                  </li>
                  <li className="footer-list-item small normal">
                    <a href="#contacts">
                      <span className="text-white">Контакти</span>
                    </a>
                  </li>
                </ul>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={4}
                className="d-flex justify-content-start d-md-none"
              >
                <div className="refs">
                  <a
                    href="https://www.facebook.com/ICC.MSP/"
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-block footer-icon-one"
                  >
                    <RoundIcon icon={<Face />} radius={11} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ioc-gov-ua/"
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-block"
                  >
                    <RoundIcon icon={<In />} radius={11} />
                  </a>
                </div>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={4}
                className="small normal"
                id="contacts"
              >
                <ul className="footer-list second-list">
                  <li className="footer-list-item small light">
                    <p className="text-white">Наші контакти</p>
                  </li>
                  <li className="footer-list-item small light">
                    <span className="tick-line d-flex align-items-center">
                      <span className="tick">
                        <Contact1 />
                      </span>
                      <span>
                        <a
                          href="tel:+380444941910"
                          className="text-white small normal"
                        >
                          (044)-494-19-10
                        </a>
                      </span>
                    </span>
                  </li>
                  <li className="footer-list-item small light">
                    <span className="tick-line d-flex align-items-center">
                      <span className="tick">
                        <Contact2 />
                      </span>
                      <span>
                        <a
                          href="mailto:office@ioc.gov.ua"
                          className="text-white small normal"
                        >
                          office@ioc.gov.ua
                        </a>
                      </span>
                    </span>
                  </li>
                  <li className="footer-list-item small light">
                    <span className="tick-line d-flex align-items-center">
                      <span className="tick">
                        <Contact3 />
                      </span>
                      <span>
                        <a
                          href="tel:callcenter@ioc.gov.ua"
                          className="text-white small normal"
                        >
                          callcenter@ioc.gov.ua
                        </a>
                      </span>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-second-part">
          <Container>
            <Row>
              {/* <Col xs={12}>
                
              </Col> */}
              <Col xs={12} className="d-flex justify-content-center">
                <a href="#" className="footer-ioc small text-white">
                  <span>© 2024 ДП «ІОЦ Мінсоцполітики України»</span>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
