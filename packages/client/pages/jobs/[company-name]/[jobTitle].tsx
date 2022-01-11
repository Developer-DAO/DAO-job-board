import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import React, { ReactNode } from 'react';
import {
  ButtonGroup,
  Button,
  chakra,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  StackDivider,
  Tag,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const CategoryTag = chakra(Tag, {
  baseStyle: {
    bg: 'black',
    color: 'white',
  },
});

export default function JobDetails() {
  return (
    <Stack
      maxW={{ sm: '100%', lg: '70%' }}
      mx="auto"
      px={3}
      pt={{ '2xl': '5%', lg: '7%', sm: '10%' }}
      pl={{ '2xl': '5%', lg: '12%', sm: 'none', base: 'none' }}
      as="main"
      align={{ sm: 'center', lg: 'flex-start' }}
      justify="center"
      spacing={20}
      direction={{ sm: 'column', lg: 'row' }}
    >
      <Container
        as="article"
        mx="auto"
        maxW="90%"
        ml={{ '2xl': '0', sm: 'auto' }}
      >
        <Stack spacing="jumbo">
          <Stack spacing="medium">
            <Heading variant="header5" fontWeight="normal">
              Job Details
            </Heading>

            <Stack>
              <Heading as="h1" variant="header4">
                Marketing Manager
              </Heading>
              <HStack>
                <CategoryTag>Marketing</CategoryTag>
                <CategoryTag>Full-Time</CategoryTag>
                <CategoryTag>Blockchain</CategoryTag>
              </HStack>
            </Stack>
          </Stack>

          <Stack>
            <Heading variant="header5">Job Overview</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ullamcorper, augue at commodo interdum, mauris velit lobortis sem.
            </Text>
          </Stack>

          <Stack>
            <Heading variant="header5">Requirements</Heading>
            <UnorderedList>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItem>
            </UnorderedList>
          </Stack>

          <Stack>
            <Heading variant="header5">Responsibilities</Heading>
            <UnorderedList>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItem>
            </UnorderedList>
          </Stack>
        </Stack>
      </Container>

      <Stack
        as="aside"
        p={7}
        w={{ sm: '70%', md: '70%', lg: '365px' }}
        spacing="xl"
        borderColor="gray.800"
        borderWidth={2}
        rounded="md"
        divider={
          <StackDivider borderColor="gray.400" borderWidth={2} rounded="md" />
        }
      >
        <Stack textAlign="center" spacing="small">
          <Stack spacing="micro">
            <Heading as="h1">GitCoin</Heading>
            <Link fontSize="sm">Visit Website</Link>
          </Stack>
          <ButtonGroup
            display={{ lg: 'flex', sm: 'none' }}
            flexDirection="column"
          >
            <Button
              color="white"
              bg="neutral.700"
              _hover={{ bg: 'neutral.500' }}
            >
              Apply For This Job
            </Button>
          </ButtonGroup>
        </Stack>

        <Stack spacing="medium">
          <Detail title="Job Type">Full-Time</Detail>
          <Detail title="Location">California</Detail>
          <Detail title="Position">Marketing</Detail>
          <Detail title="Offered Salary">10,000—15,000 USD or 2-3 ETH</Detail>
          <Detail title="Equity">Up to +5%</Detail>
        </Stack>
      </Stack>

      <Stack
        display={{ sm: 'flex', lg: 'none' }}
        w="100vw"
        position="sticky"
        bottom={0}
        bg="#f7fafc"
        left={0}
        py="6"
        borderTopColor="gray.800"
        borderTopWidth={2}
        align="center"
      >
        <ButtonGroup w="70%" display="flex" flexDirection="column" m="auto">
          <Button color="white" bg="neutral.700" _hover={{ bg: 'neutral.500' }}>
            Apply For This Job
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

const Detail = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Stack spacing="micro">
      <Heading fontSize="md" fontWeight="light" color="gray.800">
        {title}
      </Heading>
      <Text fontWeight="medium" fontSize="1.2rem">
        {children}
      </Text>
    </Stack>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export async function getStaticPaths() {
  // This function is here to render LHS navigation bar i18n.
  // Currently hard-coded until db is connected.
  /**
   * @todo Replace hard-coded paths with API call to [companyName]/[jobTitle]
   */
  return {
    paths: ['/jobs/username/marketing-manager'],
    fallback: false,
  };
}
