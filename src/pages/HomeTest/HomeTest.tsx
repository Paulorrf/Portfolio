import React from "react";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  PortContainer,
  Name,
  SubTxt,
  BtnContainer,
  Img,
  AboutContainer,
  AboutBox,
  AboutTitle,
  AboutText,
} from "./HomeTest.style";
import Button from "../../utils/Button/Button";
import FrontImg from "../../assets/homeFoto.png";

const Home = () => {
  return (
    <HomeContainer>
      <PortContainer>
        <div>
          <Name>Paulo Renato Ramos Filho</Name>
          <SubTxt>Desenvolvedor Junior</SubTxt>
          <BtnContainer>
            <Link to="/portfolio">
              <Button>Ver Portfolio</Button>
            </Link>
            <Button type="secondary">Baixar Portfolio</Button>
          </BtnContainer>
        </div>

        <div>
          <Img src={FrontImg} alt="Profile Foto" />
        </div>
      </PortContainer>

      <AboutContainer>
        <div>
          <Img src={FrontImg} alt="Profile Foto" />
        </div>

        <AboutBox>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            tenetur doloribus, asperiores aut ea voluptatum amet perferendis
            alias ipsam velit, minima unde cupiditate repellat culpa! Vitae quae
            eum a similique non delectus suscipit cupiditate obcaecati possimus
            quam ad velit libero, labore sit quibusdam illo molestiae quos
            tempora perferendis beatae ea?
          </AboutText>
        </AboutBox>
      </AboutContainer>
    </HomeContainer>
  );
};

export default Home;
