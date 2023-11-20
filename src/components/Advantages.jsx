import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";
// import Image from "react-bootstrap/Image";
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
          <Col xs={12} sm={12}>
                  <h2 className="text-center adv-head">
                    <span className="headMedium headBlue">
                      Переваги платформи
                    </span>
                    <br />
                    <span className="headMedium headDark">
                      для державних реєстрів
                    </span>
                  </h2>
                </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center"
            >
              <Row>
                
                <Col
                  xs={12}
                  sm={12}
                  className="d-flex justify-content-center align-items-center"
                >
                  <ListGroup variant="flush" className="adv-list">
                    <ListGroup.Item style={{ border: "none", display: 'flex', alignItems: 'center' }}>
                      <span className="adv-icon">
                        <CompIcon />
                      </span>
                      <span className="adv-tip">Сучаcний стек технологій</span>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: "none", display: 'flex', alignItems: 'center' }}>
                      <span className="adv-icon">
                        <CodeIcon />
                      </span>
                      <span className="adv-tip">Low Code підхід</span>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: "none", display: 'flex', alignItems: 'center' }}>
                      <span className="adv-icon">
                        <PuzzleIcon />
                      </span>
                      <span className="adv-tip">
                        Конструктори моделей даних, API, форм, бізнес процесів
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: "none", display: 'flex', alignItems: 'center' }}>
                      <span className="adv-icon">
                        <UserIcon />
                      </span>
                      <span className="adv-tip">
                        Кабінет громадянина та Кабінет посадової особи
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: "none", display: 'flex', alignItems: 'center' }}>
                      <span className="adv-icon">
                        <CardIcon />
                      </span>
                      <span className="adv-tip">Шифрування даних</span>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: "none", display: 'flex', alignItems: 'center' }}>
                      <span className="adv-icon">
                        <GitForkIcon />
                      </span>
                      <span className="adv-tip">
                        Ізоляція даних від адміністратора
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: "none", display: 'flex', alignItems: 'center' }}>
                      <span className="adv-icon">
                        <ChartIcon />
                      </span>
                      <span className="adv-tip">Open Source компоненти</span>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: "none", display: 'flex', alignItems: 'center' }}>
                      <span className="adv-icon">
                        <DateIcon />
                      </span>
                      <span className="adv-tip">
                        Хмарна або «залізна» інфраструктура
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Figure className="d-flex flex-column align-items-center align-items-lg-end justify-content-lg-end">
                <Figure.Image
                  className="adv-image"
                  alt="advantage image"
                  src={diag}
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Advantages;
