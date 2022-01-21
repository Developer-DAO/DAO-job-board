import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  Avatar,
  Box,
  Code,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SocialBadge } from '@/components/profile-page/SocialBadge';

export default function DeveloperPage() {
  const profileskills = ['Web3', 'Solidity', 'Rust', 'React', 'Full-Stack'];

  return (
    <Box padding={12}>
      <HStack w="100%">
        <VStack alignItems="left" borderRight="0.5px solid #ccc" pr="5rem">
          <Avatar size="xl" name="Ollie Martin" />

          <Heading>Ollie Martin</Heading>
          <Text>Front-end developer @ abc.finance</Text>

          <HStack>
            <SocialBadge platform="twitter" username="ollie_martin" />
            <SocialBadge platform="github" username="ollie_martin" />
            <SocialBadge platform="discord" username="ollie_martin" />
          </HStack>

          <Text>Indonesia GMT+7</Text>

          <Heading size="md">Portfolio</Heading>
          <SocialBadge platform="github" username="ollie_martin" />
          <SocialBadge platform="github" username="ollie_martin" />

          <Code>olliemartin.eth (0x68b34...D8665Fc45)</Code>
        </VStack>

        <VStack alignItems="left" pl="3rem">
          <Heading size="md">About Me</Heading>
          <Text width="50%">
            I caught fire coding. <br />
            <br /> I love applying responsive design principles and watching my
            web pages shrink into mobile screens and still look amazing.
            It&apos;s oddly satisfying. I think in a way I’m kind of like those
            web pages; I&apos;m moldable, but I still keep my creative flare
            intact.
          </Text>

          <Spacer mt="20rem" />

          <HStack spacing={10}>
            <VStack alignItems="left">
              <Heading size="md">Achievements & POAPs</Heading>
              <p>POAP Cards go here</p>
            </VStack>

            <VStack alignItems="left">
              <Heading size="md">Skills</Heading>
              <p>Skills here</p>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
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
