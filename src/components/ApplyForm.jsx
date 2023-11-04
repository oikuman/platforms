import React from "react";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./ApplyForm.css";

const ApplyForm = () => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} sm={8} md={4}>
            <Card className="shadow card">
              <Card.Body>
                <div className="mb-3 mt-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-center">
                    Форма заявки
                  </h2>
                  <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Назва організації
                      </Form.Label>
                      <Form.Control type="text" placeholder="Організація" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEma">
                      <Form.Label className="text-center">Телефон</Form.Label>
                      <Form.Control type="text" placeholder="+380" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmai">
                      <Form.Label className="text-center">
                        Електронна пошта
                      </Form.Label>
                      <Form.Control type="email" placeholder="email@mail.com" />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Відправити
                      </Button>
                    </div>
                    
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ApplyForm;
