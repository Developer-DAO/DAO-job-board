import styled from "styled-components";
import { Box, ItemBox, BoxTop, Title2, Input, Break, Selector } from "../../styles/styles";

export default function GigFilter() {
  return (
    <GigFilterBox>
      <GigBoxTop>
        Filter Gigs
      </GigBoxTop>
      <GigFilterInput
        placeholder='Search timeframe, reward, skills needed, etc.'
      >
      </GigFilterInput>
      <Break/>
      Token{' '}
      <Selector>
        <option>ETH</option>
        <option>USDT</option>
      </Selector>
    </GigFilterBox>
  );
}

const GigFilterBox = styled(Box)`
  position: fixed;
  width: 20%;
  flex-grow: 1;
  border-radius: 0;
  background: none;
  padding: 1%;
  text-align: center;

  @media (max-width: 900px) {
    width: 25%;
  }
`;

const GigBoxTop = styled(BoxTop)`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const GigFilterInput = styled(Input)`
  height: 1rem;
  width: 90%;
`;
