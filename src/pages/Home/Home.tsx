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
  const handleDownload = () => {
    fetch("curriculo.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "pauloRenato.pdf";
        alink.click();
      });
    });
  };

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

        <div onClick={handleDownload}>
          <Button type="secondary">Baixar Portfolio</Button>
        </div>
      </BtnContainer>
    </Container>
  );
};

export default Home;
