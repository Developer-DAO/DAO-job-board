import {
  Stack,
  Box,
  Link,
  Heading,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import Navbar from './Navbar';
import HireSidebar from './HireSidebar';
import EarnSidebar from './EarnSidebar';

export default function Dashboard() {
  const sidebar = useDisclosure();
  let isHiring = true;
  /**
   * @todo Replace isHiring value with toggle value. Remove onClick
   */
  const onClick = () => {
    isHiring = !isHiring;
  };
  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="100000000"
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
        <NextLink href="/" passHref>
          <Link
            _hover={{
              textDecoration: 'none',
            }}
            m="auto"
            color="gray.500"
            font="IBM Plex Mono"
            display="flex"
            onClick={onClick}
          >
            <Image
              src="./DevDAO.png"
              w="7"
              h="7"
              borderRadius="180px"
              marginX="1"
            />
            jobsBoard<Box color="#4E00EC">/{isHiring ? 'hire' : 'earn'}</Box>
          </Link>
        </NextLink>
      </Flex>

      {isHiring ? <HireSidebar /> : <EarnSidebar />}
    </Box>
  );

  return (
    <Box as="section" w="100%" pos="fixed" zIndex="100000000">
      <SidebarContent
        display={{ lg: 'unset', md: 'none', sm: 'none' }}
        transition="0.5s ease"
      />
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
      <Navbar sidebar={sidebar} />
    </Box>
  );
}
