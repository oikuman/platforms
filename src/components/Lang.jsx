import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Lang.css";

const Lang = ({ color }) => {
  const [active, setActive] = React.useState("1");
  return (
    <>
      <div>
        <span
          className={clsx(
            [
              "lang",
              color === "light" ? "lang-light" : "lang-dark",
              active === "1" && color === "dark" && "lang-active-dark",
              active === "1" && color === "light" && "lang-active-light",
            ]
          )}
          onClick={() => setActive("1")}
        >
          UA
        </span>
        <span
          className={clsx([
            "divide",
            color === "dark" && "divide-dark",
            color === "light" && "divide-light",
          ])}
        >
          |
        </span>
        <span
          className={clsx([
            "lang",
            color === "light" ? "lang-light" : "lang-dark",
            active === "2" && color === "dark" && "lang-active-dark",
            active === "2" && color === "light" && "lang-active-light",
          ])}
          onClick={() => setActive("2")}
        >
          EN
        </span>
      </div>
    </>
  );
};

Lang.propTypes = {
  color: PropTypes.string,
};

export default Lang;
