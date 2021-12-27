import NextLink from 'next/link';
import NavTitle from './NavTitle';

import {
  Box,
  Text,
  Link,
  HStack,
  Heading,
  Select,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { useEthers } from '@usedapp/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { HamburgerIcon } from '@chakra-ui/icons';
import { ButtonNeutral } from '../../styles/ui-components/Chakra-Button';
import { Settings } from 'tabler-icons-react';

function Navbar({ sidebar, setUserPurpose }: any) {
  const { account } = useEthers();
  const router = useRouter();
  const { t } = useTranslation('common');

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
          /**
           * @todo Add icon to select options. Add onClick for profile settings and settings
           */
          <HStack
            align="center"
            color="neutral.400"
            borderX="1px"
            borderColor="neutral.200"
            px={3}
          >
            <Select
              size="sm"
              border="none"
              w="75"
              onChange={(e) => handlePurposeChange(e)}
            >
              <option value="/earn">
                {t('components.navigation.navbar.seeking')}
              </option>
              <option value="/hire">
                {t('components.navigation.navbar.hiring')}
              </option>
            </Select>
            <Text
              w="7.5rem"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {account.slice(0, 4)}...{account.slice(account.length - 4)}
            </Text>
            <Box>
              <Settings size={24} />
            </Box>
          </HStack>
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
