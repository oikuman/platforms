import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Upword from "./Upword";
import BriefModal from "./BriefModal";
import BriefCanvas from "./BriefCanvas";
import "./Start2.css";

const SpanOne = styled.span`
  color: #116dd8;
`;

const SpanTwo = styled.span`
  color: #131415;
`;

// const CommOne = styled.span`
//   color: #323336;
//   margin-bottom: 10px;
// `;

// const CommTwo = styled.span`
//   color: #323336;
// `;

const Start2 = () => {
  const [show, setShow] = React.useState(false);
  const [showBrief, setShowBrief] = React.useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleCloseBrief = () => setShowBrief(false);
  const handleShowBrief = () => setShowBrief(true);

  return (
    <>
      <header className="banner">
        <Container className="ms-0 me-0 ps-0 pe-0">
          <Row className="ms-0 me-0 ps-0 pe-0">
            <Col xs={12} className="ps-0 pe-0">
              <Upword />
            </Col>
            <Col xs={12} className="d-flex justify-content-center ps-0 pe-0">
              <h1 className="h1 text-center marginTitle">
                <SpanOne>Платформи реєстрів</SpanOne> <SpanTwo>—</SpanTwo>
                <br />
                <SpanTwo>фундамент цифрової держави</SpanTwo>
              </h1>
            </Col>
            <Col xs={12} className="d-flex justify-content-center ps-0 pe-0">
              <p className="text-center marginComment">
                <span className="normal medium" style={{marginBottom: "10px !important", color: '#323336'}}>
                Забудь про паперові реєстри та обмеженість Excle-таблиць!
                </span>
                <span className="normal light newLine" style={{ color: '#323336'}}>
                Наші технологічні та інноваційні рішення дозволять вам оптимізувати свої дані та впроваджувати цифрові послуги завдяки обмінам між системами. Довірте нам розробку сучасного реєстру для ефективної роботи та розвитку цифрової держави.
                </span>
              </p>
            </Col>
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center ps-0 pe-0"
            >
              <div className="d-flex flex-column flex-md-row btnsMargin btns-width" >
                <Button variant="primary btn-large" className="btn1Margin" 
                onClick={handleShowBrief}
                >
                  Заповнити бриф
                </Button>
                {/* <Button variant="primary btn-large" className="btn1Margin" onClick={handleShowBrief}>
                  canvas
                </Button> */}
                {/* finish */}
                <Button
                  href="#apply"
                  variant="outline-primary btn-large"
                  className="btn2Margin"
                >
                  Залишити заявку
                </Button>
              </div>
            </Col>
            {/* <Col xs={12} sm={6} className="d-flex justify-content-center"></Col> */}
          </Row>
        </Container>
      </header>
      <BriefModal show={show} handleClose={handleClose}/>
      <BriefCanvas show={showBrief} handleClose={handleCloseBrief} />
    </>
  );
};

export default Start2;
