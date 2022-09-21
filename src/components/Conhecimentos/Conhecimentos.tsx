import { FC } from "react";
import { IconType } from "react-icons";
import { langIcons, libIcons, frameworkIcons, otherIcons } from "./data";

import {
  ConheciContainer,
  ConheciContainerItem,
  IconsContainer,
  SubTitle,
  Title,
} from "./Conhecimentos.style";

import IconTooltip from "../../utils/IconTooltip/IconTooltip";

interface ObjProps {
  text: string;
  Icon: IconType;
}

const Conhecimentos: FC = () => {
  function displayIcons(arr: Array<ObjProps>): JSX.Element[] {
    return arr.map((iconObj: ObjProps): JSX.Element => {
      return (
        <IconTooltip text={iconObj.text} Icon={iconObj.Icon} size="1.8rem" />
      );
    });
  }

  return (
    <ConheciContainer>
      <Title>Conhecimentos</Title>
      <ConheciContainerItem>
        <SubTitle>Linguagens</SubTitle>
        <IconsContainer>{displayIcons(langIcons)}</IconsContainer>
      </ConheciContainerItem>

      <ConheciContainerItem>
        <SubTitle>Bibliotecas</SubTitle>
        <IconsContainer>{displayIcons(libIcons)}</IconsContainer>
      </ConheciContainerItem>

      <ConheciContainerItem>
        <SubTitle>Frameworks</SubTitle>
        <IconsContainer>{displayIcons(frameworkIcons)}</IconsContainer>
      </ConheciContainerItem>

      <ConheciContainerItem>
        <SubTitle>Outros</SubTitle>
        <IconsContainer>{displayIcons(otherIcons)}</IconsContainer>
      </ConheciContainerItem>
    </ConheciContainer>
  );
};

export default Conhecimentos;
