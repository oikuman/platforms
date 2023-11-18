import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Applications.css";

import ApplyForm from "./ApplyForm";

const Applications = () => {
  return (
    <>
    <section id="apply" className="section applications-section">
      <Container className="m-0 p-0">
        <Row className="m-0 ps-3 pe-3 ps-lg-7 pe-lg-7">
          <Col xs={12} sm={12} lg={4} className="d-flex flex-column justify-content-center justify-content-lg-start ps-0 pe-0">
            <h2 className="text-center">
              <span className="headBlue">Залишіть заявку</span>
              <br />
              <span className="headDark">та дізнайтесь більше про Платформу реєстрів</span>
            </h2>
            <p className="text-center">
              <span className="textPrimary">
                Наша команда менеджерів зв’яжеться з вами протягом 3 днів
              </span>
            </p>
          </Col>
          {/* <Col xs={12} sm={12} lg={8} className="mt-3 d-flex justify-content-center">
            
          </Col> */}
          <Col xs={12} sm={12} lg={8} className="mt-3 d-flex justify-content-center ps-0 pe-0">
            <ApplyForm />
          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
};

export default Applications;
