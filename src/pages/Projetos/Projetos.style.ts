import styled from "styled-components";

export const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  row-gap: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const GitLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  margin-top: 0.6rem;
`;
