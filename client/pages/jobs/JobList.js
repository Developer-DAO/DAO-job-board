//CSS STYLES & UI Components
import { Box, Title } from "../../styles/styles";
import JobItem from "./JobItem";

import styled from "styled-components";

function JobList() {
  return (
    <ListBox>
      <JobItem>TO BE BUILT</JobItem>
    </ListBox>
  );
}

export default JobList;

const ListBox = styled(Box)`
  box-shadow: 0 0 0 0;
  background: inherit;
`;
