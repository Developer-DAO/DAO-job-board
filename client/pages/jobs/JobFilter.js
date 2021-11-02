import styled from 'styled-components';

import {Box, Title, Input} from '../../styles/styles';

function JobFilter() {
  return (
    <JobFilterBox>
      <Title>TO BE BUILT</Title>
      <Input
        placeholder='Enter a keyword (e.g. Solidity, Web3, Full Stack, etc.)'
        style={{width: '50%', margin: 'auto'}}
      />
    </JobFilterBox>
  )
};

export default JobFilter;

const JobFilterBox = styled(Box)`

`;
