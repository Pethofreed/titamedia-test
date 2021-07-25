import React from 'react';
import Logo from './logo.png'
import { FaBars,FaTimes } from "react-icons/fa";
import CustomizedIcon from '../Customized_icon'
import { useState } from 'react';
import {
  Menu,
  MenuItem,
  IconLogo,
  ImageLogo,
  LogoTexts,
  LogoTextOne,
  LogoTextTwo,
  MenuItemLink,
  IconLogoBars,
  NavbarWrapper,
  NavbarContainer
} from './Navbar.elements'

const Navbar = () => {

  const [show, setShow] = useState(false);

  const ChangeShow = () => {
    setShow(!show)
  }

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>

          <IconLogo>
            <ImageLogo src={Logo} alt="logo-page" />
            <LogoTexts>
              <LogoTextOne>
                SNEAK
              </LogoTextOne>
              <LogoTextTwo>
                Creative Portfolio
              </LogoTextTwo>
            </LogoTexts>
          </IconLogo>


          <IconLogoBars onClick={() => ChangeShow(show)}>
            {show ? <FaTimes /> : <FaBars />}
          </IconLogoBars>

          <Menu show={show}>
            <MenuItem onClick={() => ChangeShow(show)}>
              <MenuItemLink>All</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeShow(show)}>
              <MenuItemLink>Branding</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeShow(show)}>
              <MenuItemLink>Web</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeShow(show)}>
              <MenuItemLink>Photograpy</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeShow(show)}>
              <MenuItemLink>App</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeShow(show)}>
              <CustomizedIcon />
            </MenuItem>
          </Menu>

        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
