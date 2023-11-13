import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// import user1 from "../assets/images/photos/user1.png";

const FeedbackCard = ({ photoSrc }) => {
  return (
    <>
      <Card
        body
        style={{
          maxWidth: 328,
          minWidth: 328,
          border: "1px solid #D7D9DB",
          borderRadius: 20,
          padding: 16,
          margin: 10
        }}
      >
        <p className="small light">
          Відповідно, одним з найважливіших реквізитів електронного документа,
          після чого він отримує статус документа, є накладений на нього
          електронний підпис. З докладною інформацією щодо юридичного статусу та
          застосування електронних документів.
        </p>
        <div style={{ marginTop: 40 }} className="d-flex justify-content-start">
          <div>
            <Image src={photoSrc} roundedCircle />
          </div>
          <div
            style={{ marginLeft: 10 }}
            className="d-flex flex-column justify-content-around"
          >
            <p className="normal medium textPrimary">Стас Коротков</p>
            <p className="small light text-secondary">СЕО в Forpeople</p>
          </div>
        </div>
      </Card>
    </>
  );
};

FeedbackCard.propTypes = {
  photoSrc: PropTypes.string,
};

export default FeedbackCard;
