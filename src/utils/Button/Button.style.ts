import styled from "styled-components";

interface BtnProps {
  btnType?: string;
}

export const Btn = styled.button<BtnProps>`
  width: 10rem;
  font-size: 1rem;
  padding: 0.6rem 0;
  border-radius: 5px;
  border-color: transparent;
  cursor: pointer;
  background-color: ${({ theme, btnType }) =>
    btnType === "primary" ? theme.primary : "#fff"};
  color: ${({ theme, btnType }) =>
    btnType === "primary" ? "#fff" : theme.primary};
  border-color: ${({ theme, btnType }) =>
    btnType === "secondary" && theme.primary};

  :hover {
    opacity: 0.9;
    letter-spacing: 0.01rem;
  }
`;
