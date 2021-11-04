import styled from 'styled-components';

import {
  ItemBox,
  Break,
  IconWrap,
  Title,
  Title2,
  Description,
  GridList
} from '../../styles/styles';

export default function GigItem() {
  return (
    <GigItemBox>
        <GigTitle>Gig Example</GigTitle>
        <GigName>Gig Creator</GigName>
        <GigItemGrid>
          <GigItemElement>
            1 ETH
          </GigItemElement>
          <GigItemElement>
            3 Days
          </GigItemElement>
          <GigItemElement>
            Applicants
          </GigItemElement>
        </GigItemGrid>
    </GigItemBox>
  )
}

const GigItemBox = styled(ItemBox)`
  width: 100%;
  border-radius: 0;
`;

const GigTitle = styled(Title)`
  font-size: 1rem;
  text-align: left;
`;

const GigName = styled(Title2)`
  font-size: 0.8rem;
  text-align: left;
`;

const GigItemElement = styled.p`
  margin-left: -60%;
  font-size: 0.785rem;
`;

const GigItemGrid = styled(GridList)`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1rem;
width: 90%;
margin-bottom: 2.5%;
font-size: 14px;

@media (max-width: 650px) {
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 2rem;
  width: 90%;
  margin-left: 2.5%;
  font-size: 10px;
}
`;
