import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import BriefForm from "./BriefForm";

const BriefModal = ({show, handleClose}) => {

  const sendBrief = () => {
    handleClose();
  }

  const saveDraft = () => {
    handleClose();
  }

  return (
    <>
      <Modal centered scrollable size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Бриф</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BriefForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={sendBrief}>
            Відправити
          </Button>
          <Button variant="outline-primary" onClick={saveDraft}>
            Зберегти чернетку
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

BriefModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default BriefModal;
