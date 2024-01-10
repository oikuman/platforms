import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import BriefForm from "./BriefForm";

const BriefModal = ({ show, handleClose }) => {
  const sendBrief = () => {
    handleClose();
  };

  const saveDraft = () => {
    handleClose();
  };

  return (
    <>
      <Container>
        <Modal centered scrollable size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton className="pb-0 border-0"></Modal.Header>
          <Modal.Body className="pt-0">
            <BriefForm />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center border-0">
            <div className="d-grid">
              <Button variant="primary" onClick={sendBrief}>
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
