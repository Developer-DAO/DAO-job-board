//Router
import { useRouter } from "next/router";

import {Box, Heading, Container, Flex, Text, Link, Image, SimpleGrid, Tag, TagLabel} from "@chakra-ui/react"

export default function DeveloperPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <Box
      display="flex"
      bg={{lg: "#ffffff", sm:"none"}}
      direction={{sm: "column"}}
      width={{"2xl": "70%", md: "90%", sm: "100%"}}
      margin="auto"
      boxSizing="border-box"
      boxShadow={{lg: "0px 0px 2px 4px #e2e8f0", sm: "none"}}
      p="0.5%"
      mt="2.5%"
    >

      <Flex
      bg="none"
      direction="column"
      width="100%"
      margin="auto"
      textAlign="center"
      boxSizing="border-box"
      boxShadow="none"
      flex={1}
      >
          <Image
          w="8rem"
          h="8rem"
          margin="auto"
          borderRadius="180px"
          src="/DevDAO.png">
          </Image>

        <Link>
          Social Icons
        </Link>
        <Link>
          Website
        </Link>
      </Flex>

      <Flex
        bg="none"
        direction="column"
        width="100%"
        margin="auto"
        boxSizing="border-box"
        boxShadow="none"
        flex={2}
      >
        <Container
          p="0px"
          m="0"
          display="inline-box"
        >
          <Heading
            fontSize="1.5rem"
            w="fit-content"
          >
            New Dev<span style={{fontWeight: "100"}}>{' '}- Developer</span></Heading>
          <Text
          mb="10px"
          >
            @devusername
          </Text>
        </Container>

        <Container
          p="0px"
          m="0"
          display="inline-box"
        >
          <Text>Here goes a brief description of the user </Text>
        </Container>


      <SimpleGrid
      mt="15px"
      templateColumns="repeat(5, 2fr)"
      autoRows="fit-content"
      gap="0.5rem"
      spacing={1}>
        <Tag
        size="md"
        borderRadius="8px"
        bgColor="#E2E9F0"
        color="black"
        ><TagLabel m="auto">Web3</TagLabel></Tag>
        <Tag
        size="md"
        borderRadius="8px"
        bgColor="#E2E9F0"
        color="black"
        ><TagLabel m="auto">Solidity</TagLabel></Tag>
        <Tag
        size="md"
        borderRadius="8px"
        bgColor="#E2E9F0"
        color="black"
        ><TagLabel m="auto">Rust</TagLabel></Tag>
        <Tag
        size="md"
        borderRadius="8px"
        bgColor="#E2E9F0"
        color="black"
        ><TagLabel m="auto">React</TagLabel></Tag>
        <Tag
        size="md"
        borderRadius="8px"
        bgColor="#E2E9F0"
        color="black"
        ><TagLabel m="auto">Full-Stack</TagLabel></Tag>
      </SimpleGrid>

      </Flex>

    </Box>
  );
}
