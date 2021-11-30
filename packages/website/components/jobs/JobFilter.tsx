import { Box, Container, Input } from '@chakra-ui/react';

function JobFilter() {
  return (
    <Box mt="2.5%">
      <Container my="5px">
        <Input
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          placeholder="Search a keyword (e.g. Solidity, Front-End, Full-Stack, etc.)"
        />
      </Container>
    </Box>
  );
}

export default JobFilter;
