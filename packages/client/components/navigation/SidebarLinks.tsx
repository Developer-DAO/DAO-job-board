import { Button, Stack, Link, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { faClipboardList, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from 'next/link';

export default function SidebarLinks() {
  const { t } = useTranslation('common');

  return (
    <Stack
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
      spacing={2}
    >
      <Stack mt="5%">
        <Heading
          color="gray.300"
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
            color="neutral.400"
            p="2"
            pl="5"
            w="100%"
            borderRadius="0px"
            _hover={{
              textDecoration: 'none',
              color: 'black',
              borderLeft: '5px solid primary.500',
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

      <Stack borderTop="1px solid" borderColor="neutral.500" borderWidth="100%">
        <Heading
          color="neutral.400"
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
        <NextLink href={'/post-job'} passHref>
          <Button
              color="white"
              bg="neutral.700"
              _hover={{ bg: 'neutral.500' }}
            >
              Apply For This Job
            </Button>
        </NextLink>
        <NextLink href={'/jobs'} passHref>
          <Link
            p="2"
            pl="5"
            color="neutral.500"
            w="100%"
            borderRadius="0px"
            _hover={{
              textDecoration: 'none',
              color: 'black',
              borderLeft: '5px solid primary.500',
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
  );
}
