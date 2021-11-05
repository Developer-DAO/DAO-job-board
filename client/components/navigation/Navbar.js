import styled from "styled-components";

import { IconWrap } from "../../styles/styles";

import Icon from "../../styles/UI-Components/Icon";

export default function Navbar() {
  return (
    <Nav>
      <NavBox>
        <NavbarTitle>
          <NavLink href="/">
            <IconWrap style={{ width: "1.6rem", height: "1.6rem" }}>
              <Icon width="50" height="50" src="/DevDAO.png" />
            </IconWrap>
          </NavLink>
        </NavbarTitle>
        <MainMenu>
          <Navs href="/gigs">Gigs</Navs>
          <Navs href="/jobs">Jobs</Navs>

          <Navs href="/developers">Devs</Navs>
          <Navs href="/companies">Companies</Navs>
          <Navs href="/about">About</Navs>
        </MainMenu>

        <SecondaryMenu>
          <Extra href="/post">Post Something</Extra>
          <Extra3 href="/auth">Sign Up</Extra3>
        </SecondaryMenu>
      </NavBox>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #f7fafc;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: 10%;
  border-bottom: solid 2px #e2e8f0;
  opacity: 0.8;
  overflow: hidden;
`;

const NavBox = styled.div`
  display: flex;
  width: 70%;
  text-align: center;
  margin: auto;
  transition: 0.1s;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const NavbarTitle = styled.h1`
  display: inline;
  font-size: 0.875rem;
  color: #4a5568;
`;

const Navs = styled.a`
  color: black;
  padding: 0.45rem;
  margin: 0 0.25rem;
  cursor: pointer;
  float: left;
  text-decoration: none;
  border-radius: 18px;

  &:focus {
    background-color: #e6ebf2;
    color: black;
  }

  &:hover {
    color: gray;
    transition: 0.1s;
  }
`;

const Extra = styled.a`
  position: relative;
  color: #000000;
  padding: 0.45rem;
  margin: 0 0.25rem;
  cursor: pointer;
  float: left;
  text-decoration: none;
  border: 1px solid #000000;
  border-radius: 18px;

  &:hover {
    color: #CDCDCD;
    transition: 0.1s;
  }
`;

const Extra2 = styled(Extra)`
  box-sizing: border-box;
  background-color: #e6ebf2;
  color: #000000;
`;

const Extra3 = styled(Extra)`
  box-sizing: border-box;
  background-color: black;
  color: #ffffff;
`;

const MainMenu = styled.div`
  margin: auto;
  align-items: center;
`;

const SecondaryMenu = styled.div`
  align-items: right;
`;

const NavHamburger = styled.div`
  display: inline-block;
  align-items: right;
  text-align: right;
  float: right;
`;
