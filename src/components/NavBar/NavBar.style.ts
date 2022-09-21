import styled from "styled-components";

interface ListItemProps {
  hasScale?: boolean;
}

interface ListProp {
  showNav: boolean;
}

export const Nav = styled.nav<ListProp>`
  position: ${({ showNav }) => (showNav ? "absolute" : "relative")};
  justify-content: space-between;
  display: ${({ showNav }) => (showNav ? "block" : "flex")};
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 0 3rem;
  height: 80px;
  z-index: 1000;
  width: ${({ showNav }) => (showNav ? "40%" : "auto")};
  height: ${({ showNav }) => (showNav ? "60vh" : "80px")};

  @media (max-width: 850px) {
    justify-content: space-between;
    z-index: 1000;
    padding: 0;
    padding-top: ${({ showNav }) => showNav && "1rem"};
  }
`;

export const ContainerLogo = styled.div`
  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
`;

export const Logo = styled.div`
  width: 20%;
  align-self: center;
  color: #fff;
`;

export const HambMenu = styled.div`
  display: none;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    display: block;
  }
`;

export const List = styled.ul<ListProp>`
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 850px) {
    margin-top: 4rem;
    padding: 0;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: ${({ showNav }) => (showNav ? "block" : "none")};
  }
`;

export const ListItem = styled.li<ListItemProps>`
  :hover {
    text-decoration: underline;
    text-decoration-color: #fff;
    text-decoration-thickness: 2px;
    transform: scale(${({ hasScale }) => (hasScale === false ? 1 : 1.1)});
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-right: -4rem;

  > * {
    padding-right: 1rem;
    :hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    margin: 0 auto;
    background-color: red;
  }
`;
