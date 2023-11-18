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

import "./Advantages.css";

const Advantages = () => {
  return (
    <>
    <section className="section">
      <Container>
        <Row>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <h2 className="text-center">
              <span className="headBlue">Переваги платформи</span><br/>
              <span className="headDark">для державних реєстрів</span>
            </h2>
          </Col>
          <Col
            xs={12}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <ListGroup variant="flush">
              <ListGroup.Item style={{ border: "none" }}>
                <CompIcon /> Сучаcний стек технологій
              </ListGroup.Item>
              <ListGroup.Item>
                <CodeIcon /> Low Code підхід
              </ListGroup.Item>
              <ListGroup.Item>
                <PuzzleIcon />
                Конструктори моделей даних, API, форм, бізнес процесів
              </ListGroup.Item>
              <ListGroup.Item>
                <UserIcon />
                Кабінет громадянина та Кабінет посадової особи
              </ListGroup.Item>
              <ListGroup.Item>
                <CardIcon />
                Шифрування даних
              </ListGroup.Item>
              <ListGroup.Item>
                <GitForkIcon />
                Ізоляція даних від адміністратора
              </ListGroup.Item>
              <ListGroup.Item>
                <ChartIcon />
                Open Source компоненти
              </ListGroup.Item>
              <ListGroup.Item>
                <DateIcon />
                Хмарна або «залізна» інфраструктура
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col
            xs={12}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Image src={diag} className="adv-image" />
          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
};

export default Advantages;
