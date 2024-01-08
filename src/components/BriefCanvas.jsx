import React from "react";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
// import HeaderCanvasBody from "./HeaderCanvasBody";
// import Image from "react-bootstrap/Image";
// import logo from "../assets/images/logo_sm.png";
import BriefForm from "./BriefForm";

import "./BriefCanvas.css";

const BriefCanvas = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas
        backdrop={false}
        show={show}
        onHide={handleClose}
        placement="top"
        style={{ height: "100vh" }}
        // className="briefcanvas"
        backdropClassName="briefcanvas"
      >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>
            <div className="d-flex flex-column justify-content-center align-items-center">
              {/* <a href="#" className="footer-logo-ref"> */}
              {/* <Image src={logo} className="footer-logo" alt="logo" /> */}
              {/* </a> */}
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <HeaderCanvasBody /> */}
          <BriefForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

BriefCanvas.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default BriefCanvas;
