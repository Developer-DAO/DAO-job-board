import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Landing from '@/components/Landing';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div>
      <Head>
        <title>{t('common.title')}</title>
        <meta
          name="DeveloperDAO Job Board"
          content="A place to find web3 work and web3 talent"
        />
        <link rel="icon" href="/DeveloperDaoFavicon.ico" />
      </Head>

      <Landing />
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
