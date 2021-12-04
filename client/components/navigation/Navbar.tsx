import NextLink from 'next/link';

import {
  Box,
  Avatar,
  Text,
  Link,
  Heading,
  Flex,
  IconButton,
} from '@chakra-ui/react';

import { useEthers } from '@usedapp/core';

import { HamburgerIcon } from '@chakra-ui/icons';

import { ButtonBlack } from '../../styles/ui-components/Chakra-Button';

function Navbar({ sidebar }: any) {
  const { account } = useEthers();

  return (
    <Box ml={{ lg: '60', md: '0' }}>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        px="4"
        bg="white"
        borderBottomWidth="1px"
        borderColor="gray.200"
        h="14"
      >
        <IconButton
          aria-label="Menu"
          display={{ lg: 'none', md: 'inline-flex' }}
          onClick={sidebar.onOpen}
          size="sm"
          icon={<HamburgerIcon />}
        />

        <Text m="auto" w="96" display={{ lg: 'block', sm: 'none' }}>
          <Heading size="md">Developers</Heading>
        </Text>

        {account ? (
          <Flex align="center">
            <Avatar mx="2" size="sm" src="/DevDAO.png" cursor="pointer" />
            <Text
              w={200}
              overflow="hidden"
              wordWrap="none"
              textOverflow="ellipsis"
            >
              {account}
            </Text>
          </Flex>
        ) : (
          <NextLink href={'/auth'} passHref>
            <Link display={{ sm: 'none', md: 'flex' }}>
              <ButtonBlack as="a">Sign Up</ButtonBlack>
            </Link>
          </NextLink>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
