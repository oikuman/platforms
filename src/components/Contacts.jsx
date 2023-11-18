import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import "./contacts.css";

import { ReactComponent as Icon1 } from "../assets/images/icons/icon1.svg";
import { ReactComponent as Icon2 } from "../assets/images/icons/icons2.svg";
import { ReactComponent as Icon3 } from "../assets/images/icons/icons3.svg";
import { ReactComponent as Icon4 } from "../assets/images/icons/icon4.svg";

import ContactMap from "./ContactMap";

const Contacts = () => {
  return (
    <>
      <section id="contacts" className="contacts">
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              className="d-flex justify-content-center"
            >
              <Container>
                <Row>
                  <Col xs={12}>
                    <h2 className="headDark text-center">Наші контакти</h2>
                  </Col>
                  <Col xs={12}>
                    <ListGroup variant="flush" className="contact-list">
                      <ListGroup.Item className="border-0">
                        <Icon1 />
                        <span className="contact-item">(044)-494-19-10</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <Icon2 />
                        <span className="contact-item">office@ioc.gov.ua</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <Icon3 />
                        <span className="contact-item">
                          callcenter@ioc.gov.ua
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <Icon4 />
                        <span className="contact-item">
                          вул. Вацлава Гавела, 3, м. Київ, 03035, Україна
                        </span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              className="d-flex justify-content-center justify-content-md-start"
            >
              <ContactMap />
              {/* <div className="mapouter d-flex justify-content-center contact-map">
                <div className="gmap_canvas">
                  <iframe
                    src="https://maps.google.com/maps?q=kyiv&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    style={{ width: 470, height: 400 }}
                  ></iframe>

                  {/* <style>.mapouter{position:relative;height:400px;width:470px;background:#fff;}</style>

                  <a href="https://blooketjoin.org" style="color:#fff !important; position:absolute !important; top:0 !important; z-index:0 !important;">blooket join</a><style>.gmap_canvas{overflow:hidden;height:400px;width:470px}.gmap_canvas iframe{position:relative;z-index:2}</style>
                </div> 
              </div>*/}
            </Col>
            <Col xs={12} sm={12}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contacts;
