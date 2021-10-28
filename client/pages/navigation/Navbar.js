import styled from 'styled-components';

export default function Navbar() {
  return (
    <NavBox>
      <NavbarTitle>
        DevDAO Job Board
      </NavbarTitle>
    </NavBox>
  )
};

const NavBox = styled.div`
  display: block;
  background-color: #F7FAFC;
  justify-content: space-between;
  text-align: center;
  z-index: 1;
  width: 100%;
  height: 10%;
  border-bottom: solid 1px gray;
  opacity: 0.8;
  overflow: hidden;
`;

const NavbarTitle = styled.h1`
  display: block;
  float: left;
  font-size: 0.875rem;
  font-weight: bold;
  color: #4A5568;
`;

const Navs = styled.a`
  color: white;
  padding: 0.45rem;
  margin: 0 0.25rem;
  cursor: pointer;
  float: left;
  align-items: right;
  text-decoration: none;
  border-radius: 18px;

  &:focus {
    background-color: lightgray;
    color: black;
  }

  &:hover {
    color: gray;
  }
`;

const GeneralLinks = styled.div`
  display: inline-block;
  align-items: center;
  text-align: center;
  float: center;
`;

const AuthLinks = styled.div`
  display: inline-block;
  align-items: right;
  text-align: right;
  float: right;
`;
