import GigFilter from '../../components/gigs/GigFilter';
import GigItem from '../../components/gigs/GigItem';

import {
  Box,
  Heading,
  Container,
  Flex,
  Text,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

export default function Index() {
  return (
    <>
      <Container m="auto" textAlign="center">
        <Heading>Gigs</Heading>
        <Text as="i">A place to find contract work and freelance gigs.</Text>
      </Container>
      <Box
        display="flex"
        bg="gray.50"
        flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
        maxW={{ lg: '70%', md: '100%' }}
        alignContent="space-between"
        margin="auto"
        boxSizing="border-box"
        boxShadow="none"
        p="0.5%"
        mt="1.5%"
      >
        <Box flex={1} m={{ lg: '0', md: '0', sm: 'auto' }}>
          <GigFilter />
        </Box>
        <Box
          flex={3}
          w="auto"
          display="flex"
          bg="none"
          flexDirection="column"
          boxShadow="none"
        >
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
          <GigItem />
        </Box>
      </Box>
    </>
  );
}
