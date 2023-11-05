import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TariffCard from './TariffCard';

const Tariffs = () => {
    return (
        <>
        <Container>
        <Row>
          <Col xs={12} sm={12} className="d-flex justify-content-center align-items-center">
            <TariffCard />
          </Col>
          </Row>
      </Container>
        </>
    );
}

export default Tariffs;