import React from "react";
// import clsx from "clsx";
// import Carousel from "react-simply-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TariffCard from "./TariffCard";
import useWindowDimensions from "../elements/useWindowDimensions";
// import TariffBtn from "./TariffBtn";
import MockCarousel from "./MockCarousel";
import MockGrid from "./MockGrid";
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

const card1 = <TariffCard title="Standard" item={array[0]} />;
const card2 = <TariffCard title="Standard" item={array[1]} />;
const card3 = <TariffCard title="Standard" item={array[2]} />;

const Tariffs = () => {
  const { width } = useWindowDimensions();
  const [show, setShow] = React.useState(width >= 768 && width < 1440);
  
  // console.log(width);

  React.useEffect(() => {
    setShow(width >= 768 && width < 1440);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <>
      <section className="section section-tariff" >
        <div>
          <Container className="p-0">
            <Row className="m-0 ps-lg-7 pe-lg-7">
              <Col
                xs={12}
                className="d-flex flex-column justify-content-center ps-0"
              >
                <h2 id="tariffs" className="text-center tariff-head">
                  <span className=" headDark">Види пропозицій</span>
                </h2>
              </Col>

              {show ? <MockCarousel cards={cards} /> : <MockGrid card1={card1} card2={card2} card3={card3} />}
              
            </Row>
          </Container>
        </div>
      </section>
      <></>
    </>
  );
};

export default Tariffs;
