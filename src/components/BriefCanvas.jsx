import React from "react";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
// import HeaderCanvasBody from "./HeaderCanvasBody";
// import Image from "react-bootstrap/Image";
// import logo from "../assets/images/logo_sm.png";
import BriefForm from "./BriefForm";

import "./BriefCanvas.css";

const BriefCanvas = ({ show, handleClose }) => {

  

    const initialValue = {
      pib: "",
      phone: "",
      email: "",
      name: "",
      site: "",
      branch: "",
      kind: "",
      term: "",
      comment: "",
    };
  
    const [state, setState] = React.useState(initialValue);
  
    const handleInput = event => {
      event.preventDefault();
      const {name, value} = event.target;
      setState({...state, [name]: value});
    }
  
    const clearForm = () => {
      setState({...initialValue});
    }
  
    const handleSubmit = event => {
      event.preventDefault();
      const { pib, phone, email, name, site, branch, kind, term, comment } = state;
      const body = `${pib}%0D%0A${phone}%0D%0A${email}%0D%0A${name}%0D%0A${site}%0D%0A${branch}%0D%0A${kind}%0D%0A${term}%0D%0A${comment}`;
      const subject = "Реєстр: Бриф";
      let a = document.createElement("a");
      a.href = `mailto:office@ioc.gov.ua?subject=${subject}&body=${body}`;
      a.click();
      a.remove();
      clearForm();
      handleClose();
    }
  
    const saveDraft = () => {
      handleClose();
    };
  
  return (
    <>
      <Offcanvas
        backdrop={false}
        show={show}
        onHide={handleClose}
        placement="top"
        style={{ height: "100vh" }}
        className="brief-canvas"
        // backdropClassName="brief-canvas"
      >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>
            <div className="d-flex flex-column justify-content-center align-items-center">
              {/*  */}
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <BriefForm state={state} handleInput={handleInput} handleSubmit={handleSubmit} saveDraft={saveDraft}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

BriefCanvas.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default BriefCanvas;
