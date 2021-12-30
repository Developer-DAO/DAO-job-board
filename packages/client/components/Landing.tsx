import { Image, HStack, Heading, Box, Button } from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';

export default function Landing() {
  const { t } = useTranslation('common');

  return (
    <Box pos="relative" top="50">
      <Box w="auto" h="auto" m="auto">
        <Image
          borderRadius="180px"
          w="200"
          h="200"
          src="/DevDAO.png"
          alt="icon"
          m="auto"
        />
      </Box>

      <Box w="fit-content" m="auto" textAlign="center">
        <Heading m="10px" fontSize="28px">
          {t('landing.looking_for_talent')}
        </Heading>

        <HStack justifyContent="center" gap={2} m="auto" textAlign="center">
          <NextLink href="/developers">
            <Button
              cursor="pointer"
              color="white"
              bg="neutral.700"
              _hover={{ bg: 'neutral.500' }}
              as="a"
            >
              {t('landing.search_devs')}
            </Button>
          </NextLink>
          <NextLink href="/post-job">
            <Button
              cursor="pointer"
              color="white"
              bg="neutral.700"
              _hover={{ bg: 'neutral.500' }}
              as="a"
            >
              {t('landing.post_job')}
            </Button>
          </NextLink>
        </HStack>

        <Heading m="10px" fontSize="28px">
          {t('landing.looking_for_work')}
        </Heading>
        <NextLink href="/jobs">
          <Button
            cursor="pointer"
            color="white"
            bg="neutral.700"
            _hover={{ bg: 'neutral.500' }}
            as="a"
          >
            {t('landing.search_jobs')}
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
}
