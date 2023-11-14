import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Tariff.css";

import { ReactComponent as Tick } from "../assets/images/icons/Tick.svg";

const TariffCard = ({ title }) => {
  return (
    <>
      <Card className="tariff" >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex flex-column justify-content-between" style={{ minHeight: 400 }}>
            <div>
              <Tick />
              <span>Create messages</span>
              <br />
              <Tick />
              <span>Manage conversations from email and chat</span>
              <br />
              <Tick />
              <span>View customer profiles</span>
              <br />
              <Tick />
              <span>View customer profiles</span>
              <br />
              <Tick />
              <span>View customer profiles</span>
              <br />
              <Tick />
              <span>View customer profiles</span>
              <br />
              <Tick />
              <span>View customer profiles</span>
            </div>
            <div>
              <span>$390</span>
              <span>/ міс</span>
            </div>
          </div>

          <Button variant="primary">Замовити</Button>
        </Card.Body>
      </Card>
    </>
  );
};

TariffCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TariffCard;
