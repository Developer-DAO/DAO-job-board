import NextLink from 'next/link';
import NavTitle from './NavTitle';
import ConnectButton from './ConnectButton';

import {
  Box,
  Text,
  HStack,
  Heading,
  Select,
  Flex,
  IconButton,
  Avatar,
  Button,
} from '@chakra-ui/react';
import { useEthers } from '@usedapp/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { HamburgerIcon } from '@chakra-ui/icons';

import { Settings, ChevronDown, ChevronUp } from 'tabler-icons-react';

function Navbar({ sidebar, setUserPurpose }: any) {
  const { account } = useEthers();
  const router = useRouter();
  const { t } = useTranslation('common');

  const [isOpen, setIsOpen] = useState(false);
  const handlePurposeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const route = e.target.value == '/earn' ? 'jobs' : 'developers';
    setUserPurpose(e.target.value);
    router.push(route);
  };
  return (
    <Box ml={{ lg: '60', md: '0' }}>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        px="2"
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
          /**
           * @todo Add icon to select options.
           * @todo Update/remove route redirect from option onchange event as agreed upon
           * @todo Add onClick for profile settings and settings
           */
          <HStack
            align="center"
            color="neutral.400"
            borderX="1px"
            borderColor="neutral.200"
            h="full"
            borderRight="none"
          >
            <Select
              size="sm"
              border="none"
              w="75"
              onChange={(e) => handlePurposeChange(e)}
            >
              <option value="">- placeholder -</option>
              <option value="/earn">
                {t('components.navigation.navbar.seeking')}
              </option>
              <option value="/hire">
                {t('components.navigation.navbar.hiring')}
              </option>
            </Select>
            <HStack
              align="center"
              color="neutral.400"
              borderX="1px"
              borderColor="neutral.200"
              h="full"
              px={3}
            >
              <Avatar mx="2" size="sm" src="/DevDAO.png" cursor="pointer" />
              <Text
                w="7.5rem"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {account.slice(0, 4)}...{account.slice(account.length - 4)}
              </Text>
              {isOpen ? (
                <ChevronUp onClick={() => setIsOpen(!isOpen)} />
              ) : (
                <ChevronDown onClick={() => setIsOpen(!isOpen)} />
              )}
            </HStack>
            <Box px={3}>
              <Settings size={24} />
            </Box>
          </HStack>
        ) : (
          <ConnectButton />
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
