import { Box, Grid } from '@chakra-ui/react';

import DeveloperItem from './DeveloperItem';

export default function DeveloperList() {
  return (
    <Box
      position="relative"
      textAlign="center"
      m="auto"
      h="100%"
    >
      <Grid
        templateColumns={{
          '2xl': 'repeat(4, 2fr)',
          xl: 'repeat(3, 2fr)',
          lg: 'repeat(2, 2fr)',
          md: 'repeat(2, 2fr)',
          sm: 'repeat(1, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        gap={8}
        mx="auto"
        p={10}
      >
        <DeveloperItem />
        <DeveloperItem />
        <DeveloperItem />
        <DeveloperItem />
        <DeveloperItem />
        <DeveloperItem />
      </Grid>
    </Box>
  );
}
