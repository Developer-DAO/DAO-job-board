import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DeveloperList from '@/components/developers/DeveloperList';

export default function Index() {
  return <DeveloperList />;
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
