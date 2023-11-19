import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BriefForm = () => {
  return (
    <>
      <h4 className="text-center">Бриф</h4>
      <Form className="">
        <Row>
          <Col xl={12} sm={12} md={6}>
            <Form.Group className="" controlId="formName">
              <Form.Label className="">ПІБ</Form.Label>
              <Form.Control type="text" placeholder="Ваше ім'я" />
            </Form.Group>

            <Form.Group className="" controlId="formPhone">
              <Form.Label className="">Контактний телефон</Form.Label>
              <Form.Control type="number" placeholder="+380" />
            </Form.Group>

            <Form.Group className="" controlId="formEmail">
              <Form.Label className="">Електронна пошта</Form.Label>
              <Form.Control type="email" placeholder="email@mail.com" />
            </Form.Group>

            <Form.Group className="" controlId="formOrg">
              <Form.Label className="">Назва оргагізації</Form.Label>
              <Form.Control type="text" placeholder="Організація" />
            </Form.Group>

            <Form.Group className="" controlId="formLink">
              <Form.Label className="">Посилання на сайт</Form.Label>
              <Form.Control type="text" placeholder="https://" />
            </Form.Group>
          </Col>
          <Col xl={12} sm={12} md={6}>
            <Form.Group className="" controlId="formField">
              <Form.Label className="">
                Напрям діяльності організації
              </Form.Label>
              <Form.Control type="text" placeholder="Ваш напрям" />
            </Form.Group>

            <Form.Group className="" controlId="formRegister">
              <Form.Label className="">Вид реєстру</Form.Label>
              <Form.Control type="text" placeholder="Обрати з запропонованих" />
            </Form.Group>

            <Form.Group className="" controlId="formTerm">
              <Form.Label className="">Строки виконання</Form.Label>
              <Form.Control type="text" placeholder="Обрати дату" />
            </Form.Group>

            <Form.Group className="" controlId="formComment">
              <Form.Label>Додаткова інформація</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Ваш коментар" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default BriefForm;
