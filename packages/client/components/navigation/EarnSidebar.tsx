import { useTranslation } from 'next-i18next';
import { Stack, Heading } from '@chakra-ui/react';
import {
  faClipboardList,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import NavLink from './NavLink';

export default function EarnSidebar() {
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
      <Stack borderTop="1px solid" borderColor="gray.200" borderWidth="100%">
        <Heading
          color="gray.300"
          letterSpacing="2px"
          font="Inter"
          justify="left"
          fontSize="xs"
          p="3"
          pl="5"
          mt={2}
        >
          {t('components.earn_sidebar.header')}
        </Heading>
        <NavLink
          path="/jobs"
          icon={faClipboardList}
          title={t('components.earn_sidebar.available_jobs')}
        />
        <NavLink
          path="/my_jobs"
          icon={faDollarSign}
          title={t('components.earn_sidebar.my_jobs')}
        />
        <NavLink
          path="/saved_jobs"
          icon={faHeart}
          title={t('components.earn_sidebar.saved_jobs')}
        />
      </Stack>

      <Stack alignSelf="flex-end"></Stack>
    </Stack>
  );
}
