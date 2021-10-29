import styled from 'styled-components';

import DeveloperItem from './DeveloperItem';

export default function DeveloperList() {
  return (
    <DevListBox>
      <DevListTop>
      </DevListTop>

      <DevGrids>
        <DeveloperItem/>
      </DevGrids>
    </DevListBox>
  )
}

const DevListBox = styled.div`
  overflow: hidden;
  height: 100vh;
  z-index: 1;

  @media (max-width: 650px) {
    position: absolute;
    top: 10vh;
    width: fit-content;
    box-shadow: none;
  }
`;

const DevListTop = styled.div`
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
