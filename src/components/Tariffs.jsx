import React from "react";
import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TariffCard from "./TariffCard";
import useWindowDimensions from "../elements/useWindowDimensions";
import "./Tariff.css";

const array = [
  {
    title: "Starter",
    price: "390",
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
    price: "490",
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
    price: "590",
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

const Tariffs = () => {
  const [btn, setBtn] = React.useState(1);
  const { width } = useWindowDimensions();
  const toShow = (width >= 768 && width < 1440) ? false : true;

  return (
    <>
      <section  className="section section-tariff">
        <div>
          <Container className="p-0">
            <Row className="m-0 ps-3 pe-3 ps-lg-7 pe-lg-7">
              <Col
                id="tariffs"
                xs={12}
                sm={12}
                className="d-flex flex-column justify-content-center ps-0"
              >
                <h2 className="text-center">
                  <span className="tariff-head headDark">Види пропозицій</span>
                </h2>
                
              </Col>

              {(toShow || btn === 1) && (
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  className="mt-3 d-flex justify-content-center align-items-center"
                >
                  {
                    <TariffCard
                      title="Starter"
                      item={array[0]}
                      price="390"
                    />
                  }
                </Col>
              )}
              {(toShow || (btn === 1 || btn === 2)) && (
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  className="mt-3 d-flex justify-content-center align-items-center ps-0 pe-0"
                >
                  {
                    <TariffCard
                      title="Standard"
                      item={array[1]}
                      price="490"
                    />
                  }
                </Col>
              )}
              {(toShow || btn === 2) && (
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  className="mt-3 d-flex justify-content-center align-items-center pe-0"
                >
                  {
                    <TariffCard
                      title="Pro"
                      item={array[2]}
                      price="590"
                    />
                  }
                </Col>
              )}
            </Row>
          </Container>
        </div>
        {!toShow && <div
          className="d-flex justify-content-center"
          style={{ marginTop: 40 }}
        >
          <button
            type="button"
            className={clsx(["btn-tariff", "btn-tariff-one", btn === 1 && "btn-tariff-active"])}
            onClick={() => setBtn(1)}
          />
          <button
            type="button"
            className={clsx(["btn-tariff", btn === 2 && "btn-tariff-active"])}
            onClick={() => setBtn(2)}
          />
        </div>}
      </section>
    </>
  );
};

export default Tariffs;
