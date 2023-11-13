import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div>
      <ul className="site-menu d-flex">
                    <li className="menu-list-item small light textPrimary"><a href="#demand">Для кого</a></li>
                    <li className="menu-list-item small light textPrimary"><a href="#tariffs">Тарифи</a></li>
                    <li className="menu-list-item small light textPrimary"><a href="#faq">Найчастіші питання</a></li>
                    <li className="menu-list-item small light textPrimary"><a href="#contacts">Контакти</a></li>
                </ul>
      </div>
      

      
    </>
  );
};

export default Menu;
