import React, { useState } from 'react';
import {
  chakra,
  Link,
  LinkOverlay,
  Flex,
  HStack,
  Image,
  Button,
  VStack,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { ButtonBlack } from '../../styles/ui-components/Chakra-Button';

function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        justify="space-between"
        maxW={{ lg: '70%', md: '100%' }}
        align="center"
        mx="auto"
        minW="xl"
        py={3}
        px={5}
      >
        <Link
          _hover={{ textDecoration: 'none' }}
          _focus={{ textDecoration: 'none', border: 'none' }}
          href="/"
          zIndex={11}
        >
          <HStack as="a" display="flex" alignItems="center">
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
        </Link>

        <Button bg="gray.300" display={{ sm: 'block', md: 'none' }} zIndex={11}>
          {isHamburgerOpen ? (
            <CloseIcon
              h={6}
              w={6}
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            />
          ) : (
            <HamburgerIcon
              h={7}
              w={7}
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            />
          )}
        </Button>
        {isHamburgerOpen && (
          <VStack
            position="fixed"
            zIndex={10}
            top={0}
            left={0}
            h="100%"
            w="100%"
            bg="white"
            spacing={10}
            fontSize="3xl"
            pt={20}
          >
            <Link
              color="black"
              p="0.45rem"
              m="0 0.25rem"
              cursor="pointer"
              textDecoration="none"
              borderRadius="18px"
              href="/gigs"
            >
              Gigs
            </Link>
            <Link
              color="black"
              p="0.45rem"
              m="0 0.25rem"
              cursor="pointer"
              textDecoration="none"
              borderRadius="18px"
              href="/jobs"
            >
              Jobs
            </Link>

            <Link
              color="black"
              p="0.45rem"
              m="0 0.25rem"
              cursor="pointer"
              textDecoration="none"
              borderRadius="18px"
              href="/developers"
            >
              Devs
            </Link>
            <Link
              color="black"
              p="0.45rem"
              m="0 0.25rem"
              cursor="pointer"
              textDecoration="none"
              borderRadius="18px"
              href="/companies"
            >
              Companies
            </Link>
            <Link
              color="black"
              p="0.45rem"
              m="0 0.25rem"
              cursor="pointer"
              textDecoration="none"
              borderRadius="18px"
              href="/about"
            >
              About
            </Link>
            <Link textDecoration="none" href="/auth">
              <ButtonBlack>Sign Up</ButtonBlack>
            </Link>
          </VStack>
        )}

        <HStack
          spacing={{ base: 2, sm: 7 }}
          display={{ sm: 'none', md: 'block' }}
        >
          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            borderRadius="18px"
            href="/gigs"
          >
            Gigs
          </Link>
          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            borderRadius="18px"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            href="/jobs"
          >
            Jobs
          </Link>

          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            borderRadius="18px"
            href="/developers"
          >
            Devs
          </Link>
          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            borderRadius="18px"
            href="/companies"
          >
            Companies
          </Link>
          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            borderRadius="18px"
            href="/about"
          >
            About
          </Link>
          <Link textDecoration="none" href="/auth">
            <ButtonBlack>Sign Up</ButtonBlack>
          </Link>
        </HStack>
      </Flex>
    </chakra.nav>
  );
}

export default Navbar;
