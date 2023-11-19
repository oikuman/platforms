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
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={12} md={8} lg={12} className="p-0">
            <Card className="apply-card">
              <Card.Body className="apply-body">
                  <p className="text-center apply-title">
                    Форма заявки
                  </p>
                  <Form className="ms-0 me-0">
                    <Form.Group className="mb-3" controlId="applyName">
                      <Form.Label className="text-center">
                        Назва організації
                      </Form.Label>
                      <Form.Control type="text" placeholder="Організація" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="applyPhone">
                      <Form.Label className="text-center">Телефон</Form.Label>
                      <Form.Control type="number" placeholder="+380" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="applyEmail">
                      <Form.Label className="text-center">
                        Електронна пошта
                      </Form.Label>
                      <Form.Control type="email" placeholder="email@mail.com" />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Відправити заявку
                      </Button>
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
