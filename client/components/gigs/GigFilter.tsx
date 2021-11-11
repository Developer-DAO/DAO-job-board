import {Box, Container, Text, Divider, Select, Input, Tag, TagLabel} from "@chakra-ui/react"

export default function GigFilter() {
  return (
    <Box
      position="fixed"
      maxW={{lg: "20%", md: "20%", sm:"25%"}}
      borderRadius="0"
      bg="none"
      padding="1%"
      textAlign="center"
    >
        <Container mb="5px">
          Filter by Name
        </Container>
        <Input
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          placeholder='e.g. startup, side project, etc.'
        />
        <Divider />
        <Text
          mt="5px"
          mb="5px"
        >By Reward</Text>
        <Select
        bgColor="white"
        >
          <option>ETH</option>
          <option>USDT</option>
        </Select>
        <Text
          mt="5px"
          mb="5px"
        >By Keyword</Text>

    </Box>
  );
}
