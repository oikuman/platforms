import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
// import Round from "../elements/Round";
import { LogisticIcon } from "./WhiteIcons";
import PropTypes from 'prop-types';

const RoundTip = styled.span`
  background-color: #116dd8;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: fit-content;
`;

const InsideTip = styled.span`
  padding: 0px;
  margin: 0px;
  line-height: 1rem;
`;

const RoundIcon = ({icon}) => {
return (<RoundTip 
// onClick={() => alert("hello")}
>
<InsideTip>{icon}</InsideTip>
</RoundTip>)
};

RoundIcon.propTypes = {
  icon: PropTypes.element,
}

const Faq = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="mt-3">
            <h2 className="text-center">Найчастіші питання</h2>

            <div>
              
              <RoundIcon icon={<LogisticIcon/>} />
            </div>

            <Accordion
              flush
              // defaultActiveKey="0"
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Відповідно до частини 1 статті 5 Закону України «Про
                  електронні документи та електронний документообіг» від 22
                  травня 2003 року № 851-IV електронний документ — це документ,
                  інформація в якому зафіксована у вигляді електронних даних,
                  включаючи обов’язкові реквізити документа. Частиною 1 статті 6
                  даного Закону встановлено, що накладанням електронного підпису
                  завершується створення електронного документа. Відповідно,
                  одним з найважливіших реквізитів електронного документа, після
                  чого він отримує статус документа, є накладений на нього
                  електронний підпис.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
