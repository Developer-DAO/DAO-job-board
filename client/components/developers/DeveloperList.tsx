import styled from "styled-components";

import { ListWrap, GridList, ListTop } from "../../styles";

import DeveloperItem from "./DeveloperItem";

export default function DeveloperList() {
  return (
    <ListWrap>
      <ListTop>Dev List</ListTop>
      <GridList>
        <DeveloperItem />
      </GridList>
    </ListWrap>
  );
}
