import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";

const MockGrid = ({ card1, card2, card3 }) => {
  return (
    <>
      <Col
        xs={12}
        sm={12}
        md={4}
        lg={4}
        className="d-flex justify-content-center ps-0 pe-0 ps-md-3 pe-md-3 petarif-card-gap"
      >
        {card1}
      </Col>
      <Col
        xs={12}
        sm={12}
        md={4}
        lg={4}
        className="d-flex flex-column justify-content-center ps-0 pe-0 ps-md-3 pe-md-3 tarif-card-gap"
      >
        {card2}
      </Col>
      <Col
        xs={12}
        sm={12}
        md={4}
        lg={4}
        className="d-flex flex-column justify-content-center ps-0 pe-0 ps-md-3 pe-md-3"
      >
        {card3}
      </Col>
    </>
  );
};

MockGrid.propTypes = {
    card1: PropTypes.element,
    card2: PropTypes.element,
    card3: PropTypes.element,
};

export default MockGrid;
