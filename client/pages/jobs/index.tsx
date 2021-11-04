import JobFilter from "../../components/jobs/JobFilter";
import JobList from "../../components/jobs/JobList";
import { Title, Description } from "../../styles";

export default function Index() {
  return (
    <>
      <Title>Jobs</Title>
      <Description>
        Curated Web3 and blockchain jobs at companies or startups.
      </Description>
      <JobFilter />
      <JobList />
    </>
  );
}
