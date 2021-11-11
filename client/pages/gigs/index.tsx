import GigFilter from "../../components/gigs/GigFilter";
import GigItem from "../../components/gigs/GigItem";
import GigList from "../../components/gigs/GigList";

import {Box, Heading, Container, Flex, Text, Tag, TagLabel} from "@chakra-ui/react"

export default function Index() {
  return (
  <>
    <Container m="auto" textAlign="center">
      <Heading>Gigs</Heading>
      <Text as="i">
        A place to find contract work and freelance gigs.
      </Text>
    </Container>
    <Box
      display="flex"
      bg="gray.50"
      direction={{sm: "column"}}
      width={{"2xl": "70%", md: "90%", sm: "100%"}}
      margin="auto"
      boxSizing="border-box"
      boxShadow="none"
      p="0.5%"
      mt="2.5%"
    >
      <GigFilter
        flex={1}
      />
      <Flex
        bg="none"
        direction="column"
        width="100%"
        margin="auto"
        boxSizing="border-box"
        boxShadow="none"
        flex={2}
      >
        <GigItem />
        <GigItem />
        <GigItem />
      </Flex>
    </Box>
  </>
  );
};
