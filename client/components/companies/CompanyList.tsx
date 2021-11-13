import {Heading, Container, Grid, Text, Link} from "@chakra-ui/react"
import CompanyItem from "./CompanyItem";

export default function CompanyList() {
  return (
    <Container
      maxW={{lg: "70%", md: "100%"}}
      textAlign="center"
    >
      <Heading>Companies and Startups</Heading>
      <Grid
      templateColumns={{"2xl":"repeat(4, 2fr)", sm: "repeat(2, 1fr)"}}
      gap="2"
      mx="auto"
      maxW="100%"
      py={3}
      px={5}
      >
        <CompanyItem />
        <CompanyItem />
      </Grid>
    </Container>
  );
};
