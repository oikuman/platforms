import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo_sm.png";

// import { ReactComponent as CompIcon } from "../assets/images/icons/";
// import { ReactComponent as CompIcon } from "../assets/images/icons/Comp.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container >
          <Row >
            <Col xs={12} className="d-flex justify-content-center">
            <a href="#">
              <Image src={logo} className="footer-logo" alt="logo" />
            </a>
            </Col>
            <Col xs={12}>
            <ul className="footer-list" style={{minHeight: 128}}>
                <li className="footer-list-item small normal text-white"><a href="#"><span className="text-white">Для кого сервіс</span></a></li>
                <li className="footer-list-item"><a href="#">Тарифи</a></li>
                <li className="footer-list-item"><a href="#">Найчастіші питання</a></li>
                <li className="footer-list-item"><a href="#">Контакти</a></li>
            </ul>  



            </Col>
            <Col xs={12}>
            <ul className="footer-list" style={{minHeight: 128}}>
              <li className="footer-list-item small light"><a href="#">Публічна оферта</a></li>
              <li className="footer-list-item small light"><a href="#">Політика конфіденційності</a></li>
              <li className="footer-list-item small light"><a href="#">Політика Cookie</a></li>
              <li className="footer-list-item small light"><a href="#">Політика безпеки</a></li>
              
            </ul>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
            <a href="#" className="footer-ioc small light"><span>© 2023 ДП «ІОЦ Мінсоцполітики України»</span></a>
            </Col>


          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
