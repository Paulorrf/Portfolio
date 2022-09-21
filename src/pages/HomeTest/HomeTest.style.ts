import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 80%;
  margin: 3rem auto;
  overflow: hidden;
`;

export const PortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: darkcyan;
`;

export const Name = styled.h1`
  text-transform: uppercase;
  margin-bottom: 0.2rem;
  letter-spacing: 0.1rem;
`;

export const SubTxt = styled.h2`
  margin-bottom: 1.6rem;
  letter-spacing: 0.2rem;
`;

export const BtnContainer = styled.div`
  > * {
    margin-right: 3rem;
  }
`;

export const Img = styled.img`
  width: 200px;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const AboutBox = styled.div`
  width: 40%;
`;

export const AboutTitle = styled.h2`
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
`;

export const AboutText = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;
