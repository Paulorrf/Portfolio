import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Title,
  Profession,
  About,
  BtnContainer,
} from "./Home.style";

import Button from "../../utils/Button/Button";

const Home = () => {
  return (
    <Container>
      <Title>OLÁ, EU SOU PAULO RENATO</Title>
      <Profession>DESENVOLVEDOR FRONT-END JUNIOR</Profession>
      <About>
        Estou em busca de uma oportunidade para atuar no mercado de trabalho
        como desenvolvedor front end, para ter crescimento profissional e para
        expandir meus conhecimentos.
      </About>

      <BtnContainer>
        <div>
          <Link to="/portfolio">
            <Button>Ver Portfolio</Button>
          </Link>
        </div>

        <div>
          <a href="../../assets/teste.txt" download>
            <Button type="secondary">Baixar Portfolio</Button>
          </a>
        </div>
      </BtnContainer>
    </Container>
  );
};

export default Home;
