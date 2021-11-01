import styled from "styled-components";

import {DevDAOIcon} from '../../styles/styles';

import Icon from "../../styles/UI-Components/Icon";

export default function Navbar() {
  return (
    <Nav>
      <NavBox>
        <NavbarTitle>
          <NavLink href="/">
            <DevDAOIcon style={{width: '1.6rem', height: '1.6rem'}}>
              <Icon />
            </DevDAOIcon>
          </NavLink>
        </NavbarTitle>
        <MainMenu>
          <Navs href="/jobs">Job List</Navs>

          <Navs href="/developers">Developers</Navs>

          <Extra href="/post-job">Post a Job</Extra>
        </MainMenu>
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
  width: 1280px;
  text-align: center;
  margin: auto;

  @media (max-width: 650px) {
    width: 650px;
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
  color: black;
  padding: 0.45rem;
  margin: 0 0.25rem;
  cursor: pointer;
  float: left;
  text-decoration: none;
  border: 1px solid black;
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

const MainMenu = styled.div`
  position: relative;
  top: 10%;
`;

const Hamburgermenu = styled.div`
  display: inline-block;
  align-items: right;
  text-align: right;
  float: right;
`;
