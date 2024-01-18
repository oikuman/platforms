import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import "./Plashka.css";

const Plashka = ({ icon, text, gap }) => {
  return (
    <Card 
    className={clsx({"plashka-card": true, "plashka-gap": gap!="last", "plashka-bottom": gap==="right"})}
    >
        <Card.Body className="d-flex justify-content-start align-items-center flex-md-column" style={{padding: 0, border: 0, margin: 0}}>
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
    gap: PropTypes.string
  };

export default Plashka;
