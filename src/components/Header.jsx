import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import logo from "../assets/images/logo.svg";
import Menu from "./Menu";
import { BurgerIcon } from "./BlackIcons";

import "./Header.css";

const Header = () => {
  return (
    <header className="header text-white">
      <Container>
        <Row>
          <Col xs={2} className="d-flex justify-content-center align-items-center">
          <Image src={logo} />
          </Col>
          <Col xs={8} className="d-flex justify-content-center align-items-center">
          <Menu />  
          </Col>
          <Col xs={2} className="d-flex justify-content-center align-items-center">
            <Button>
                <BurgerIcon />
            </Button>
          </Col>
        </Row>
      </Container>

      
    </header>
  );
};

export default Header;
