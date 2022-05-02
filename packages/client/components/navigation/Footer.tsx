import { Box, HStack, Image, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export default function Footer() {
  return (
    <StickyFooterFlex
      as="footer"
      bg="utility.light80"
      borderTopWidth="1px"
      borderColor="gray.200"
      align="center"
      justifyContent="center"
    >
      <HStack
        as="a"
        href="https://vercel.com/?utm_source=devdaojobboard&utm_campaign=oss"
        fontSize="sm"
      >
        <Flex>
          <Image
            src="/powered-by-vercel.svg"
            alt="Powered By Vercel"
            width="100px"
            height="50"
          />
        </Flex>
      </HStack>
    </StickyFooterFlex>
  );
}

// keep the footer at bottom even when scrolling
const StickyFooterFlex = styled(Flex)`
  position: 'relative';
  height: 20;
  margin-top: -20;
  clear: both;
`;
