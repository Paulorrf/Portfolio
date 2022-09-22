import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

import { ModalContainer, OuterModal } from "./Modal.style";

import VideoDisplay from "../../utils/VideoDisplay/VideoDisplay";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentVideo: any;
}

const Modal = ({ showModal, setShowModal, currentVideo }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = showModal ? (
    <ModalContainer onClick={closeModal} ref={modalRef}>
      <OuterModal>
        <VideoDisplay video={currentVideo} size="1000" />
      </OuterModal>
    </ModalContainer>
  ) : null;

  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("modal")!
    );
  } else {
    return null;
  }
};

export default Modal;
