import NextLink from 'next/link';

import NavTitle from './NavTitle';

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

import { ButtonNeutral } from '../../styles/ui-components/Chakra-Button';

function Navbar({ sidebar }: any) {
  const { account } = useEthers();

  return (
    <Box ml={{ lg: '60', md: '0' }}>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        px="4"
        bg="utility.light80"
        borderBottomWidth="1px"
        borderColor="gray.200"
        h="14"
      >
        <IconButton
          aria-label="Menu"
          display={{ lg: 'none', md: 'inline-flex' }}
          onClick={sidebar.isOpen ? sidebar.onClose : sidebar.onOpen}
          size="sm"
          icon={<HamburgerIcon />}
        />

        <Text m="none" w="96">
          <Heading size="md" textAlign={{ lg: 'left', md: 'center' }}>
            <NavTitle />
          </Heading>
        </Text>

        {account ? (
          <Flex align="center">
            <Avatar mx="2" size="sm" src="/DevDAO.png" cursor="pointer" />
            <Text
              w="7.5rem"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {account}
            </Text>
          </Flex>
        ) : (
          <NextLink href={'/auth'} passHref>
            <Link display={{ sm: 'none', md: 'flex' }}>
              <ButtonNeutral as="a">Sign Up</ButtonNeutral>
            </Link>
          </NextLink>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
