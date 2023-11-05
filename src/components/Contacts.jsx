import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import { CompIcon, CodeIcon, PuzzleIcon, UserIcon } from "./DarkIcons";

const Contacts = () => {
  return (
    <>
      <Container id="contacts">
        <Row>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <h2>Наші контакти</h2>
          </Col>
          <Col xs={12} sm={12} className="d-flex justify-content-center">
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0">
                <CompIcon /> <span className="ms-2">(044)-494-19-10</span>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <CodeIcon /> office@ioc.gov.ua
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <PuzzleIcon />
                callcenter@ioc.gov.ua
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <UserIcon />
                вул. Вацлава Гавела, 3, м. Київ, 03035, Україна
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={12}>
            <div className="mapouter d-flex justify-content-center">
              <div className="gmap_canvas">
                <iframe
                  src="https://maps.google.com/maps?q=kyiv&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  style={{ width: 470, height: 400 }}
                ></iframe>

                {/* <style>.mapouter{position:relative;height:400px;width:470px;background:#fff;}</style> */}

                {/* <a href="https://blooketjoin.org" style="color:#fff !important; position:absolute !important; top:0 !important; z-index:0 !important;">blooket join</a><style>.gmap_canvas{overflow:hidden;height:400px;width:470px}.gmap_canvas iframe{position:relative;z-index:2}</style> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacts;
