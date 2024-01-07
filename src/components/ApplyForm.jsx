import React from "react";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { ReactComponent as Icon1 } from "../assets/images/icons/sm/sm1.svg";
import { ReactComponent as Icon2 } from "../assets/images/icons/sm/sm2.svg";
import { ReactComponent as Icon3 } from "../assets/images/icons/sm/sm3.svg";

import "./ApplyForm.css";

const ApplyForm = () => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={12} md={8} lg={12} className="p-0">
            <Card className="apply-card">
              <Card.Body className="apply-body">
                <p className="text-center apply-title">Форма заявки</p>
                <Form className="ms-0 me-0">
                  <Form.Group className="mb-3" controlId="applyName">
                    <Form.Label className="text-center">
                      Назва організації
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="applyPhone">
                    <Form.Label className="text-center">Телефон</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="applyEmail">
                    <Form.Label className="text-center">
                      Електронна пошта
                    </Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <div className="d-grid" style={{marginBottom: 20}}>
                    <Button variant="primary" type="submit">
                      Відправити заявку
                    </Button>
                  </div>

                  <div className="d-flex flex-column align-items-center">
                    <p
                      className="text-center normal textPrimary"
                      style={{
                        lineHeight: "22.4px",
                        marginBottom: "10px !important",
                      }}
                    >
                      Зв’яжіться з нами зручним способом:
                    </p>
                    <div
                      className="d-flex justify-content-between"
                      style={{ maxWidth: 140, minWidth: 140 }}
                    >
                      <a
                        href="https://web.whatsapp.com/"
                        target="_blanc"
                        style={{ display: "inline-block" }}
                      >
                        <Icon3 />
                      </a>
                      <a
                        href="https://web.telegram.org/k/"
                        target="_blanc"
                        style={{ display: "inline-block" }}
                      >
                        <Icon2 />
                      </a>
                      <a
                        href="https://www.viber.com/ua/"
                        target="_blanc"
                        style={{ display: "inline-block" }}
                      >
                        <Icon1 />
                      </a>
                    </div>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ApplyForm;
