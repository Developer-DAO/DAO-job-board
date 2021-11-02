import { ListWrap, ListTop, Break, GridList} from "../../styles/styles";
import CompanyItem from "./CompanyItem";
import styled from 'styled-components';

export default function CompanyList() {
  return (
    <ListWrap>
      <ListTop>
        Partners
      </ListTop>
      <GridList>
        <CompanyItem/>
        <CompanyItem/>
      </GridList>
    </ListWrap>
  );
}
