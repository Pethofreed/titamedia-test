import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const NavbarWrapper = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: "Questrial";
  font-size: 1.2rem;
  color: #707070;
`;

export const LogoTexts = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const LogoTextOne = styled.h1`
  margin-right: 5px;
  font-size: 18px;
  letter-spacing: 5px;
`;

export const LogoTextTwo = styled.p`
  margin-right: 5px;
  font-size: 14px;
  letter-spacing: 3px;
`;

export const ImageLogo = styled.img`
  width: 35px;
  height: 40px;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({show}) => show ? 0 : "-100%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #fff;
    border-top: 2px solid #ff5d85;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Montserrat";
  font-weight: 400;
  cursor: pointer;

  @media screen and (max-width: 960px){
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: #707070;
  padding: 5px;

  &:hover {
    background: #ff2666;
    transition: 0.5s;
    color: #fff;
  }
`;

export const IconLogoBars = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: #ff5d85;
    font-size: 2rem;
  }

`;
