import { Text } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function NavTitle() {
  const { t } = useTranslation('common');
  const router = useRouter();

  const dynamicTitles: any = {
    '/': t('components.navigation.nav_title.dashboard'),
    '/developers': t('components.navigation.nav_title.devs_for_hire'),
    '/jobs': t('components.navigation.nav_title.jobs_list'),
    '/post-job': t('components.navigation.nav_title.post_job'),
    '/create-profile': t('components.navigation.nav_title.create_profile'),
  };
  return (
    <Text pl="1%" fontSize={{ lg: 'lg', sm: 'md' }}>
      {dynamicTitles[router.pathname]}
    </Text>
  );
}
