import React from "react";
// import clsx from "clsx";
// import Carousel from "react-simply-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TariffCard from "./TariffCard";
import useWindowDimensions from "../elements/useWindowDimensions";
import "./Tariff.css";

const array = [
  {
    title: "Starter",
    text: [
      {
        id: "11",
        text: "Технічне завдання та календарний план",
      },
      {
        id: "12",
        text: "Загальний опис ПЗ (в т. ч. БД та інше)",
      },
      {
        id: "13",
        text: "Інструкція адміністратора",
      },
      {
        id: "14",
        text: "Інструкція користувача",
      },
      {
        id: "15",
        text: "Програма і методика приймальних випробувань",
      },
    ],
  },
  {
    title: "Standard",
    text: [
      {
        id: "21",
        text: "Технічні вимоги",
      },
      {
        id: "22",
        text: "Технічне завдання та календарний план",
      },
      {
        id: "23",
        text: "Загальний опис ПЗ (в т. ч. БД та інше)",
      },
      {
        id: "24",
        text: "Інструкція адміністратора",
      },
      {
        id: "25",
        text: "Інструкція користувача",
      },
      {
        id: "26",
        text: "Програма і методика приймальних випробувань",
      },
    ],
  },
  {
    title: "Pro",
    text: [
      {
        id: "31",
        text: "Технічні вимоги",
      },
      {
        id: "32",
        text: "Технічне завдання та календарний план",
      },
      {
        id: "33",
        text: "Загальний опис ПЗ (в т. ч. БД та інше)",
      },
      {
        id: "34",
        text: "Інструкція адміністратора",
      },
      {
        id: "35",
        text: "Інструкція користувача",
      },
      {
        id: "36",
        text: "Програма і методика приймальних випробувань",
      },
      {
        id: "37",
        text: "Інформаційна взаємодія між системами",
      },
    ],
  },
];

const cards = [];
cards.push(<TariffCard item={array[0]} />);
cards.push(<TariffCard item={array[1]} />);
cards.push(<TariffCard item={array[2]} />);

const Tariffs = () => {
  // const [btn, setBtn] = React.useState(1);
  // const [activeSlide, setActiveSlide] = React.useState(0);
  const { width } = useWindowDimensions();
  console.log(width);
  // const toShow = width >= 768 && width < 1440 ? false : true;
  // const lengthMinus = Math.round((width-1240)/2) - 40;

  const card1 = <TariffCard title="Standard" item={array[0]} />;
  const card2 = <TariffCard title="Standard" item={array[1]} />;
  const card3 = <TariffCard title="Standard" item={array[2]} />;

  return (
    <>
      <section className="section section-tariff">
        <div>
          <Container className="p-0">
            <Row className="m-0 ps-3 pe-3 ps-lg-7 pe-lg-7">
              <Col
                id="tariffs"
                xs={12}
                className="d-flex flex-column justify-content-center ps-0"
              >
                <h2 className="text-center tariff-head">
                  <span className=" headDark">Види пропозицій</span>
                </h2>
              </Col>

              <Col xs={12} sm={12} className="">
                <Row className=""></Row>
              </Col>

              <Col xs={12} sm={12} className="ps-0 pe-0">
                  <Col
                    xs={12} sm={12} md={4} lg={4} 
                    className="d-flex justify-content-center ps-0 pe-0 tarif-card-gap"
                  >
                    {card1}
                  </Col>
                  <Col
                    xs={12} sm={12} md={4} lg={4}
                    className="d-flex flex-column justify-content-center ps-0 pe-0 tarif-card-gap"
                  >
                    {card2}
                  </Col>
                  <Col
                    xs={12} sm={12} md={4} lg={4}
                    className="d-flex flex-column justify-content-center ps-0 pe-0"
                  >
                    {card3}
                  </Col>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <></>
    </>
  );
};

export default Tariffs;
