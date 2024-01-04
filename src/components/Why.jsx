import React from "react";
import Plashka from "./Plashka";
import why from "../assets/images/png/why2.png";
import { ReactComponent as FirstIcon } from "../assets/images/icons/adv/ill_1.svg";
import { ReactComponent as SecndIcon } from "../assets/images/icons/adv/ill_2.svg";
import { ReactComponent as ThirdIcon } from "../assets/images/icons/adv/ill_3.svg";
import { ReactComponent as ForthIcon } from "../assets/images/icons/adv/ill_4.svg";
import { ReactComponent as FifthIcon } from "../assets/images/icons/adv/ill_5.svg";
import { ReactComponent as SixthIcon } from "../assets/images/icons/adv/ill_6.svg";

const Why = () => {
  return (
    <section className="why">
      <h2 className="">
        <span className="">Чому варто обрати</span>{" "}<br/>
        <span className="">саме нас?</span>
      </h2>
      <div>
        <Plashka icon={<FirstIcon />} />
        <Plashka icon={<SecndIcon />} />
        <Plashka icon={<ThirdIcon />} />
        <Plashka icon={<ForthIcon />} />
        <Plashka icon={<FifthIcon />} />
        <Plashka icon={<SixthIcon />} />
      </div>

      <div>
        <img src={why} alt="why image" width={328} height={255} />
      </div>
    </section>
  );
};

export default Why;
