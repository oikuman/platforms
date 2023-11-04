import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Tariff.css";

const TariffCard = () => {
  return (
    <>
      <Card id="tariff" className="tariff" style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default TariffCard;
