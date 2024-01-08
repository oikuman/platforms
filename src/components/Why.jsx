import React from "react";
import Plashka from "./Plashka";
import why from "../assets/images/png/why2.png";
import { ReactComponent as FirstIcon } from "../assets/images/icons/adv/ill_1.svg";
import { ReactComponent as SecndIcon } from "../assets/images/icons/adv/ill_2.svg";
import { ReactComponent as ThirdIcon } from "../assets/images/icons/adv/ill_3.svg";
import { ReactComponent as ForthIcon } from "../assets/images/icons/adv/ill_4.svg";
import { ReactComponent as FifthIcon } from "../assets/images/icons/adv/ill_5.svg";
import { ReactComponent as SixthIcon } from "../assets/images/icons/adv/ill_6.svg";

import "./Why.css";

const Why = () => {
  return (
    <section id="why" className="why">
      <h2 className="text-center why-head">
        <span className="textPrimary">Чому варто</span> <br />
        <span className="textPrimary">обрати</span>{" "}
        <span className="" style={{ color: "#116dd8" }}>
          саме нас?
        </span>
      </h2>
      <div className="d-lg-flex justify-content-lg-center">
        <div className="d-flex flex-column align-items-center flex-md-row justify-content-md-center why-plashkas">
          <div className="d-flex flex-column align-items-center justify-content-md-start plashka-right">
            <Plashka
              icon={<FirstIcon />}
              text="Комплексний підхід"
              gap="both"
            />
            <Plashka
              icon={<SecndIcon />}
              text="Інтеграція з командою"
              gap="both"
            />
            <Plashka
              icon={<ThirdIcon />}
              text="Досвід роботи з державними органами"
              gap="right"
            />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-md-start">
            <Plashka
              icon={<ForthIcon />}
              text="Короткі строки реалізації проєктів"
              gap="bottom"
            />
            <Plashka
              icon={<FifthIcon />}
              text="Кваліфікована команда розробників"
              gap="bottom"
            />
            <Plashka icon={<SixthIcon />} text="Гарантії якості" gap="last" />
          </div>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-lg-center">
          <img src={why} alt="why image" className="why-image" />
        </div>
      </div>
    </section>
  );
};

export default Why;
