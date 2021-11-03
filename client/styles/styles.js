import styled from "styled-components";

export const Box = styled.div`
  box-sizing: border-box;
  border: 0px solid #000000;
  box-shadow: 0px 0px 4px 2px #e2e8f0;
  background: #ffffff;
  border-radius: 18px;
  width: 70%;
  height: fit-content;
  padding: 1%;
  padding-top: 0.2%;
  padding-bottom: 0.2%;
  margin: auto;
  margin-top: 2.5%;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    box-shadow: 0 0 0 0;
    height: 100%;
    margin: auto;
    padding: 0%;
    width: 100%;
    background: #F7FAFC;
  }
`;

export const IconWrap = styled.div`
  border-radius: 180px;
  overflow: hidden;
`;

export const Hero = styled.section`
  text-align: center;
  margin: auto;
  margin-top: 2.5%;
`;
export const Copy = styled.div`
  margin: auto;
  max-width: 60%;

  @media (max-width: 650px) {
    margin: auto;
    top: 5rem;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 1.75rem;
`;

export const Title2 = styled.h2`
  color: gray;
  font-size: 1.5rem;
`;

export const Description = styled.div`
  position: relative;
  top: 20%;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2%;
`;

export const List = styled.li`
  margin: 10px;
  margin-left: -25px;
`;

export const Input = styled.input`
  position: relative;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  width: 98%;
  height: 50px;
  font-size: 1rem;
  font-family: "InterVariable";
  padding: 5px;

  &::focus {
    border-color: #97c0e6;
  }
`;

export const LinkWrap = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Break = styled.hr`
  opacity: 0.25;
  width: 100%;

`;

export const BoxTop = styled.div`
  position: relative;
  top: -20%;
  font-size: 1rem;
  text-align: center;
`;

export const ItemBox = styled.div`
  display: grid;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: fit-content;
  padding: 0.5rem;
  box-shadow: 0px 0px 4px 2px #E2E8F0;
  background: #FFFFFF;
  border-radius: 18px;
  background-color: white;
  z-index: 1;

  @media (max-width: 650px) {
    width: 95%;
  }
`;

export const BoxWrap = styled.div`
  padding: 0.5rem;
  background: #FFFFFF;
  background-color: white;
  overflow: hidden;
  height: auto;
  z-index: 1;

  @media (max-width: 650px) {
    position: absolute;
    top: 10vh;
    width: fit-content;
    box-shadow: none;
  }
`;

export const ItemTop = styled.div`
`;

export const LinkCover = styled.a`
  text-decoration: none;
  color: black;
`;

export const NameSection = styled.h3`
  margin: 5px;
`;

export const ProfileImageCover = styled.div`
  width: 6rem;
  height: 6rem;
  border: 2px solid black;
  margin: auto;
  border-radius: 180px;
  background-color: black;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 180px;
  object-fit: cover;
`;

export const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-auto-rows: fit-content;
  grid-gap: 0.5rem;

  @media (max-widtH: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-auto-rows: fit-content;
  };

  @media (max-width: 650px) {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
      grid-auto-rows: fit-content;
      grid-gap: 1rem;
  };

  @media (max-width: 380px) {
      display: grid;
      grid-template-columns: repeat(1, 2fr);
      grid-auto-rows: fit-content;
  };
`;

export const ListWrap = styled.div`
  height: 100vh;
  z-index: 1;
  width: 70%;
  margin: auto;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    position: absolute;
    top: 10vh;
    box-shadow: none;
  }
`;

export const ListTop = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;
