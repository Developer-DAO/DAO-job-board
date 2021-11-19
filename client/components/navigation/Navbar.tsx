import React, { useState } from 'react';

import NextLink from 'next/link';

import {
  chakra,
  Link,
  LinkOverlay,
  Flex,
  HStack,
  Image,
  Button,
  VStack,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';

import { useEthers } from '@usedapp/core';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { ButtonBlack } from 'styles/ui-components/Chakra-Button';

function Navbar() {
    
  const hamburger = useDisclosure();
  const { account } = useEthers();
  
  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        justify="space-between"
        maxW={{ lg: '70%', md: '100%' }}
        align="center"
        mx="auto"
        py={3}
        px={5}
      >
        <NextLink
         href={"/"} passHref>
          <HStack
          as="a"
          display="flex"
          alignItems="center">
            <Image
              borderRadius="full"
              boxSize="30px"
              alt="Home"
              src="/DevDAO.png"
            />
            <chakra.span
              fontWeight="bold"
              fontSize="sm"
              color="gray.600"
              transition="color 300ms ease-in-out"
              _hover={{ color: 'black' }}
            >
              Job Board
            </chakra.span>
          </HStack>
        </NextLink>

        <IconButton
          aria-label={hamburger.isOpen ? 'Close menu' : 'Open menu'}
          display={{ sm: 'block', md: 'none' }}
          zIndex={11}
          onClick={hamburger.onToggle}
          icon={
            hamburger.isOpen ? (
              <CloseIcon w={7} h={7} />
            ) : (
              <HamburgerIcon w={6} h={6} />
            )
          }
        />

        {hamburger.isOpen && (
          <VStack
            position="fixed"
            zIndex={10}
            top={0}
            left={0}
            h="100%"
            w="100%"
            display={{ sm: 'flex', md: 'none' }}
            bg="white"
            spacing={10}
            fontSize="3xl"
            pt={20}
            onClick={hamburger.onClose}
          >
          <NextLink href={'/jobs'} passHref>
          <Link
            color="black"
            p="0.45rem"
            borderRadius="18px"
            _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
            _focus={{textDecoration: "none", border:"none"}}
            >Jobs</Link>
        </NextLink>
        <NextLink href={'/developers'} passHref>
          <Link
            color="black"
            p="0.45rem"
            borderRadius="18px"
            _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
            _focus={{textDecoration: "none", border:"none"}}
          >Devs</Link>
        </NextLink>
        <NextLink href={'/about'} passHref>
          <Link
            color="black"
            p="0.45rem"
            borderRadius="18px"
            _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
            _focus={{textDecoration: "none", border:"none"}}
            >About</Link>
        </NextLink>
        <NextLink href={"/auth"} passHref>
          <ButtonBlack
          as='a'>Sign Up</ButtonBlack>
        </NextLink>
      </VStack>
        )}

        <HStack 
          display={{ sm: 'none', md: 'flex' }}
          spacing={{ base: 2, sm: 7 }}>
          <NextLink href={'/jobs'} passHref>
            <Link
              color="black"
              p="0.45rem"
              borderRadius="18px"
              _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
              _focus={{ textDecoration: 'none', border: 'none' }}
            >
              Jobs
            </Link>
          </NextLink>
          <NextLink href={'/developers'} passHref>
            <Link
              color="black"
              p="0.45rem"
              borderRadius="18px"
              _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
              _focus={{ textDecoration: 'none', border: 'none' }}
            >
              Devs
            </Link>
          </NextLink>
          <NextLink href={'/about'} passHref>
            <Link
              color="black"
              p="0.45rem"
              borderRadius="18px"
              _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
              _focus={{ textDecoration: 'none', border: 'none' }}
            >
              About
            </Link>
          </NextLink>
        </HStack>

        {account ? (
          <>{account}</>
        ) : (
          <NextLink href={'/auth'} passHref>
            <Link display={{ sm: 'none', md: 'flex' }}>
            <ButtonBlack as="a">Sign Up</ButtonBlack>
            </Link>
          </NextLink>
        )}
      </Flex>
    </chakra.nav>
  );
}

export default Navbar;
