import { ListWrap, ListTop, GridList } from "../../styles";
import CompanyItem from "./CompanyItem";

export default function CompanyList() {
  return (
    <ListWrap>
      <ListTop>Partners</ListTop>
      <GridList>
        <CompanyItem />
        <CompanyItem />
      </GridList>
    </ListWrap>
  );
}
