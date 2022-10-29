import React from "react";
import {
  PortContainer,
  ProfileItem,
  ProfileText,
  PortInfo,
  PortInfoItem,
  ExternalLink,
  Line,
  FormacoesContainer,
} from "./Portfolio.style";

import PerfilImg from "../../assets/imgPerfil.jpeg";

import Conhecimentos from "../../components/Conhecimentos/Conhecimentos";

import IconTooltip from "../../utils/IconTooltip/IconTooltip";

import { BsHouseFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";

const Portfolio = () => {
  return (
    <PortContainer>
      <ProfileItem>
        <div>
          <img style={{ width: "100px" }} src={PerfilImg} alt="profile" />
        </div>
        <ProfileText fSize="1.8">Paulo Renato Ramos Filho</ProfileText>
        <ProfileText color="secondary">Desenvolvedor Web Junior</ProfileText>
        <ProfileText color="secondary">Sobre</ProfileText>
        <ProfileText fSize="1">
          Meu nome é Paulo Renato, tenho 25 anos e estou cursando ciências da
          computação, já criei diversos projetos utlilizando react, tenho muito
          interesse em aprender mais sobre front end, estou sempre buscando
          conhecimento ativamente através de cursos e da documentação oficial
          das tecnologias.
        </ProfileText>
      </ProfileItem>
      <PortInfo>
        <PortInfoItem>
          <BsHouseFill size="30" />

          <p>Rua Papa João XXIII, Cachoeirinha RS</p>

          <ExternalLink
            href="https://www.google.com/maps/place/R.+Papa+Jo%C3%A3o+XXIII,+Cachoeirinha+-+RS/@-29.9556241,-51.0935135,17.29z/data=!4m13!1m7!3m6!1s0x951974006daee04d:0x37263def7098541f!2sR.+Papa+Jo%C3%A3o+XXIII,+Cachoeirinha+-+RS!3b1!8m2!3d-29.9556437!4d-51.0935626!3m4!1s0x951974006daee04d:0x37263def7098541f!8m2!3d-29.9556437!4d-51.0935626"
            rel="noreferrer"
            target="_blank"
          >
            <IconTooltip
              text="Google Maps"
              Icon={BsArrowUpRight}
              size="20"
              color="#ff3d00"
            />
          </ExternalLink>
        </PortInfoItem>
        <PortInfoItem>
          <BsFillTelephoneFill size="30" />
          <p>99195-2727</p>
        </PortInfoItem>
        <PortInfoItem>
          <SiGmail size="30" />
          <p>paulorenatorf09@gmail.com</p>
        </PortInfoItem>
        <Line />
        <FormacoesContainer>
          <ProfileText decoration={true}>Formações</ProfileText>
          <ProfileText fSize="1.1">
            Ciência da computação, ULBRA Gravataí (7º semestre)
          </ProfileText>
          <ProfileText fSize="1.1">
            Curso de inglês avançado, W10 Wizard
          </ProfileText>
        </FormacoesContainer>
        <Line />
        <div>
          <Conhecimentos />
        </div>
      </PortInfo>
    </PortContainer>
  );
};

export default Portfolio;
