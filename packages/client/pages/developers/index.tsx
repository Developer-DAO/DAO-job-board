import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DeveloperList from '@/components/developers/DeveloperList';

import { Box } from '@chakra-ui/react';

export default function Index() {
  return (
    <Box
      pt={{ '2xl': '5%', lg: '7%', sm: '17%', base: '15%' }}
      pl={{ '2xl': '5%', lg: '12%', sm: 'none', base: 'none' }}
      pb={{ '2xl': '10%', lg: '10%', md: '15%', sm: '20%', base: '15%' }}
    >
      <DeveloperList />
    </Box>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
