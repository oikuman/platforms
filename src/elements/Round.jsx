import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RoundTip = styled.span`
  background-color: #116dd8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: fit-content;
`;

const InsideTip = styled.span`
  padding: 0px;
  margin: 0px;
  line-height: 1rem;
`;

const RoundIcon = ({ icon, radius }) => {
  return (
    <RoundTip style={{padding: radius}}
    // onClick={() => alert("hello")}
    >
      <InsideTip>{icon}</InsideTip>
    </RoundTip>
  );
};

RoundIcon.propTypes = {
  icon: PropTypes.element,
  radius: PropTypes.number
};

export default RoundIcon;
