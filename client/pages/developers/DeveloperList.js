import styled from 'styled-components';

import DeveloperItem from './DeveloperItem';

export default function DeveloperList() {
  return (
    <DevList>
      <DevListTop>
        DevDAO Devs
      </DevListTop>
      <DevGrids>
        <DeveloperItem/>
      </DevGrids>
    </DevList>
  )
}

const DevList = styled.div`
  height: 100vh;
  z-index: 1;
  width: 70%;
  margin: auto;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    position: absolute;
    top: 10vh;
    box-shadow: none;
  }
`;

const DevListTop = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const DevGrids = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-auto-rows: fit-content;
  grid-gap: 1rem;

  @media (max-widtH: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-auto-rows: fit-content;
  };

  @media (max-width: 650px) {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
      grid-auto-rows: fit-content;
      grid-gap: 1rem;
  };
`;
