import JobFilter from "../../components/jobs/JobFilter";
import JobList from "../../components/jobs/JobList";

import {Heading, Container, Text} from "@chakra-ui/react"

export default function Index() {
  return (
    <Container
    maxW="auto"
    textAlign="center">
      <Heading>Jobs</Heading>
      <Text as="i">
        Curated Web3 and blockchain jobs at companies or startups.
      </Text>
      <JobFilter />
      <JobList />
    </Container>
  );
}
