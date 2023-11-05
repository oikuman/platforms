import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Menu = () => {
  return (
    <>
      <ListGroup variant="flush" horizontal>
        <ListGroup.Item
          className="border-0 text-center"
          style={{ backgroundColor: "aquamarine" }}
        >
          <Button variant="link" href="#demand">Для кого</Button>
          
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 text-center"
          style={{ backgroundColor: "aquamarine" }}
        >
          <Button variant="link" href="#tariffs">Тарифи</Button>
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 text-center"
          style={{ backgroundColor: "aquamarine" }}
        >
          <Button variant="link" href="#faq">Найчастіші питання</Button>
        </ListGroup.Item>
        <ListGroup.Item
          className="border-0 text-center"
          style={{ backgroundColor: "aquamarine" }}
        >
          <Button variant="link" href="#contacts">Контакти</Button>
          {/* <a href="#contacts" className="btn btn-info" role="button">Link Button</a> */}
        </ListGroup.Item>
      </ListGroup>

      
    </>
  );
};

export default Menu;
