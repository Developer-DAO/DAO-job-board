import { Box, Heading } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About = () => (
  <Box
    box-sizing="border-box"
    boxShadow="0 0 0 0"
    border="0"
    padding="2%"
    m="auto"
    mt="5%"
    textAlign="center"
  >
    <Heading>This is DevDAOs job list</Heading>
  </Box>
);

export default About;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
