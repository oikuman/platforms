import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/images/logo.jpg";
import Menu from "./Menu";
import HeaderCanvas from "./HeaderCanvas";
import { BurgerIcon } from "./BlackIcons";

const Upword = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <Container className="ps-0 pe-0">
        <Row className="d-flex justify-content-between align-items-center ps-3 pe-3 ps-lg-7 pe-lg-7 mt-3">
          <Col
            xs={4}
            className="d-flex justify-content-start align-items-center ps-0 pe-0"
          >
            <a href="#">
              <span className="logo-container">
                <img src={logo} />
              </span>
              
            </a>
          </Col>
          <Col xs={8} className="d-flex justify-content-center align-items-center d-none d-md-block">
            <Menu /> 
          </Col>
          <Col
            xs={2}
            className="d-flex justify-content-end align-items-center ps-0 pe-0"
          >
            <span
              onClick={handleShow}
              className="d-inline-block d-md-none"
              style={{ cursor: "pointer" }}
            >
              <BurgerIcon width={24} height={24} />
            </span>
          </Col>
        </Row>
      </Container>
      <HeaderCanvas show={show} handleClose={handleClose} />
    </div>
  );
};

export default Upword;
