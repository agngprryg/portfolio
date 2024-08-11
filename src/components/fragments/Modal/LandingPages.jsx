import React from "react";
import Modal from "../../elements/Modal";

const LandingPages = ({ handleHideLandingPage }) => {
  return (
    <Modal>
      <h1>test</h1>
      <button onClick={handleHideLandingPage}>close</button>
    </Modal>
  );
};

export default LandingPages;
