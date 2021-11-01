import styled from 'styled-components';
import Icon from '../UI-Components/Icon';

export default function Navbar() {
  return (
  <Nav>
    <NavBox>
      <NavbarTitle>
      <NavLink href='/'>
        <DevDAOIcon>
            <Icon/>
        </DevDAOIcon>
      </NavLink>
      </NavbarTitle>
      <MainMenu>
        <Navs
          href='/jobs'
        >
          Job List
        </Navs>

        <Navs
          href='/developers'
        >
          Developers
        </Navs>

        <Navs
          href='/post-job'
        >
          Post a Job
        </Navs>
      </MainMenu>
    </NavBox>
  </Nav>
  )
};

const Nav = styled.nav`
  background-color: #F7FAFC;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: 10%;
  border-bottom: solid 2px #E2E8F0;
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

const DevDAOIcon = styled.div`
  border-radius: 180px;
  height: 1.5rem;
  width: 1.5rem;
  overflow: hidden;
`;

const NavbarTitle = styled.h1`
  display: inline;
  font-size: 0.875rem;
  color: #4A5568;
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
    background-color: #E6EBF2;
    color: black;
  }

  &:hover {
    color: gray;
    transition: 0.1s;
  }
`;

const MainMenu = styled.div`
  position: relative;
  top: 6%;
`;

const Hamburgermenu = styled.div`
  display: inline-block;
  align-items: right;
  text-align: right;
  float: right;
`;
