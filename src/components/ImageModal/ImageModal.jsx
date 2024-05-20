import css from "./ImageModal.module.css";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function ImageModal({ selectedImg, modalIsOpen, onIsCloseModal }) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onIsCloseModal}
        style={customStyles}
      >
        <div>
          <img
            src={selectedImg.urls.regular}
            alt={selectedImg.alt_description}
          />
        </div>
      </Modal>
    </>
  );
}

export default ImageModal;
