import { Box, Break, GridList} from "../../styles/styles";
import CompanyItem from "./CompanyItem";

export default function CompanyList() {
  return (
      <GridList>
        <CompanyItem/>
        <CompanyItem/>
      </GridList>
  );
}
