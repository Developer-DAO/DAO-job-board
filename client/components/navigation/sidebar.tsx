import {
  Box,
  Text,
  VStack,
  Stack,
  Link,
  Heading,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { CloseIcon } from '@chakra-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClipboardList, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const sidebar = useDisclosure();

  return (
    <VStack
      position="fixed"
      color="black"
      bg="white"
      h="100vh"
      w="250px"
      p="1%"
      overflow="none"
      borderRight="1px solid"
      borderColor="gray.200"
    >
      <IconButton
        aria-label="Close Sidebar"
        bg="none"
        alignSelf="flex-end"
        icon={
          <CloseIcon color="gray.300" bg="none" _hover={{ color: '#000000' }} />
        }
        onClick={sidebar.onToggle}
        color="black"
        _hover={{ bg: 'none' }}
      />

      <Stack borderWidth="0px" w="100%">
        <Heading
          color="gray.300"
          letterSpacing="2px"
          font="Inter"
          justify="left"
          fontSize="sm"
        >
          RECRUITER
        </Heading>
        <NextLink href={'/developers'} passHref>
          <Link
            color="gray.400"
            p="0.45rem"
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
            <FontAwesomeIcon icon={faUsers} /> Devs
          </Link>
        </NextLink>
      </Stack>

      <Stack borderWidth="0px" w="100%">
        <Heading
          color="gray.300"
          letterSpacing="2px"
          font="Inter"
          justify="left"
          fontSize="sm"
        >
          SEEKER
        </Heading>
        <NextLink href={'/jobs'} passHref>
          <Link
            color="gray.400"
            p="0.45rem"
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
            <FontAwesomeIcon icon={faClipboardList} /> Jobs List
          </Link>
        </NextLink>
      </Stack>

      <Stack
        borderWidth="0px"
        w="110%"
        borderTop="1px solid"
        borderColor="gray.200"
        textAlign="center"
      >
        <NextLink href={'/jobs'} passHref>
          <Link
            color="gray.400"
            p="0.45rem"
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
            <FontAwesomeIcon icon={faClipboardList} /> Jobs List
          </Link>
        </NextLink>
      </Stack>
    </VStack>
  );
}
