//CSS STYLES & UI Components
import JobItem from "./JobItem";

import styled from "styled-components";
import { Box } from "../../styles";

function JobList() {
  return (
    <ListBox>
      <JobItem/>
      <JobItem/>
      <JobItem/>
      <JobItem/>
    </ListBox>
  );
}

export default JobList;

const ListBox = styled(Box)`
  box-shadow: 0 0 0 0;
  background: inherit;
`;
