import JobList from './JobList';
import JobFilter from './JobFilter';

import {Title, Description} from '../../styles/styles';

export default function Index() {
  return (
    <>
      <Title>
        Jobs
      </Title>
      <Description>
        Curated Web3 and blockchain jobs at  companies or startups.       
      </Description>
      <JobFilter/>
      <JobList/>
    </>
  )
}
