import styled from 'styled-components';

import {ListWrap, GridList, ListTop} from '../../styles/styles';

import DeveloperItem from './DeveloperItem';

export default function DeveloperList() {
  return (
    <ListWrap>
      <ListTop>
        DevDAO Devs
      </ListTop>
      <GridList>
        <DeveloperItem/>
      </GridList>
    </ListWrap>
  )
}
