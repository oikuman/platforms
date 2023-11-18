import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TariffCard from "./TariffCard";

// import "./Tariff.css";

const Tariffs = () => {
  return (
    <>
      <section id="tariffs" className="section">
      <Container  >
        <Row>
          <Col xs={12} sm={12} className="d-flex flex-column justify-content-center">
            <h2 className="text-center">
              <span className="headDark">Тарифні плани</span>
            </h2>
            <br/>
            
            <p className="text-center">
              <span className="">які підійдуть для кожної команди</span>
            </p>
          </Col>
          {/* <Col xs={12} sm={12} className="mt-3 d-flex justify-content-center">
            
          </Col> */}
          <Col
            xs={12}
            sm={12}
            md={4}
            className="mt-3 d-flex justify-content-center align-items-center"
          >
            <TariffCard title="Персональний" />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            className="mt-3 d-flex justify-content-center align-items-center"
          >
            <TariffCard title="Стандартний" />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            className="mt-3 d-flex justify-content-center align-items-center"
          >
            <TariffCard title="Професійний" />
          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
};

export default Tariffs;
