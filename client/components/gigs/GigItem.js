import styled from "styled-components";

import {
  ItemBox,
  Break,
  IconWrap,
  Title,
  Title2,
  Description,
  GridList,
} from "../../styles/styles";

export default function GigItem() {
  return (
    <GigItemBox>
      <GigItemGrid>
        <GigLink>
          <GigTitle>Gig Example</GigTitle>
        </GigLink>
        <GigItemElement>In Progress</GigItemElement>
      </GigItemGrid>
      <GigLink>
        <GigName>Gig Creator</GigName>
      </GigLink>
      <GigItemGrid>
        <GigItemElement>1 ETH</GigItemElement>
        <GigItemElement>3 Days</GigItemElement>
        <GigItemElement>Applicants</GigItemElement>
      </GigItemGrid>
    </GigItemBox>
  );
}

const GigItemBox = styled(ItemBox)`
  flex-grow: 2;
  width: 100%;
  border-radius: 0px;
`;

const GigLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    cursor: pointer;
  }
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
  text-align: left;
  font-size: 0.785rem;
`;

const GigItemGrid = styled(GridList)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 90%;
  margin-bottom: 2.5%;
  font-size: 14px;

  @media (max-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
    margin-left: 2.5%;
    font-size: 10px;
  }
`;
