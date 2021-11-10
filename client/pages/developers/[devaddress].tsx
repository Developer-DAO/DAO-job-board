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

// const ProfileLeft = styled(ItemBox)`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   width: 5%;
//   margin-left: 0%;
//   box-sizing: border-box;
//   box-shadow: 0 0 0 0;
//
//   @media (max-width: 650px) {
//     margin: auto;
//     background: none;
//     width: 100%;
//   }
// `;
//
// const ProfileLinks = styled.div`
//   height: auto;
//   text-align: center;
//
//   @media (max-width: 650px) {
//     width: 100%;
//   }
// `;
//
//  const ProfileCenter = styled.div`
//   display: flex;
//   flex-grow: 2;
//   flex-direction: column;
//   position: relative;
//   margin: auto;
//
//   @media (max-width: 650px) {
//     flex-grow: 1;
//     width: 100%;
//   }
//
// `;
//
// const BasicDataSection = styled.div`
//   display: flex;
// `;
//
// const ProfileName = styled(NameSection)`
//   font-size: 1rem;
// `;
//
// const ProfileType = styled.p`
//   display: inline;
//   font-weight: 100;
// `;
//
// const ProfileUser = styled.p`
//   margin: 0px;
//   font-weight: 100;
// `;
//
// const ProfileSkills = styled(GridList)`
//
//   @media (max-width: 650px) {
//   }
//
// `;
//
// const ProfileDescription = styled(ItemBox)`
//   text-align: left;
//   box-shadow: 0 0 0 0;
//   margin-left: 0;
//   margin-right: 0;
//   width: 100%;
//   background: none;
// `;
//
// const ProfileWebsite = styled.a`
//   font-size: 14px;
//   font-weight: 500;
//   text-decoration: none;
//   color: #323424;
//
//   &:hover {
//     color: #6e6e6e;
//   }
//
//   @media (max-width: 480px) {
//     font-size: 1rem;
//     float: none;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;
//
// const ProfileIcon = styled(Icon)`
//   font-size: 1.8rem;
//   margin-left: 10px;
//
//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;
//
// const ProfileLocation = styled.div`
//   text-align: center;
// `;
//
//  const SkillButton = styled(Button)`
//   font-size: 0.7rem;
//   margin: 1px;
//   border: 0;
//   border-radius: 8px;
// `;
