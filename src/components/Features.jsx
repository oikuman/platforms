import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Round from "../elements/Round";

import {
  ClockwiseIcon,
  UsersThreeIcon,
  LogisticIcon,
  ShieldIcon,
} from "./WhiteIcons";

const Features = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="mt-3">
            <div style={{ backgroundColor: "#131415" }}>
              {Round(ClockwiseIcon)}
              {Round(<UsersThreeIcon />)}
              {Round(<LogisticIcon />)}
              {Round(<ShieldIcon />)}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
