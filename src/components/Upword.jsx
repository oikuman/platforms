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

const Upword = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs={2} className="d-flex justify-content-center align-items-center">
          <a href="#"><Image src={logo} /></a>
          </Col>
          <Col xs={8} className="d-flex justify-content-center align-items-center">
            <div className="d-none d-md-block"><Menu /></div>  
          </Col>
          <Col xs={2} className="d-flex justify-content-center align-items-center">
            <span onClick={handleShow} className="d-md-none" style={{cursor: 'pointer'}}>
                <BurgerIcon />
            </span>
          </Col>
        </Row>
      </Container>
      <HeaderCanvas show={show} handleClose={handleClose}  />
      
    </div>
  );
};

export default Upword;
