import React from "react";
import PropTypes from "prop-types";
import TariffBtn from "./TariffBtn";
import useWindowDimensions from "../elements/useWindowDimensions";

const MockCarousel = ({ cards }) => {
  const [active, setActive] = React.useState(2);
  const [cardArray, setCardArray] = React.useState([...cards]);

  const { width } = useWindowDimensions();
  const lengthMinus = Math.round((width-1240)/2) - 80;

  React.useEffect(() => {
    if (active === 1) {
      setCardArray([cards[2], cards[0], cards[1]]);
    } else if (active === 2) {
      setCardArray([cards[0], cards[1], cards[2]]);
    } else if (active === 3) {
      setCardArray([cards[1], cards[2], cards[0]]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      <div style={{ marginBottom: 50, width: "100%" }}>
        <div
          style={{
            // width: "100%",
            overflowX: "hidden",
            minHeight: 612,
            // background: "green",
            position: "relative",
          }}
        >
          <div
            style={{
              // width: 100,
              minHeight: 612,
              // background: "yellow",
              // opacity: 0.5,
              maxWidth: 334,
              position: "absolute",
              top: "50%",
              transform: "translate(-0%, -50%)",
              WebkitTransform: "translate(-0%, -50%)",
              left: lengthMinus,
            }}
          >{cardArray[0]}</div>
          <div
            style={{
              // width: 100,
              minHeight: 612,
              // background: "yellow",
              // opacity: 0.5,
              maxWidth: 334,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              WebkitTransform: "translate(-50%, -50%)",
            }}
          >{cardArray[1]}</div>
          <div
            style={{
              // width: 100,
              minHeight: 612,
              maxWidth: 334,
              // background: "yellow",
              // opacity: 0.5,
              position: "absolute",
              top: "50%",
              transform: "translate(-0%, -50%)",
              WebkitTransform: "translate(-0%, -50%)",
              right: lengthMinus,
            }}
          >{cardArray[2]}</div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <TariffBtn active={active} setActive={setActive} />
      </div>
    </>
  );
};

MockCarousel.propTypes = {
  cards: PropTypes.array,
};

export default MockCarousel;
