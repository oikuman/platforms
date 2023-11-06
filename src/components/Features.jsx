import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoundIcon from "../elements/Round";
import ListGroup from "react-bootstrap/ListGroup";
import "./Features.css";

import {
  ClockwiseIcon,
  UsersThreeIcon,
  LogisticIcon,
  ShieldIcon,
} from "./WhiteIcons";

const Features = () => {
  return (
    <div className="features mt-5 mb-5">
      <Container>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <ListGroup
              // variant="flush"
              horizontal
              // className="d-flex justify-content-around"
            >
              <ListGroup.Item
                as="li"
                className="border-0 p-0 m-2 text-center text-white d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#131415" }}
              >
                <RoundIcon icon={<ClockwiseIcon />} />
                <span>
                <span className="ms-2">Розробка займає до</span>{" "}
                <span>2 місяців</span>
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="border-0 p-0 m-2 text-center text-white d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#131415" }}
              >
                <RoundIcon icon={<UsersThreeIcon />} />
                <span>
                <span className="ms-2">Кваліфікована</span>{" "}
                <span>команда спеціалістів</span>
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="border-0 p-0 m-2 text-center text-white d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#131415" }}
              >
                <RoundIcon icon={<LogisticIcon />} />
                <span>
                <span className="ms-2">Логічна</span>{" "}
                <span>структура платформи</span>
                </span>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="border-0 p-0 m-2 text-center text-white d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#131415" }}
              >
                <RoundIcon icon={<ShieldIcon />} />
                <span>
                <span className="ms-2">Висока</span>{" "}<span>безпека даних</span>
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
