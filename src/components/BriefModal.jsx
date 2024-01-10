import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import BriefForm from "./BriefForm";

const BriefModal = ({ show, handleClose }) => {

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
      <Container>
        <Modal centered scrollable size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton className="pb-0 border-0"></Modal.Header>
          <Modal.Body className="pt-0">
            <BriefForm state={state} handleInput={handleInput} handleSubmit={handleSubmit}/>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center border-0">
            <div className="d-grid">
              <Button form="brief-form" variant="primary" type="submit">
                Відправити
              </Button>
            </div>

            <Button variant="outline-primary" onClick={saveDraft}>
              Зберегти чернетку
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

BriefModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default BriefModal;
