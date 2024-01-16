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

import "./Faq.css";
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
    head: "Що таке Платформа реєстрів?",
    text: "Платформа реєстрів — це інструмент, який спрощує процес надання послуг у цифровому форматі. Вона дозволяє ефективно створювати, вдосконалювати та впроваджувати електронні реєстри, щоб організація могла швидко та легко використувувати дані. Основна мета платформи — забезпечити надійний захист даних, швидке впровадження нових сервісів, економію витрат на утримання реєстрів і покращення обміну інформацією між різними системами та реєстрами.",
  },
  {
    id: "1",
    head: "Які переваги використання Платформи?",
    text: "Платформа дає можливість створювати реєстри, де замовник, за необхідністю, має можливість надавати ролі користувачам з обмеженими доступами до даних. Такий децентралізований підхід гарантує, що власник реєєстру має повний контроль над тим, як його дані використовуються.",
  },
];

const Faq = () => {
  return (
    <>
      <section id="faq" className="faq-section">
        <Container>
          <Row>
            <Col xs={12} sm={12} className="d-flex justify-content-center">
              <h2 className="faq-head text-center">
                <span className="headDark">Найчастіші питання</span>
              </h2>
            </Col>

            <Col xs={12} sm={12} md={12} className="">
              <Accordion defaultActiveKey="0">
                {array.length > 0 &&
                  array.map(({ id, head, text }) => (
                    <Card key={id} className="faq-card border-0">
                      <Card.Header className="faq-card-head d-flex justify-content-between align-items-center border-0">
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
