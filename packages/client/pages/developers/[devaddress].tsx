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
  const profileskills = ['Web3', 'Solidity', 'Rust', 'React', 'Full-Stack'];

  return (
    <Box
      bg="none"
      width={{ '2xl': '70%', lg: '70%', md: '90%', sm: '100%' }}
      margin="auto"
      pt={{ '2xl': '5%', lg: '7%', sm: '10%' }}
      pl={{ '2xl': '5%', lg: '12%', sm: 'none', base: 'none' }}
      boxSizing="border-box"
      p="0.5%"
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
            Here goes a brief user description
          </Text>
        </Container>

        <SimpleGrid
          mt="15px"
          templateColumns="repeat(5, 2fr)"
          autoRows="fit-content"
          gap="0.5rem"
          spacing={1}
        >
          {profileskills.map((skill, index) => (
            <Tag
              key={index}
              size="md"
              py="2.5%"
              backgroundColor="transparent"
              border="1px"
              borderColor="neutral.200"
              borderRadius="8px"
              color="neutral.400"
            >
              <TagLabel m="auto">{skill}</TagLabel>
            </Tag>
          ))}
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
    paths: ['/developers/developer1'],
    fallback: false,
  };
}
