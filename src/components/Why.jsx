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
    <section className="why">
      <h2 className="text-center">
        <span className="">Чому варто обрати</span> <br />
        <span className="">саме нас?</span>
      </h2>
      <div className="d-flex flex-column align-items-center flex-md-row">
        <div className="d-flex flex-column align-items-center">
          <Plashka icon={<FirstIcon />} text="Комплексний підхід" gap={true} />
          <Plashka
            icon={<SecndIcon />}
            text="Інтеграція з командою"
            gap={true}
          />
          <Plashka
            icon={<ThirdIcon />}
            text="Досвід роботи з державними органами"
            gap={true}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <Plashka
            icon={<ForthIcon />}
            text="Короткі строки реалізації проєктів"
            gap={true}
          />
          <Plashka
            icon={<FifthIcon />}
            text="Кваліфікована команда розробників"
            gap={true}
          />
          <Plashka icon={<SixthIcon />} text="Гарантії якості" gap={false} />
        </div>
      </div>

      <div>
        <img src={why} alt="why image" width={328} height={255} />
      </div>
    </section>
  );
};

export default Why;
