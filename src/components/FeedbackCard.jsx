import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./FeedbackCard.css";

const FeedbackCard = ({ photoSrc, text, title, subtitle }) => {
  return (
    <Card className="feedback-card">
      <Card.Body className="feedback-body">
        <p className="feedcard-text textPrimary">{text}</p>
        <div style={{ marginTop: 40 }} className="d-flex justify-content-start">
          <div className="d-flex flex-column justify-content-center">
            <Image src={photoSrc} roundedCircle className="" width={56} height={56} />
          </div>
          <div
            style={{ marginLeft: 16 }}
            className="d-flex flex-column justify-content-around"
          >
            <p className="normal medium textPrimary feedcard-title">{title}</p>
            <p className="small label textSecondary feedcard-subtitle">{subtitle}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

FeedbackCard.propTypes = {
  photoSrc: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default FeedbackCard;
