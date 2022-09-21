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

import FrontImg from "../../assets/homeFoto.png";

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
          <img style={{ width: "100px" }} src={FrontImg} alt="profile" />
        </div>
        <ProfileText fSize="1.8">Paulo Renato Ramos Filho</ProfileText>
        <ProfileText color="secondary">Desenvolvedor Web Junior</ProfileText>
        <ProfileText color="secondary">Sobre</ProfileText>
        <ProfileText fSize="1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolorum
          dolores necessitatibus ab impedit sequi fugit nisi dolor quos veniam
          pariatur consectetur deleniti iusto quisquam natus beatae unde ut
          aperiam dolore facere, molestias saepe illo sed id? Delectus iusto
          quo, ipsam commodi, odit reprehenderit explicabo quod nostrum minima
          maxime omnis?
        </ProfileText>
      </ProfileItem>
      <PortInfo>
        <PortInfoItem>
          <BsHouseFill size="2rem" />

          <p>Rua Papa João XXIII, Cachoeirinha RS</p>

          <ExternalLink
            href="https://www.google.com/maps/place/R.+Papa+Jo%C3%A3o+XXIII,+Cachoeirinha+-+RS/@-29.9556241,-51.0935135,17.29z/data=!4m13!1m7!3m6!1s0x951974006daee04d:0x37263def7098541f!2sR.+Papa+Jo%C3%A3o+XXIII,+Cachoeirinha+-+RS!3b1!8m2!3d-29.9556437!4d-51.0935626!3m4!1s0x951974006daee04d:0x37263def7098541f!8m2!3d-29.9556437!4d-51.0935626"
            rel="noreferrer"
            target="_blank"
          >
            <IconTooltip
              text="Google Maps"
              Icon={BsArrowUpRight}
              size="1rem"
              color="#ff3d00"
            />
          </ExternalLink>
        </PortInfoItem>
        <PortInfoItem>
          <BsFillTelephoneFill size="2rem" />
          <p>99195-2727</p>
        </PortInfoItem>
        <PortInfoItem>
          <SiGmail size="2rem" />
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
