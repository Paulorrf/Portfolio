import styled from "styled-components";

interface VideoProps {
  size: String;
}

export const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const VideoTag = styled.video<VideoProps>`
  /* width: 500px; */
  width: ${({ size }) => size + "px"};
  cursor: pointer;
`;
