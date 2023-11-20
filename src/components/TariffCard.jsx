import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./TariffCard.css";

import { ReactComponent as Tick } from "../assets/images/icons/Tick.svg";

const TariffCard = ({ title, item, price  }) => {
  const { text } = item;
  return (
    <>
      <Card className="tariff">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="tariff-card-body">
          <p className="text-center tariff-title">{title}</p>
          <div
            className="d-flex flex-column justify-content-between"
            style={{ minHeight: 400 }}
          >
            <div>
              {text.length > 0 &&
                text.map(({ id, text }) => {
                  return (
                    <div key={id} className="tick-line d-flex align-items-center">
                      <span className="tick">
                        <Tick />
                      </span>
                      <span className="small light textPrimary">{text}</span>
                    </div>
                  );
                })}
            </div>
            <div className="text-center" style={{marginBottom: 30}}>
              <span className="h1">${price}</span>
              <span className="tariff-price-tip textPrimary">/ міс</span>
            </div>
          </div>

          <div className="d-grid">
            <Button variant="primary">Замовити</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

TariffCard.propTypes = {
  title: PropTypes.string,
  item: PropTypes.object,
  price: PropTypes.string
};

export default TariffCard;
