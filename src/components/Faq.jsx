import React, { useContext } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { ReactComponent as Plus } from "../assets/images/icons/Plus.svg";
import { ReactComponent as Minus } from "../assets/images/icons/Minus.svg";

import RoundIcon from "../elements/Round";

function ContextAwareToggle({ eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  const plus = (
    <RoundIcon
      icon={<Plus width={16} height={16} />}
      radius={8}
      onClick={decoratedOnClick}
    />
  );
  const minus = (
    <RoundIcon
      icon={<Minus width={16} height={16} />}
      radius={8}
      onClick={decoratedOnClick}
    />
  );
  return (
    <button
      type="button"
      className="btn btn-primary-outline"
      onClick={decoratedOnClick}
    >
      {isCurrentEventKey ? minus : plus}
    </button>
  );
}

ContextAwareToggle.propTypes = {
  eventKey: PropTypes.string,
  callback: PropTypes.func,
};

const array = [
  {
    id: "0",
    head: "Що таке платформа реєстрів?",
    text: "Відповідно до частини 1 статті 5 Закону України «Про електронні документи та електронний документообіг» від 22 травня 2003 року № 851-IV електронний документ — це    документ, інформація в якому зафіксована у вигляді електронних даних, включаючи обов’язкові реквізити документа. Частиною 1 статті 6 даного Закону встановлено, що   накладанням електронного підпису завершується створення електронного документа. Відповідно, одним з найважливіших реквізитів електронного документа, після чого він отримує статус документа, є накладений на нього електронний підпис.",
  },
  {
    id: "1",
    head: "Як довго розробляється реєстр для установи?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "2",
    head: "Як проходить реєстрація у державному реєстрі?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3",
    head: "Як забезпечується безпека даних?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "4",
    head: "Наскільки вигідно користуватися державним реєстром?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Faq = () => {
  return (
    <>
      <section className="section">
      <Container id="faq" style={{ marginBottom: 70 }}>
        <Row>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <h2 style={{ marginBottom: "50px !important" }} className="text-center">
              <span className="headDark">Найчастіші питання</span>
            </h2>
          </Col>

          <Col xs={12} sm={12} md={12} className="ps-3 pe-3 ps-lg-7 pe-lg-7">
            <Accordion defaultActiveKey="0">
              {array.length > 0 &&
                array.map(({ id, head, text }) => (
                  <Card key={id} className="border-0">
                    <Card.Header className="d-flex justify-content-between align-items-center border-0">
                      <span className="">{head}</span>
                      <ContextAwareToggle eventKey={id} />
                    </Card.Header>
                    <Accordion.Collapse eventKey={id}>
                      <Card.Body>
                        <span className="">{text}</span>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
};

export default Faq;
