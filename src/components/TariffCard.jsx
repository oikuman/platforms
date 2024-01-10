import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./TariffCard.css";

import { ReactComponent as Tick } from "../assets/images/icons/Tick.svg";

const TariffCard = ({ title, item }) => {
  
  const orderEmail = () => {
    const subject = "Реєстр: Замовлення тарифу";
    const body = `Замовлення тарифу ${title}%0D%0AРеквізити організації:%0D%0A`;
    
    let a = document.createElement("a");
    a.href = `mailto:office@ioc.gov.ua?subject=${subject}&body=${body}`;
    a.click();
    a.remove();
  };
  
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
          </div>

          <div className="d-grid">
            <Button variant="primary" onClick={orderEmail}>Замовити</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

TariffCard.propTypes = {
  title: PropTypes.string,
  item: PropTypes.object,
};

export default TariffCard;
