import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoundIcon from "../elements/Round";
// import ListGroup from "react-bootstrap/ListGroup";
import "./Features.css";

import {
  ClockwiseIcon,
  UsersThreeIcon,
  LogisticIcon,
  ShieldIcon,
} from "./WhiteIcons";

const Features = () => {
  return (
    <section className="features">
      <Container>
        <Row>
          <Col
            xs={12} style={{padding: 0}}
            // className="d-flex align-items-center justify-content-center"
          >
            <ul className="list d-flex align-items-start justify-content-between flex-column justify-content-md-between flex-md-row justify-content-lg-between features-box">

              <li className="list-item d-flex align-items-center justify-content-center flex-row flex-md-column flex-lg-row">
                <RoundIcon icon={<ClockwiseIcon />} radius={12} />
                <span className="text-white text-start text-md-center text-lg-start features-margin small">
                  <span className="small light">Розробка займає</span><br/>
                  <span className="small light">до 2 місяців</span>
                </span>
              </li>

              <li className="list-item d-flex align-items-center justify-content-center flex-row flex-md-column flex-lg-row">
              <RoundIcon icon={<UsersThreeIcon />} radius={12} />
                <span className="text-white text-start text-md-center text-lg-start features-margin small">
                <span className="small light">Кваліфікована</span><br/>
                  <span className="small light">команда спеціалістів</span>
                </span>
              </li>

              <li className="list-item d-flex align-items-center justify-content-center flex-row flex-md-column flex-lg-row">
              <RoundIcon icon={<LogisticIcon />} radius={12} />
                <span className="text-white text-start text-md-center text-lg-start features-margin small">
                <span className="small light">Логічна</span>{" "}
                  <span className="small light">структура</span><br/><span className="small light">платформи</span>
                </span>
              </li>

              <li className="list-item d-flex align-items-center justify-content-center flex-row flex-md-column flex-lg-row">
              <RoundIcon icon={<ShieldIcon />} radius={12} />
                <span className="text-white text-start text-md-center text-lg-start features-margin small">
                <span className="small light">Висока</span>{" "}
                  <span className="small light">безпека</span><br/><span className="small light">даних</span>
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
