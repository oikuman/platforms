import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/images/logo.svg";

const MyNavBar = () => {
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
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center'
                }}
              >
              <Navbar.Brand href="#">
                <img src={logo} alt="logo" />
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#demand">Для кого</Nav.Link>
                <Nav.Link href="#tariffs">Тарифи</Nav.Link>
                <Nav.Link href="#faq">Найчастіші питання</Nav.Link>
                <Nav.Link href="#contacts">Контакти</Nav.Link>
              </Nav>
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
