import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import diag from "../assets/images/jpg/img.jpg";
import {
  CompIcon,
  CodeIcon,
  PuzzleIcon,
  UserIcon,
  CardIcon,
  GitForkIcon,
  ChartIcon,
  DateIcon,
} from "./DarkIcons";

const Advantages = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <h2>
              <span>Переваги платформи</span>{" "}
              <span>для державних реєстрів</span>
            </h2>
          </Col>
          <Col
            xs={12}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <ListGroup variant="flush">
              <ListGroup.Item style={{ border: "none" }}>
                <CompIcon /> Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item>
                <CodeIcon /> Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item>
                <PuzzleIcon />
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item>
                <UserIcon />
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item>
                <CardIcon />
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item>
                <GitForkIcon />
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item>
                <ChartIcon />
                НЕ Чекали
              </ListGroup.Item>
              <ListGroup.Item>
                <DateIcon />
                Porta ac consectetur ac
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col
            xs={12}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Image src={diag} rounded />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Advantages;
