import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import { ReactComponent as Face } from "../assets/images/icons/facebook.svg";
import { ReactComponent as In } from "../assets/images/icons/linkedin.svg";
import BriefModal from "./BriefModal";
import BriefCanvas from "./BriefCanvas";
import RoundIcon from "../elements/Round";

const HeaderCanvasBody = () => {
  const [show, setShow] = React.useState(false);
  const [showBrief, setShowBrief] = React.useState(false);
  const handleCloseBrief = () => setShowBrief(false);
  const handleShowBrief = () => setShowBrief(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  return (
    <>
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={2}
            className="d-flex justify-content-center flex-md-column"
          >
            <div className="d-none d-md-flex">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="d-inline-block footer-icon-one"
              >
                <RoundIcon icon={<Face />} radius={11} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="d-inline-block"
              >
                <RoundIcon icon={<In />} radius={11} />
              </a>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6}>
            <ul className="footer-list first-list" style={{ minHeight: 128 }}>
              <li className="footer-list-item small normal">
                <a href="#demand">
                  <span className="text-white">Для кого сервіс</span>
                </a>
              </li>
              {/* check */}
              <li className="footer-list-item small normal">
                <a href="#tariffs">
                  <span className="text-white">Тарифи</span>
                </a>
              </li>
              <li className="footer-list-item small normal">
                <a href="#faq">
                  <span className="text-white">Найчастіші питання</span>
                </a>
              </li>
              <li className="footer-list-item small normal">
                <a href="#contacts">
                  <span className="text-white">Контакти</span>
                </a>
              </li>
            </ul>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={4}
            className="d-flex justify-content-center d-md-none"
          >
            <div className="refs">
              <a
                href="https://www.facebook.com/ICC.MSP/"
                target="_blank"
                rel="noreferrer"
                className="d-inline-block footer-icon-one"
              >
                <RoundIcon icon={<Face />} radius={11} />
              </a>

              <a
                href="https://www.linkedin.com/company/ioc-gov-ua/"
                target="_blank"
                rel="noreferrer"
                className="d-inline-block"
              >
                <RoundIcon icon={<In />} radius={11} />
              </a>
            </div>
          </Col>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="d-flex flex-column flex-md-row btnsMargin">
              <Button
                variant="primary btn-large"
                className="btn1Margin"
                onClick={handleShowBrief}
              >
                Заповнити бриф
              </Button>
              {/* finish */}
              <Button
                href="#apply"
                variant="outline-primary btn-large"
                className="btn2Margin"
              >
                Залишити заявку
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <BriefModal show={show} handleClose={handleClose} />
      <BriefCanvas show={showBrief} handleClose={handleCloseBrief} />
    </>
  );
};

export default HeaderCanvasBody;
