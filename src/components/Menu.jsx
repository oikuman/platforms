import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div>
        <ul className="site-menu d-flex">
          <li className="menu-list-item small light textPrimary">
            <a className="d-block" href="#demand">
              Для кого
            </a>
          </li>
          <li className="menu-list-item small light textPrimary">
            <a className="d-block" href="#why">
              Переваги
            </a>
          </li>
          <li className="menu-list-item small light textPrimary">
            <a className="d-block" href="#tariffs">
              Тарифи
            </a>
          </li>
          <li className="menu-list-item small light textPrimary">
            <a className="d-block" href="#faq">
              Питання
            </a>
          </li>
          <li className="menu-list-item small light textPrimary">
            <a className="d-block" href="#contacts">
              Контакти
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
