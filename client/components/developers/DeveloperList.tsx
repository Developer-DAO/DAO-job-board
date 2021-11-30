import { Heading, Box, Grid } from '@chakra-ui/react';

import DeveloperItem from './DeveloperItem';

export default function DeveloperList() {
  return (
    <Box maxW={{ lg: '70%', md: '100%' }} textAlign="center" m="auto">
      <Heading>Dev List</Heading>
      <Grid
        templateColumns={{
          '2xl': 'repeat(4, 2fr)',
          lg: 'repeat(3, 2fr)',
          md: 'repeat(2, 2fr)',
          sm: 'repeat(1, 1fr)',
        }}
        gap="3"
        mx="auto"
        maxW="100%"
        py={3}
        px={5}
      >
        <DeveloperItem />
        <DeveloperItem />
        <DeveloperItem />
      </Grid>
    </Box>
  );
}
