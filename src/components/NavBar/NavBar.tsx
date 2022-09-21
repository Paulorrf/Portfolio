import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  ContainerLogo,
  Logo,
  HambMenu,
  List,
  ListItem,
  IconsDiv,
} from "./NavBar.style";

import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSuitcase } from "react-icons/fa";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Nav showNav={showNav}>
      <ContainerLogo>
        <Logo>
          <Link to="/">
            <FaSuitcase size="2rem" color="#fff" />
          </Link>
        </Logo>

        <HambMenu>
          <button>
            {showNav ? (
              <AiOutlineClose
                size="2rem"
                color="#fff"
                onClick={() => setShowNav((prev) => !prev)}
              />
            ) : (
              <GiHamburgerMenu
                size="2rem"
                color="#fff"
                onClick={() => setShowNav((prev) => !prev)}
              />
            )}
          </button>
        </HambMenu>
      </ContainerLogo>

      <List showNav={showNav}>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/portfolio">Portfolio</Link>
        </ListItem>
        <ListItem>
          <Link to="/projetos">Projetos</Link>
        </ListItem>
        <ListItem hasScale={false}>
          <IconsDiv>
            <a
              href="https://github.com/paulorrf"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                size="2rem"
                color="#fff"
                style={{ marginRight: "30px" }}
              />
            </a>
            <a
              href="https://github.com/paulorrf"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                size="2rem"
                color="#fff"
                style={{ marginRight: "30px" }}
              />
            </a>
          </IconsDiv>
        </ListItem>
      </List>
    </Nav>
  );
};

export default NavBar;
