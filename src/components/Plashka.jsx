import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";


const Plashka = ({ icon }) => {
  return (
    <Card style={{ width: 300, height: 300}}>
        <Card.Body className="d-flex justify-content-center align-items-center flex-md-column">
        <span className="">
          {icon}
        </span>
        <Card.Text>
          Some quick example text to build on the card
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
};

Plashka.propTypes = {
    icon: PropTypes.element,
  };

export default Plashka;
