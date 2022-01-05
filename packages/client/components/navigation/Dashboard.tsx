import { useTranslation } from 'next-i18next';
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
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from './Navbar';

import { faClipboardList, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  const { t } = useTranslation('common');
  const sidebar = useDisclosure();

  /**
   * @todo Add default userPurpose based on default user onboarding choice
   */
  const [userPurpose, setUserPurpose] = useState('');
  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg="utility.light80"
      borderColor="gray.200"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex
        align="center"
        borderBottom="1px solid"
        borderColor="neutral.200"
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
            color="neutral.500"
            fontFamily="Calibri"
            display="flex"
          >
            <Image
              src="./DevDAO.png"
              w="7"
              h="7"
              borderRadius="180px"
              marginX="1"
            />
            {t('components.navigation.dashboard.header')}
            <Text color="primary.500">{userPurpose}</Text>
          </Link>
        </NextLink>
      </Flex>

      <Stack
        direction="column"
        as="nav"
        fontSize="sm"
        color="neutral.600"
        aria-label="Main Navigation"
        spacing="xs"
      >
        <Stack mt="5%">
          <Heading
            color="neutral.300"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            p="3"
            pl="5"
          >
            {t('components.navigation.dashboard.hiring')}
          </Heading>
          <NextLink href={'/developers'} passHref>
            <Link
              onClick={sidebar.onClose}
              color="neutral.300"
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
                <FontAwesomeIcon icon={faUsers} />{' '}
                {t('components.navigation.dashboard.devs')}
              </Text>
            </Link>
          </NextLink>
        </Stack>

        <Stack borderTop="1px solid" borderColor="gray.200" borderWidth="100%">
          <Heading
            color="neutral.300"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            p="3"
            pl="5"
            mt={2}
          >
            {t('components.navigation.dashboard.seeking')}
          </Heading>
          <NextLink href={'/jobs'} passHref>
            <Link
              onClick={sidebar.onClose}
              p="2"
              pl="5"
              color="neutral.300"
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
                <FontAwesomeIcon icon={faClipboardList} />{' '}
                {t('components.navigation.dashboard.jobs_list')}
              </Text>
            </Link>
          </NextLink>
        </Stack>

        <Stack alignSelf="flex-end"></Stack>
      </Stack>
    </Box>
  );

  return (
    <Box as="section" w="100%" pos="fixed" top="0" zIndex={9998}>
      <SidebarContent
        display={{ lg: 'unset', md: 'none', sm: 'none', base: 'none' }}
        transition="0.5s ease"
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay
          display={{
            '2xl': 'none',
            lg: 'none',
            md: 'unset',
            sm: 'unset',
            base: 'unset',
          }}
        />
        <DrawerContent
          display={{
            '2xl': 'none',
            lg: 'none',
            md: 'unset',
            sm: 'unset',
            base: 'unset',
          }}
        >
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      <Navbar sidebar={sidebar} setUserPurpose={setUserPurpose} />
    </Box>
  );
}
