import styled from "styled-components";

interface ProfileProps {
  fSize?: string;
  color?: string;
  decoration?: boolean;
}

export const PortContainer = styled.div`
  display: grid;
  grid-template-columns: 30% calc(70% - 1rem);
  gap: 4rem;
  overflow-x: hidden;
`;

export const ProfileItem = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.03);
`;

export const ProfileText = styled.p<ProfileProps>`
  font-size: ${({ fSize }) => (fSize ? fSize + "rem" : "1.4rem")};
  margin-top: 1.2rem;
  color: ${({ theme, color }) =>
    color === "secondary" ? theme.secondary : "#000"};
  text-decoration: ${({ decoration }) => decoration && "underline"};

  :nth-child(5) {
    margin-top: 0.4rem;
  }
`;

export const PortInfo = styled.div`
  margin-top: 2rem;
`;

export const PortInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > p {
    margin-left: 1rem;
  }
`;

//Tooltip
export const ExternalLink = styled.a`
  margin-left: 0.4rem;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  margin-left: -3.4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #000;
`;

export const FormacoesContainer = styled.div`
  display: block;
`;
