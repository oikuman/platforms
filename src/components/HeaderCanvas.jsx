import React from "react";
import { Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import HeaderCanvasBody from "./HeaderCanvasBody";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/LOGO_white.svg";

import "./HeaderCanvas.css";

const HeaderCanvas = ({ show, handleClose }) => {
  return (
    <>
      <Container>
        <Offcanvas
          backdrop={false}
          show={show}
          onHide={handleClose}
          placement="top"
          style={{ height: "100vh" }}
          className="header-canvas"
          // backdropClassName="canvas"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Image src={logo} className="header-canvas-logo" alt="logo" />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <HeaderCanvasBody />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
};

HeaderCanvas.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default HeaderCanvas;
