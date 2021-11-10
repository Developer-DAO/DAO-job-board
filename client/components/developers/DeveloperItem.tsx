//CSS and UI
import styled from "styled-components";

import {Box, Heading, Container, Flex, Text, Link, Image, SimpleGrid, Tag} from "@chakra-ui/react"

export default function DeveloperItem() {
  return (
      <Container
      bg="#ffffff"
      w="100%"
      margin="auto"
      textAlign="center"
      boxSizing="border-box"
      boxShadow="0px 0px 2px 4px #e2e8f0"
      p="2%"
      borderRadius="12px"
      >
        <Link
        href="/developers/developer1"
        _hover={{textDecoration: "none"}}
        >
            <Heading
              size="md"
            >Developer #1</Heading>
            <Container
            w="6rem"
            h="6rem"
            border="2px solid black"
            m="auto"
            borderRadius="180px"
            >
              <Image
                w="100%"
                h="100%"
                borderRadius="full"
                src="/DevDAO.png" />
            </Container>
          <Text>Available</Text>
        </Link>

        <SimpleGrid
        m="auto"
        columns={3}
        spacing={2}
        w="100%">
          <Tag
          size="lg"
          borderRadius="8px"
          variant="solid"
          bgColor="#E2E9F0"
          color="black"
          >Web3</Tag>
          <Tag
          size="lg"
          borderRadius="8px"
          variant="solid"
          bgColor="#E2E9F0"
          color="black"
          >Solidity</Tag>
          <Tag
          size="lg"
          borderRadius="8px"
          variant="solid"
          bgColor="#E2E9F0"
          color="black"
          >Rust</Tag>
        </SimpleGrid>
      </Container>
  );
}

// const DeveloperSkills = styled(GridList)`
//   grid-template-columns: repeat(3, 2fr);
//   grid-auto-rows: 2.5rem;
//   grid-gap: 0px;
//   margin-top: 5px;
//   height: fit-content;
//   overflow: visible;
//
//   @media (max-width: 650px) {
//     grid-template-columns: repeat(2, 2fr);
//   }
// `;
//
// const ItemTop = styled.div``;
//
// const SkillButton = styled(Button)`
//   font-size: 0.7rem;
//   margin: 1px;
//   border: 0;
//   border-radius: 8px;
// `;
//
// const DeveloperItemStatus = styled.em`
//   box-sizing: border-box;
//   border-radius: 12px;
//   width: min-content;
//   padding: 1px;
//   margin-left: auto;
//   margin-right: auto;
// `;
