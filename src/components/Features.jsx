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
            xs={12}
            // className="d-flex align-items-center justify-content-center"
          >
            <ul className="list d-flex align-items-start justify-content-start flex-column flex-sm-row">

              <li className="list-item d-flex align-items-center justify-content-center flex-row flex-sm-column flex-md-row">
                <RoundIcon icon={<ClockwiseIcon />} />
                <span className="text-white text-start text-sm-center text-md-start">
                  <span className="small light">Розробка займає до</span>{" "}
                  <span className="small light">2 місяців</span>
                </span>
              </li>

              <li className="list-item d-flex align-items-center justify-content-center flex-row flex-sm-column flex-md-row">
              <RoundIcon icon={<UsersThreeIcon />} />
                <span className="text-white text-start text-sm-center text-md-start">
                <span className="small light">Кваліфікована</span>{" "}
                  <span className="small light">команда спеціалістів</span>
                </span>
              </li>

              <li className="list-item d-flex align-items-center justify-content-center flex-row flex-sm-column flex-md-row">
              <RoundIcon icon={<LogisticIcon />} />
                <span className="text-white text-start text-sm-center text-md-start">
                <span className="small light">Логічна</span>{" "}
                  <span className="small light">структура платформи</span>
                </span>
              </li>

              <li className="list-item d-flex align-items-center justify-content-center flex-row flex-sm-column flex-md-row">
              <RoundIcon icon={<ShieldIcon />} />
                <span className="text-white text-start text-sm-center text-md-start">
                <span className="small light">Висока</span>{" "}
                  <span className="small light">безпека даних</span>
                </span>
              </li>
            </ul>





            
            {/* <ListGroup
              // variant="flush"
              horizontal
              className="d-flex flex-column flex-sm-row"
            >
              <ListGroup.Item
                as="li"
                className="border-0 p-0 m-2 text-center text-white d-flex flex-column flex-sm-row"
                style={{ backgroundColor: "#131415" }}
              >
                <RoundIcon icon={<ClockwiseIcon />} />
                <span>
                  <span className="small light">Розробка займає до</span>{" "}
                  <span className="small light">2 місяців</span>
                </span>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="border-0 p-0 m-2 text-center text-white d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#131415" }}
              >
                <RoundIcon icon={<UsersThreeIcon />} />
                <span>
                  <span className="small light">Кваліфікована</span>{" "}
                  <span className="small light">команда спеціалістів</span>
                </span>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="border-0 p-0 m-2 text-center text-white d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#131415" }}
              >
                <RoundIcon icon={<LogisticIcon />} />
                <span>
                  <span className="small light">Логічна</span>{" "}
                  <span className="small light">структура платформи</span>
                </span>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="border-0 p-0 m-2 text-center text-white d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#131415" }}
              >
                <RoundIcon icon={<ShieldIcon />} />
                <span>
                  <span className="small light">Висока</span>{" "}
                  <span className="small light">безпека даних</span>
                </span>
              </ListGroup.Item>
            </ListGroup> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
