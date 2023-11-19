import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-simply-carousel";
import FeedbackCard from "./FeedbackCard";

import user1 from "../assets/images/photos/user1.png";
import user2 from "../assets/images/photos/user2.png";
import user3 from "../assets/images/photos/user3.png";

import useWindowDimensions from "../elements/useWindowDimensions";

const array = [];
array.push(<FeedbackCard photoSrc={user1} />);
array.push(<FeedbackCard photoSrc={user2} />);
array.push(<FeedbackCard photoSrc={user3} />);

const Feedback = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const { width } = useWindowDimensions();

  const toShow = width < 768 ? 1 : width < 1440 ? 2 : 3;
  return (
    <>
      <section className="section">
        <div>
          <Container>
            <Row>
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <h2 className="text-center headMedium">
                  <span className="headBlue">Відгуки</span>{" "}
                  <span className="headDark">про роботу платформи</span>
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ marginTop: 40 }}>
          <Carousel
            containerProps={{
              style: {
                width: "100%",
                justifyContent: "space-around",
                userSelect: "none",
              },
            }}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
              style: {
                //   background: "blue",
              },
            }}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
              children: ">",
              style: {
                display: "none",
              },
            }}
            backwardBtnProps={{
              children: "<",
              style: {
                display: "none",
              },
            }}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  height: 12,
                  width: 12,
                  border: "2px solid #116DD8",
                  borderRadius: "50%",
                  background: "#fff",
                  padding: 0,
                  margin: "40px 10px 0",
                },
              },
              activeItemBtnProps: {
                style: {
                  height: 12,
                  width: 12,
                  borderRadius: "50%",
                  border: 0,
                  background: "#116DD8",
                  margin: "40px 10px 0",
                },
              },
            }}
            itemsToShow={toShow}
            //   itemsToScroll={2}
            speed={400}
            //   centerMode
          >
            {array.map((item, index) => (
              <div style={{ margin: "10 !important" }} key={index}>
                {item}
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Feedback;
