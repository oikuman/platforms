import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ApplyForm from "./ApplyForm";

const Applications = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <h2 className="text-center">
              <span>Залишіть заявку</span>
              <br />
              <span>та дізнайтесь більше про Платформу реєстрів</span>
            </h2>
          </Col>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <p className="text-center">
              <span>
                Наша команда менеджерів зв’яжеться з вами протягом 3 днів
              </span>
            </p>
          </Col>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <ApplyForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Applications;
