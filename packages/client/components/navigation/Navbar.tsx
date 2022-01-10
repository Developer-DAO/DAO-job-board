import NavTitle from './NavTitle';
import ConnectButton from './ConnectButton';
import { supabase } from '@/common/supabase';

import {
  Box,
  Grid,
  Text,
  HStack,
  Heading,
  Select,
  Flex,
  IconButton,
  Avatar,
  Button,
  GridItem,
} from '@chakra-ui/react';
import { useEthers } from '@usedapp/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

import { HamburgerIcon } from '@chakra-ui/icons';

import { Settings, ChevronDown, ChevronUp } from 'tabler-icons-react';

function Navbar({ sidebar, setUserPurpose }: any) {
  const router = useRouter();
  const { setUser } = useAuth();

  const { account, deactivate } = useEthers();

  useEffect(() => {
    if (account) {
      const performAuth = async () => {
        const response = await fetch('/api/auth', {
          method: 'POST',
          body: JSON.stringify({ walletAddress: account }),
        });

        if (response.status !== 200) {
          deactivate();
        }

        const result = await response.json();
        if (result.id) {
          setUser(result);
          const { data, error } = await supabase
            .from('users')
            .upsert(result, { onConflict: 'id' });
        }
      };
      performAuth();
    }
  }, [account, deactivate, setUser, router]);
  const { t } = useTranslation('common');

  const [isOpen, setIsOpen] = useState(false);
  const handlePurposeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const route = e.target.value == '/earn' ? 'jobs' : 'developers';
    setUserPurpose(e.target.value);
    router.push(route);
  };
  return (
    <Box ml={{ lg: '72', md: '0' }}>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
        as="header"
        bg="utility.light80"
        borderBottomWidth="1px"
        borderColor="gray.200"
        h="14"
      >
        <GridItem
          w="100%"
          h="14"
          alignItems="center"
          colSpan={3}
          d="flex"
          pl={4}
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
        </GridItem>

        <GridItem
          w="100%"
          h="14"
          justifyContent="flex-end"
          alignItems="center"
          colSpan={2}
          d="flex"
        >
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
              w="100%"
              justifyItems="stretch"
              h="full"
              borderRight="none"
            >
              <Select
                size="sm"
                border="none"
                w="75"
                onChange={(e) => handlePurposeChange(e)}
                flex="1"
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
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Navbar;