import styled from 'styled-components';

import {Box, BoxTop, Title2, Input} from '../../styles/styles';

function JobFilter() {
  return (
    <FilterBox>
      <BoxTop>
        <Title2>Search</Title2>
        <FilterInput
          placeholder='Enter a keyword (e.g. Solidity, Web3, Full Stack, etc.)'
        />
      </BoxTop>
    </FilterBox>
  )
};

export default JobFilter;

const FilterBox = styled(Box)`
  border-box: none;
  box-shadow: none;
  background-color: inherit;
`;

const FilterInput = styled(Input)`
  font-size: 0.875rem;
  text-align: center;
  width: 40vw;
  margin: auto;

  @media (max-width: 650px) {
    width: 85vw;
    height: 2.5rem;
  }
`;
