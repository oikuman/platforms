import React from "react";
import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import DatePicker from "react-bootstrap-date-picker";
// import { Button } from 'react-bootstrap';
import "./Buttons.css";

const Buttons = () => {
  return (
    <>
      <Container id="tariffs">
        <Row>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Text
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className={clsx(["form-control"])}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  disabled={false}
                />
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Ваш email"
                  className={clsx(["form-control", "email"])}
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  required
                  disabled={false}
                />
                <label htmlFor="example" className="form-label">
                  textarea
                </label>
                <textarea
                  id="example"
                  className="form-control"
                  aria-label="With textarea"
                  rows="5"
                ></textarea>
              </div>

              <div>
                <label htmlFor="start" className="form-label" disabled>Start date:</label>
                <input
                  className="form-control"
                  type="date"
                  id="start"
                  name="trip-start"
                //   value="2018-07-22"
                  defaultValue="2018-07-22"
                  min="2018-01-01"
                  max="2018-12-31"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
          <div style={{margin: 20}}>
          <button type="button" className="btn btn-primary">
            <span className="normal medium">Зв&apos;язатися</span>
            </button>
          </div >
          </Col>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
          <div style={{margin: 20}}>
          <button type="button" className="btn btn-outline-primary">
            <span className="normal medium">Заповнити бриф</span>
            </button>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Buttons;
