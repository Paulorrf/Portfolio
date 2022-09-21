import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

import { ModalContainer, OuterModal } from "./Modal.style";

import VideoDisplay from "../../utils/VideoDisplay/VideoDisplay";

const Modal = ({
  showModal,
  setShowModal,
  currentVideo,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentVideo: any;
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalRef: any = useRef();

  const closeModal = (e: any) => {
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
        {/* <VideoBox>
          <VideoTag autoPlay loop muted>
            <source src={currentVideo} type="video/mp4" />
          </VideoTag>
        </VideoBox> */}
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
