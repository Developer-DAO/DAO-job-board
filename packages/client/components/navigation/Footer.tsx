import { Box, HStack, Image, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex
      pos="absolute"
      bottom={0}
      left={0}
      right={0}
      h="14"
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
        <Text>Powered by</Text>
        <Flex>
          <Image
            src="/vercel-logo.png"
            alt="Vercel"
            width="100px"
            height="22px"
          />
        </Flex>
      </HStack>
    </Flex>
  );
}
