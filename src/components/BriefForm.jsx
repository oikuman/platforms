import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./BriefForm.css";

const BriefForm = ({ handleInput, handleSubmit, state }) => {
  const { pib, phone, email, name, site, branch, kind, term, comment } = state;

  return (
    <>
      <p className="text-center form-title">Бриф</p>
      <Form id='brief-form' className="" onSubmit={handleSubmit}>
        <Row>
          <Col xl={12} sm={12} md={6}>
            <Form.Group className="form-input" controlId="formName">
              <Form.Label className="form-label">ПІБ</Form.Label>
              <Form.Control
                type="text"
                name="pib"
                value={pib}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="form-input" controlId="formPhone">
              <Form.Label className="form-label">Контактний телефон</Form.Label>

              <Form.Control
                type="text"
                name="phone"
                value={phone}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="form-input" controlId="formEmail">
              <Form.Label className="form-label">Електронна пошта</Form.Label>

              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="form-input" controlId="formOrg">
              <Form.Label className="form-label">Назва організації</Form.Label>

              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="form-input-last" controlId="formLink">
              <Form.Label className="form-label">Посилання на сайт</Form.Label>

              <Form.Control
                type="text"
                name="site"
                value={site}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
          <Col xl={12} sm={12} md={6}>
            <Form.Group className="form-input" controlId="formField">
              <Form.Label className="form-label">
                Напрям діяльності організації
              </Form.Label>

              <Form.Control
                type="text"
                name="branch"
                value={branch}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="form-input" controlId="formRegister">
              <Form.Label className="form-label">Вид реєстру</Form.Label>

              <Form.Control
                type="text"
                name="kind"
                value={kind}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="form-input" controlId="formTerm">
              <Form.Label className="form-label">Строки виконання</Form.Label>

              <Form.Control
                type="text"
                name="term"
                value={term}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="" controlId="formComment">
              <Form.Label className="form-label">
                Додаткова інформація
              </Form.Label>

              <Form.Control
                as="textarea"
                rows={5}
                name="comment"
                value={comment}
                onChange={handleInput}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

BriefForm.propTypes = {
  state: PropTypes.object,
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default BriefForm;
