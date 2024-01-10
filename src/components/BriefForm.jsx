import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./BriefForm.css";

const BriefForm = () => {
  return (
    <>
      <p className="text-center form-title">Бриф</p>
      <Form className="">
        <Row>
          <Col xl={12} sm={12} md={6}>
            <Form.Group className="form-input" controlId="formName">
              <Form.Label className="form-label">ПІБ</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="form-input" controlId="formPhone">
              <Form.Label className="form-label">Контактний телефон</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group className="form-input" controlId="formEmail">
              <Form.Label className="form-label">Електронна пошта</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="form-input" controlId="formOrg">
              <Form.Label className="form-label">Назва оргагізації</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="form-input-last" controlId="formLink">
              <Form.Label className="form-label">Посилання на сайт</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xl={12} sm={12} md={6}>
            <Form.Group className="form-input" controlId="formField">
              <Form.Label className="form-label">
                Напрям діяльності організації
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="form-input" controlId="formRegister">
              <Form.Label className="form-label">Вид реєстру</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="form-input" controlId="formTerm">
              <Form.Label className="form-label">Строки виконання</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="" controlId="formComment">
              <Form.Label className="form-label">Додаткова інформація</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default BriefForm;
