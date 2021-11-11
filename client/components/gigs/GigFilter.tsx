import {Box, Container, Text, Divider, Select, Input, Tag, TagLabel} from "@chakra-ui/react"

export default function GigFilter() {
  return (
    <Box
      position="fixed"
      w={{lg: "20%", sm:"25%"}}
      borderRadius="0"
      border=""
      bg="none"
      padding="1%"
      textAlign="center"
    >
      <Container mb="5px">
        Filter Gigs
      </Container>
      <Input
        h="1rem"
        w="90%"
        mb="5%"
        placeholder='Search timeframe, reward, skills needed, etc.'
      >
      </Input>
      <Divider />
      <Text
        mt="5px"
        mb="5px"
      >Token{' '}</Text>
      <Select>
        <option>ETH</option>
        <option>USDT</option>
      </Select>
    </Box>
  );
}

// const GigBoxTop = styled(BoxTop)`
//   font-size: 1rem;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;
//
// const GigFilterInput = styled(Input)`
//   height: 1rem;
//   width: 90%;
// `;
