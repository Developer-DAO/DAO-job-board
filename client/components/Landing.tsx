import { Image, Heading, Box } from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';

import {
  ButtonRed,
  ButtonGreen,
  ButtonBlue,
} from '../styles/ui-components/Chakra-Button';

export default function Landing() {
  const { t } = useTranslation('common');

  return (
    <Box>
      <Box w="auto" h="auto" m="auto" mt="2.5%">
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
          <ButtonGreen as="a">{t('landing.search_devs')}</ButtonGreen>
        </NextLink>

        <NextLink href="/post-job">
          <ButtonBlue as="a">{t('landing.post_job')}</ButtonBlue>
        </NextLink>

        <Heading m="10px" fontSize="28px">
          {t('landing.looking_for_work')}
        </Heading>
        <NextLink href="/jobs">
          <ButtonRed as="a">{t('landing.search_jobs')}</ButtonRed>
        </NextLink>
      </Box>
    </Box>
  );
}
