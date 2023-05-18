import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DialogBox.css";
function DialogBox(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.toggle();
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
          <Modal.Title>Tools and Technologies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ textAlign: "justify" }}>
            {" "}
            <b>Machine Learning:</b> Open AI Models (GPT, GPT 3.5 turbo), Yolo
            V8, LSTM
          </p>
          <p style={{ textAlign: "justify" }}>
            {" "}
            <b>Programming Languages:</b> Java, Javascript, Python, SQL,
            TypeScript, C, C++.
          </p>
          <p style={{ textAlign: "justify" }}>
            <b>Web Development:</b> MERN Full Stack, AngularJS, ReactJS, NodeJS,
            REST API / SOAP, HTML, CSS, Flask, Spring Boot.
          </p>
          <p style={{ textAlign: "justify" }}>
            <b>Technologies:</b> Kafka, Spark, GIT, JIRA, ETL, Kubernetes,
            distributed systems, OOPS, AJAX.
          </p>
          <p style={{ textAlign: "justify" }}>
            <b>Data Base:</b> Relational DB, MongoDB, Vertica DB, Cassandra, No
            SQL and Redis.
          </p>
          <p style={{ textAlign: "justify" }}>
            <b>Others:</b> AWS, Azure, GCP, DevOps, Docker, CICD, SonarQube,
            JUnit, Jenkins, Pandas, VS Code, Eclipse, Vagrant, Ansible.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <p></p>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DialogBox;
