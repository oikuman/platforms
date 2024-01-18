import React from "react";
// import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import BriefCanvas from "./BriefCanvas";
import HeaderCanvas from "./HeaderCanvas";
import { ReactComponent as Burger } from "../assets/images/icons/20.svg";
import RoundIcon from "../elements/Round";

import logo from "../assets/images/LOGO_ioc.svg";
import Lang from "./Lang";

import "./MyNavBar.css";

const MyNavBar = () => {
  const [active, setActive] = React.useState();
  const [showBrief, setShowBrief] = React.useState(false);
  const handleCloseBrief = () => setShowBrief(false);
  const handleShowBrief = () => setShowBrief(true);
  const [show, setShow] = React.useState(false);
  // const [selected, setSelected] = React.useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (eventKey) => {
    setActive(eventKey);
  };

  return (
    <>
      <Container>
        {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
        <Navbar
          bg="white"
          data-bs-theme="light"
          // key={expand}
          // expand={expand}
          fixed="top"
          className="navbar-style"
        >
          <Container className="ps-0 pe-0">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Navbar.Brand href="#">
                <img src={logo} alt="logo" width={100} height={48} />
              </Navbar.Brand>
              <Nav activeKey={active} onSelect={handleSelect} className="d-none">
                <Nav.Link
                  eventKey="1"
                  href="#demand"
                  // className={clsx({ "nav-link": true, active: active === "1" })}
                >
                  Для кого
                </Nav.Link>
                <Nav.Link eventKey="2" href="#why">
                  Переваги
                </Nav.Link>
                <Nav.Link eventKey="3" href="#tariffs">
                  Тарифи
                </Nav.Link>
                <Nav.Link eventKey="4" href="#faq">
                  Питання
                </Nav.Link>
                <Nav.Link eventKey="5" href="#contacts">
                  Контакти
                </Nav.Link>
              </Nav>
              <div className="d-none"><Lang color="dark" /></div>
              
              {/* <span>Заповнити бриф</span> */}
              <Button variant="primary" className="d-none" onClick={handleShowBrief}>
                Заповнити бриф
              </Button>
              {/* <span>Відкрити меню</span> */}
              <span style={{ cursor: "pointer" }} onClick={handleShow}>
                <RoundIcon
                  icon={<Burger width={20} height={20} />}
                  radius={10}
                />
              </span>
            </div>
          </Container>
        </Navbar>
        <BriefCanvas show={showBrief} handleClose={handleCloseBrief} />
        <HeaderCanvas show={show} handleClose={handleClose} />
        {/* ))} */}
      </Container>
    </>
  );
};

export default MyNavBar;
