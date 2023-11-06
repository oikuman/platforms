import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TariffCard from "./TariffCard";

const Tariffs = () => {
  return (
    <>
      <Container id="tariffs" >
        <Row>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <h2 className="text-center">
              <span>Тарифні плани</span>
            </h2>
          </Col>
          <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            <p className="text-center">
              <span>які підійдуть для кожної команди</span>
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            className="mt-3 d-flex justify-content-center align-items-center"
          >
            <TariffCard title="Персональний" />
          </Col>
          <Col
            xs={12}
            sm={12}
            className="mt-3 d-flex justify-content-center align-items-center"
          >
            <TariffCard title="Стандартний" />
          </Col>
          <Col
            xs={12}
            sm={12}
            className="mt-3 d-flex justify-content-center align-items-center"
          >
            <TariffCard title="Професійний" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tariffs;
