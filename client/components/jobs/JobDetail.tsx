import { ReactNode } from 'react';
import {
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
    bg: 'gray.700',
    color: 'white',
  },
});

const ApplyButton = chakra(Button, {
  baseStyle: {
    bg: 'gray.700',
    color: 'white',
    _hover: {
      bg: 'gray.800',
    },
    _active: {
      bg: 'gray.900',
    },
  },
});

export default function JobDetails() {
  return (
    <Stack
      maxW={{ base: '100%', lg: '70%' }}
      mx="auto"
      mt={8}
      px={3}
      as="main"
      align={{ base: 'center', lg: 'flex-start' }}
      justify="center"
      spacing={20}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Container as="article" mx="unset">
        <Stack spacing={12}>
          <Stack spacing={4}>
            <Heading fontSize="md" fontWeight="normal">
              Job Details
            </Heading>

            <Stack>
              <Heading as="h1" fontSize="2xl">
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
            <Heading fontSize="lg">Job Overview</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ullamcorper, augue at commodo interdum, mauris velit lobortis sem,
              consectetur cursus tellus turpis a nisi. Praesent iaculis
              elementum nisl, sit amet sodales ipsum congue ac. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec sodales
              imperdiet felis. Praesent et magna non ex porttitor pellentesque
              eu id ipsum. Proin aliquam orci sit amet libero eleifend placerat.
              Pellentesque volutpat lectus consequat porttitor fringilla. Mauris
              consequat fermentum justo in sollicitudin. Morbi vitae elementum
              odio. Nunc ut ultrices arcu, at condimentum nulla. Aenean et dolor
              in diam vehicula dignissim. Morbi aliquet nisl ut dolor aliquam
              gravida. Nulla dapibus auctor enim quis consectetur. Aliquam at
              augue id ex luctus vestibulum. Aenean sed urna est. Praesent
              iaculis mauris a eros rutrum viverra.
            </Text>
          </Stack>

          <Stack>
            <Heading fontSize="lg">Requirements</Heading>
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
            <Heading fontSize="lg">Responsibilities</Heading>
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
        w={{ base: '100%', md: '70%', lg: '365px' }}
        spacing={6}
        borderColor="gray.800"
        borderWidth={2}
        rounded="md"
        divider={
          <StackDivider borderColor="gray.400" borderWidth={2} rounded="md" />
        }
      >
        <Stack textAlign="center" spacing={3}>
          <Stack spacing={1}>
            <Heading as="h1">GitCoin</Heading>
            <Link fontSize="sm">Visit Website</Link>
          </Stack>
          <ApplyButton display={{ sm: 'none', md: 'block' }}>
            Apply For This Job
          </ApplyButton>
        </Stack>

        <Stack spacing={4}>
          <Detail title="Job Type">Full-Time</Detail>
          <Detail title="Location">California</Detail>
          <Detail title="Position">Marketing</Detail>
          <Detail title="Offered Salary">10,000—15,000 or 2-3 ETH</Detail>
          <Detail title="Equity">upto +5%</Detail>
        </Stack>
      </Stack>
      <Stack
        display={{ sm: 'flex', md: 'none' }}
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
        <ApplyButton w="70%">Apply For This Job</ApplyButton>
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
    <Stack spacing={1}>
      <Heading fontSize="md" fontWeight="light" color="gray.800">
        {title}
      </Heading>
      <Text fontWeight="medium" fontSize="1.2rem">
        {children}
      </Text>
    </Stack>
  );
};
