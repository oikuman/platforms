import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
import logo from "../assets/images/logo.svg";
import Menu from "./Menu";
import HeaderCanvas from "./HeaderCanvas";
import { BurgerIcon } from "./BlackIcons";

import "./Header.css";

const Header = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header text-white">
      <Container>
        <Row>
          <Col xs={2} className="d-flex justify-content-center align-items-center">
          <a href="#"><Image src={logo} /></a>
          
          </Col>
          <Col xs={8} className="d-flex justify-content-center align-items-center">
          <Menu />  
          </Col>
          <Col xs={2} className="d-flex justify-content-center align-items-center">
            <span onClick={handleShow} style={{cursor: 'pointer'}}>
                <BurgerIcon />
            </span>
          </Col>
        </Row>
      </Container>
      <HeaderCanvas show={show} handleClose={handleClose}  />
      
    </header>
  );
};

export default Header;
