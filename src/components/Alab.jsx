import React from "react";
import { ReactComponent as CompIcon } from "../assets/images/icons/Comp.svg";
// import { CompIcon } from "./DarkIcons";
import "./Alab.css";
// const CompIconLg = () => <CompIcon height={36} width={36} />

const Alab = () => {
  return (
    <>
      <div>
        <h1 className="herro">Hero Medium 60</h1>
        <h1 className="h1">H1 Medium 50</h1>
        <h2>H2 Medium 46</h2>
        <h3>H3 Medium 40</h3>
        <h4>H4 Medium 32</h4>
        <h5 className="headBold">H5 Bold 24</h5>
        <h5 className="headMedium">H5 Medium 24</h5>
        <h6 className="headBold">H6 Bold 20</h6>
        <h6 className="headMedium">H6 Medium 20</h6>
        <h6 className="headRegular">H6 Regular 20</h6>
        {/* body */}
        <p className="normal medium">Body Medium 16</p>
        <p className="normal regular">Body Regular 16</p>
        <p className="normal light">Body Light 16</p>
        <p className="small medium">BodySmall Medium 14</p>
        <p className="small regular">BodySmall Regular 14</p>
        <p className="small light">BodySmall Light 14</p>
        <label className="label light">Lable Light 12</label>
        <div>
          <CompIcon className="iconLg" />
        </div>
          <CompIcon />
        <div/>
      </div>
    </>
  );
};

export default Alab;
