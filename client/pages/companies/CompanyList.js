import { Box, Break } from "../../styles/styles";
import CompanyItem from "./CompanyItem";

export default function CompanyList() {
  return (

    <Box style={{borderRadius: '0'}}>

      <CompanyItem/>
      <Break/>
      <CompanyItem/>
      <Break/>
    </Box>

  );
}
