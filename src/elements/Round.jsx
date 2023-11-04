import React from "react";
// import PropTypes from 'prop-types';

// import { LogisticIcon } from "../components/WhiteIcons";

const Round = () => {
  (
      <span
        style={{
          backgroundColor: "#116DD8",
          padding: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          width: "fit-content"
        }}
        // onClick={()=>alert("hello")}
      >
        <span style={{ padding: 0, margin: 0, color: "#fff" }}>
            {/* <Icon /> */}+
        </span>
      </span>
  )
};

// const withIcon = (Round) => {
//   return () => {
//     <Round />
//   }
// }

// function withCountState(Wrapped) {
//   return function (props) {
//      const [count, setCount] = useState(0);
 
//      props['count'] = count;
//      props['setCount'] = setCount;
//      return <Wrapped {...props} />;
//   }
// }

// Round.propTypes = {
//   Icon: PropTypes.element,
// };

export default Round;
