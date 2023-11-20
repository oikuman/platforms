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
    title: "Персональний",
    price: "390",
    text: [
      {
        id: "11",
        text: "Create messages",
      },
      {
        id: "12",
        text: "Manage conversations from email and chat",
      },
      {
        id: "13",
        text: "View customer profiles",
      },
    ],
  },
  {
    title: "Стандартний",
    price: "490",
    text: [
      {
        id: "21",
        text: "Create messages",
      },
      {
        id: "22",
        text: "Manage conversations from email and chat",
      },
      {
        id: "23",
        text: "View customer profiles",
      },
      {
        id: "24",
        text: "View customer profiles",
      },
      {
        id: "25",
        text: "View customer profiles",
      },
    ],
  },
  {
    title: "Професійний",
    price: "590",
    text: [
      {
        id: "31",
        text: "Create messages",
      },
      {
        id: "32",
        text: "Manage conversations from email and chat",
      },
      {
        id: "33",
        text: "View customer profiles",
      },
      {
        id: "34",
        text: "View customer profiles",
      },
      {
        id: "35",
        text: "View customer profiles",
      },
      {
        id: "36",
        text: "View customer profiles",
      },
      {
        id: "37",
        text: "View customer profiles",
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
                  <span className="tariff-head headDark">Тарифні плани</span>
                </h2>
                <p className="text-center tariff-head-gap">
                  <span className="comment textPrimary">які підійдуть для кожної команди</span>
                </p>
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
                      title="Персональний"
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
                      title="Стандартний"
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
                      title="Професійний"
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
