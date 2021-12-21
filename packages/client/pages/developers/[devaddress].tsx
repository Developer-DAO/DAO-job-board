//Router
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  chakra,
  Box,
  Heading,
  Container,
  Flex,
  Text,
  Link,
  Image,
  SimpleGrid,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

export default function DeveloperPage() {
  const router = useRouter();

  return (
    <Box
      display="flex"
      bg={{ lg: '#ffffff', sm: 'none' }}
      flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
      width={{ '2xl': '70%', md: '90%', sm: '100%' }}
      margin="auto"
      boxSizing="border-box"
      boxShadow={{ lg: '0px 0px 2px 4px #e2e8f0', sm: 'none' }}
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
          src="/DevDAO.png"
          alt="developer"
        ></Image>

        <Link>Social Icons</Link>
        <Link>Website</Link>
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
        <Container p="0px" mt="5px" maxW={{ sm: '100%' }} display="inline-box">
          <Heading
            fontSize="1.5rem"
            w="fit-content"
            m={{ lg: '0px', md: '0px', sm: 'auto' }}
          >
            New Dev<chakra.span fontWeight="100"> - Developer</chakra.span>
          </Heading>
          <Text mb="10px" textAlign={{ lg: 'left', md: 'left', sm: 'center' }}>
            @devusername
          </Text>
        </Container>

        <Container
          p="0px"
          m="0"
          maxW={{ lg: 'auto', md: 'auto', sm: '100%' }}
          display="inline-box"
        >
          <Text textAlign={{ lg: 'left', md: 'left', sm: 'center' }}>
            Here goes a brief description of the user{' '}
          </Text>
        </Container>

        <SimpleGrid
          mt="15px"
          templateColumns="repeat(5, 2fr)"
          autoRows="fit-content"
          gap="0.5rem"
          spacing={1}
        >
          <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
            <TagLabel m="auto">Web3</TagLabel>
          </Tag>
          <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
            <TagLabel m="auto">Solidity</TagLabel>
          </Tag>
          <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
            <TagLabel m="auto">Rust</TagLabel>
          </Tag>
          <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
            <TagLabel m="auto">React</TagLabel>
          </Tag>
          <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
            <TagLabel m="auto">Full-Stack</TagLabel>
          </Tag>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export async function getStaticPaths() {
  // This function is here to render LHS navigation bar i18n.
  // Currently hard-coded until db is connected.
  /**
   * @todo Replace hard-coded paths with API call to developers/[devaddress]
   */
  return {
    paths: ['/developers/1', '/developers/2', '/developers/3'],
    fallback: false,
  };
}
