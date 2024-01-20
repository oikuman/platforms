import React from "react";
// import clsx from "clsx";
import PropTypes from "prop-types";
import { ReactComponent as Left } from "../assets/images/icons/ArrowLeft.svg";
import { ReactComponent as Right } from "../assets/images/icons/ArrowRight.svg";

import "./Tariff.css";

const TariffBtn = ({ active, setActive }) => {
  const handleLeft = () => {
    if (active > 1) setActive(active - 1);
    else setActive(3);
  };

  const handleRight = () => {
    if (active < 3) setActive(active + 1);
    else setActive(1);
  };

  return (
    <div>
      <span className="tarrif-arrow arrow-left" onClick={() => handleLeft()}>
        <Left />
      </span>
      <span className="">
        <button
          className="btn-tariff btn-tariff-one"
          onClick={() => setActive(1)}
        />
        <button
          className="btn-tariff btn-tariff-two"
          onClick={() => setActive(2)}
        />
        <button className="btn-tariff" onClick={() => setActive(3)} />
      </span>
      <span className="tarrif-arrow arrow-right" onClick={() => handleRight()}>
        <Right />
      </span>
    </div>
  );
};

TariffBtn.propTypes = {
  active: PropTypes.number,
  setActive: PropTypes.func,
};

export default TariffBtn;
