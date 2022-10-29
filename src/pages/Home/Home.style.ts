import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  text-align: center;
  z-index: 10;

  @media (max-width: 2000px) {
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 1000px) {
    font-size: 0.8rem;
    top: 20%;
    transform: translate(-50%, -20%);
  }
`;

export const Title = styled.h2`
  /* padding-bottom: 1rem; */
  font-size: 2rem;
`;

export const Profession = styled.h3`
  padding-top: 2rem;
`;

export const About = styled.p`
  padding-top: 1.4rem;
  width: 60%;
  margin: 0 auto;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;

  @media (max-width: 850px) {
    display: block;
    > * {
      margin-bottom: 1rem;
    }
  }
`;
