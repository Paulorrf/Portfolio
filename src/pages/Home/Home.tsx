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
        Estou procurando um trabalho Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eos, est. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempora, architecto?
      </About>

      <BtnContainer>
        <div>
          <Link to="/portfolio">
            <Button>Ver Portfolio</Button>
          </Link>
        </div>

        <div>
          <Button type="secondary">Baixar Portfolio</Button>
        </div>
      </BtnContainer>
    </Container>
  );
};

export default Home;
