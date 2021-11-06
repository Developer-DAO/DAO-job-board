import GigFilter from "../../components/gigs/GigFilter";
import GigItem from "../../components/gigs/GigItem";
import GigList from "../../components/gigs/GigList";
import { Box, Title, Description } from "../../styles";
import styled from "styled-components";

export default function Index() {
  return (
  <>
    <Title>Gigs</Title>
    <Description>
      A place to find contract work and freelance gigs.
    </Description>
    <GigBox>
      <GigFilter/>
      <GigList>
        <GigItem />
      </GigList>
    </GigBox>
  </>
  );
}

const GigBox = styled(Box)`
  display: flex;
  box-shadow: 0 0 0 0;
  background: none;
`;