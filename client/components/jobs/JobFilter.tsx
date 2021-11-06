import styled from "styled-components";

import { Box, BoxTop, Input } from "../../styles";

function JobFilter() {
  return (
    <FilterBox>
      <FilterBoxTop>
        <FilterInput placeholder="Search a keyword (e.g. Solidity, Front-End, Full-Stack, etc.)" />
      </FilterBoxTop>
    </FilterBox>
  );
}

export default JobFilter;

const FilterBox = styled(Box)`
  border-box: none;
  box-shadow: none;
  background-color: inherit;
`;

const FilterBoxTop = styled(BoxTop)`
  text-align: center;
  margin: auto;
  max-width: 50%;
`;

const FilterInput = styled(Input)`
  font-size: 0.875rem;
  text-align: left;
  width: 25vw;
  margin: auto;
  font-family: "Calibri";

  @media (max-width: 900px) {
    width: 40vw;
    font-size: 0.8rem;
  }

  @media (max-width: 650px) {
    width: 50vw;
    height: 2.5rem;
  }
`;
