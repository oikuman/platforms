import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Carousel from "react-simply-carousel";
import FeedbackCard from "./FeedbackCard";

import "./Feedback.css";

import user1 from "../assets/images/photos/user1.png";
import user2 from "../assets/images/photos/user2.png";

// import useWindowDimensions from "../elements/useWindowDimensions";

const card1 = {text: "Хочу висловити подяку команді за високий професіоналізм. Розробка реєстрів — це не просто послуга, це цілий комплекс робіт, в якому кожен з команди проявив себе справжнім експертом. Підхід ІОЦ Мінсоцполітики до створення реєстрів, як комплекс послуг з розробки та адміністрування, вражає своїм ставленням, якістю, кваліфікацією та термінами виконання. Вдячний за співпрацю колегам, з якими все це рухаємо! Попереду ще багато задач та позитивних змін!", title: "Кошеленко Костянтин", subtitle: "Заступник Міністра соціальної політики України з питань цифрового розвитку, цифрових трансформацій і цифровізації"};

const card2 = {text: "Хочу подякувати команді розробників за якісну роботу, яку вони виконали у рамках нашого проекту, а також за відкритість новому та технічну кмітливість! Усі зауваження та коригування, які з’являлись під час виконання завдань були виправлені у визначені терміни. Зичу відмінних результатів у майбутніх проектах!", title: "Карчевич Марія", subtitle: "Заступниця Міністра охорони здоров’я України з питань цифрового розвитку, цифрових трансформацій і цифровізації"};

const array = [];
array.push(<FeedbackCard photoSrc={user1} {...card1} />);
array.push(<FeedbackCard photoSrc={user2} {...card2} />);

const Feedback = () => {
  // const [activeSlide, setActiveSlide] = React.useState(0);
  // const { width } = useWindowDimensions();
  // const toShow = width < 768 ? 1 : width < 1440 ? 2 : 3;

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
                <h2 className="text-center headMedium fedback-head">
                  <span className="headBlue">Відгуки</span>{" "}
                  <span className="headDark">про роботу платформи</span>
                </h2>
              </Col>
              <Col
                xs={12} sm={12} md={12} lg={6}
                className="d-flex align-items-center justify-content-center feedback-card-gap"
              >
               <FeedbackCard photoSrc={user1} {...card1} /> 
              </Col>
              <Col
                xs={12} sm={12} md={12} lg={6}
                className="d-flex align-items-center justify-content-center"
              >
               <FeedbackCard photoSrc={user2} {...card2} /> 
              </Col>
            </Row>
          </Container>
        </div>
        
      </section>
    </>
  );
};

export default Feedback;
