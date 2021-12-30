import { Image, Heading, Box, Button } from '@chakra-ui/react';

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

      <Box textAlign="center">
        <Heading m="10px" fontSize="28px">
          {t('landing.looking_for_talent')}
        </Heading>
        <NextLink href="/developers">
          <Button as="a">{t('landing.search_devs')}</Button>
        </NextLink>

        <NextLink href="/post-job">
          <Button as="a">{t('landing.post_job')}</Button>
        </NextLink>

        <Heading m="10px" fontSize="28px">
          {t('landing.looking_for_work')}
        </Heading>
        <NextLink href="/jobs">
          <Button as="a">{t('landing.search_jobs')}</Button>
        </NextLink>
      </Box>
    </Box>
  );
}
