import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
// import { Button } from "react-bootstrap";
// import Round from "../elements/Round";
import { ReactComponent as Plus } from "../assets/images/icons/Plus.svg";
import { ReactComponent as Minus } from "../assets/images/icons/Minus.svg";

import RoundIcon from "../elements/Round";

const Faq = () => {
  return (
    <>
      <Container id="faq" style={{ marginBottom: 70 }}>
        <Row>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <h2 style={{marginBottom: "50px !important"}}>
              <span className="text-center headDark" >Найчастіші питання</span>
            </h2>
          </Col>

          <div>
          <RoundIcon icon={<Plus width={16} height={16} />} radius={8} onClick={()=>alert("hello")}/>
              <RoundIcon icon={<Minus width={16} height={16} />} radius={8} />
          </div>

          <Col xs={12} sm={12} md={12}>
              <Accordion flush defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Що таке платформа реєстрів?
                  </Accordion.Header>
                  <Accordion.Body>
                    Відповідно до частини 1 статті 5 Закону України «Про
                    електронні документи та електронний документообіг» від 22
                    травня 2003 року № 851-IV електронний документ — це
                    документ, інформація в якому зафіксована у вигляді
                    електронних даних, включаючи обов’язкові реквізити
                    документа. Частиною 1 статті 6 даного Закону встановлено, що
                    накладанням електронного підпису завершується створення
                    електронного документа. Відповідно, одним з найважливіших
                    реквізитів електронного документа, після чого він отримує
                    статус документа, є накладений на нього електронний підпис.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Як довго розробляється реєстр для установи?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Як проходить реєстрація у державному реєстрі?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Як забезпечується безпека даних?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Наскільки вигідно користуватися державним реєстром?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
