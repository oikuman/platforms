import React from "react";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import Menu from "./Menu";

const HeaderCanvas = ({show, handleClose}) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu />
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
