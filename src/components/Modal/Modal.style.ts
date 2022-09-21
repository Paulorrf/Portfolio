import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const OuterModal = styled.div`
  width: 700px;
  height: auto;
  border-radius: 15px;
  padding: 6px 0px;
  & {
    @media (max-width: 800px) {
      width: 500px;
    }
  }
`;
