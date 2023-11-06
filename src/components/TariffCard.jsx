import React from "react";
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Tariff.css";

const TariffCard = ({title}) => {
  return (
    <>
      <Card className="tariff" style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </Card.Text>
          <Button variant="primary">Замовити</Button>
        </Card.Body>
      </Card>
    </>
  );
};

TariffCard.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TariffCard;
