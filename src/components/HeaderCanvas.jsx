import React from "react";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import HeaderCanvasBody from "./HeaderCanvasBody";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo_sm.png";

import "./HeaderCanvas.css";

const HeaderCanvas = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas
        backdrop={false}
        show={show}
        onHide={handleClose}
        placement="top"
        style={{ height: "100vh" }}
        backdropClassName="canvas"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <div className="d-flex flex-column justify-content-center align-items-center">
              {/* <a href="#" className="footer-logo-ref"> */}
                <Image src={logo} className="footer-logo" alt="logo" />
              {/* </a> */}
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <HeaderCanvasBody />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

HeaderCanvas.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default HeaderCanvas;
