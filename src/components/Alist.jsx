import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


import "./Alist.css";

const Alist = () => {
  return (
    <>
      <div style={{ width: 800, height: 600, backgroundColor: "teal" }} className="d-flex">
        <ul
          className="site-list d-flex flex-column justify-content-between align align-items-end"
          style={{ width: "100%" }}
        >
          <li className="site-list-item small light textPrimary">
            <a href="#demand">Для кого</a>
          </li>
          <li className="site-list-item small light textPrimary">
            <a href="#tariffs">Тарифи</a>
          </li>
          <li className="site-list-item small light textPrimary">
            <a href="#faq">Найчастіші питання</a>
          </li>
          <li className="site-list-item small light textPrimary">
            <a href="#contacts">Контакти</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Alist;
