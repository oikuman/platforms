import React from "react";
// import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/images/LOGO_ioc.svg";

const MyNavBar = () => {
  const [active, setActive] = React.useState();
  const handleSelect = (eventKey) => {
    setActive(eventKey);
  };

  return (
    <>
      <>
        {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
        <Navbar
          bg="white"
          data-bs-theme="light"
          // key={expand}
          // expand={expand}
          fixed="top"
        >
          <Container>
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
              <Nav activeKey={active} onSelect={handleSelect} className="">
                <Nav.Link
                  eventKey="1"
                  href="#demand"
                  // className={clsx({ "nav-link": true, active: active === "1" })}
                >
                  Для кого
                </Nav.Link>
                <Nav.Link
                  eventKey="2"
                  href="#why"
                  // className={clsx({ "nav-link": true, active: active === "2" })}
                >
                  Переваги
                </Nav.Link>
                <Nav.Link
                  eventKey="3"
                  href="#tariffs"
                  // className={clsx({ "nav-link": true, active: active === "3" })}
                >
                  Тарифи
                </Nav.Link>
                <Nav.Link
                  eventKey="4"
                  href="#faq"
                  // className={clsx({ "nav-link": true, active: active === "4" })}
                >
                  Питання
                </Nav.Link>
                <Nav.Link
                  eventKey="5"
                  href="#contacts"
                  // className={clsx({ "nav-link": true, active: active === "5" })}
                >
                  Контакти
                </Nav.Link>
              </Nav>
              <div>UA | EN</div>
              <div>hh</div>
            </div>
          </Container>
        </Navbar>
        {/* ))} */}
      </>
    </>
  );
};

export default MyNavBar;
