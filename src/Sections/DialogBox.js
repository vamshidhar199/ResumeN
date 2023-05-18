import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Resume from "./../Resume/VamshidharReddyParupally.pdf";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import "./DialogBox.css";
import { Document, Page } from "react-pdf";
function DialogBox(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    // props.toggleShowFullDescription();
  };
  const handleShow = () => setShow(true);
  const docs = [
    { uri: require("./../Resume/VamshidharReddyParupally.pdf") }, // Local File
  ];

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
        <DocViewer
          pluginRenderers={DocViewerRenderers}
          documents={docs}
          theme={{
            primary: "#5296d8",
            secondary: "#ffffff",
            tertiary: "#5296d899",
            text_primary: "#ffffff",
            text_secondary: "#5296d8",
            text_tertiary: "#00000099",
            disableThemeScrollbar: false,
            text: "black",
          }}
        />
      </Modal>
    </>
  );
}

export default DialogBox;
