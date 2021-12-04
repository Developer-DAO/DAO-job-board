import {
  Avatar,
  Stack,
  Box,
  Link,
  Heading,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faClipboardList,
  faUsers,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  const sidebar = useDisclosure();

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      borderColor="gray.200"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex
        align="center"
        borderBottom="1px solid"
        borderColor="gray.200"
        borderWidth="100%"
        p="2%"
        h="14"
        m="auto"
      >
        <Text m="auto" color="gray.500" fontFamily="Calibri" display="flex">
          <Image
            src="./DevDAO.png"
            w="7"
            h="7"
            borderRadius="180px"
            marginX="1"
          />
          Job Board
        </Text>
      </Flex>

      <Stack
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        spacing={2}
      >
        <Stack mt="5%">
          <Heading
            color="gray.300"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            p="3"
            pl="5"
          >
            RECRUITER
          </Heading>
          <NextLink href={'/developers'} passHref>
            <Link
              color="gray.400"
              p="2"
              pl="5"
              w="100%"
              borderRadius="0px"
              _hover={{
                textDecoration: 'none',
                color: 'black',
                borderLeft: '5px solid #4E00EC',
              }}
              _focus={{ textDecoration: 'none', border: 'none' }}
              transition="0.2s"
            >
              <Text size="md">
                <FontAwesomeIcon icon={faUsers} /> Devs
              </Text>
            </Link>
          </NextLink>
        </Stack>

        <Stack borderTop="1px solid" borderColor="gray.200" borderWidth="100%">
          <Heading
            color="gray.300"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            p="3"
            pl="5"
            mt={2}
          >
            SEEKER
          </Heading>
          <NextLink href={'/jobs'} passHref>
            <Link
              p="2"
              pl="5"
              color="gray.400"
              w="100%"
              borderRadius="0px"
              _hover={{
                textDecoration: 'none',
                color: 'black',
                borderLeft: '5px solid #4E00EC',
              }}
              _focus={{ textDecoration: 'none', border: 'none' }}
              transition="0.2s"
            >
              <Text size="md">
                <FontAwesomeIcon icon={faClipboardList} /> Jobs List
              </Text>
            </Link>
          </NextLink>
        </Stack>

        <Stack alignSelf="flex-end"></Stack>
      </Stack>
    </Box>
  );

  return (
    <Box as="section" minH="100vh" w="100%" pos="fixed">
      <SidebarContent display={{ sm: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={sidebar.onOpen}
            size="sm"
          />
          <InputGroup w="96" display={{ base: 'none', md: 'flex' }}>
            <InputLeftElement color="gray.500">
              <FontAwesomeIcon icon={faSearch} />
            </InputLeftElement>
            <Input placeholder="Search for jobs..." />
          </InputGroup>

          <Flex align="center">
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
