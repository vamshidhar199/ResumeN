import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DialogBox.css";
function DialogBox(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.toggleShowFullDescription();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ textAlign: "justify" }}>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <p>
            <b>Tools and Technologies:</b>
            {props.Tools}
          </p>

          <Button
            variant="primary"
            onClick={(e) => {
              window.location.href = props.Link;
            }}
          >
            GitHub
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DialogBox;
