import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";


import "./Plashka.css";

const Plashka = ({ icon, text, gap }) => {
  return (
    <Card className={clsx(["plashka-card", gap && "plashka-gap"])}>
        <Card.Body className="d-flex justify-content-center align-items-center flex-md-column">
        <span className="plashka-icon">
          {icon}
        </span>
        <Card.Text className="textPrimary plashka-text text-start text-md-center">
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Plashka.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    gap: PropTypes.bool
  };

export default Plashka;
