import { useState } from "react";
import {useRouter} from "next/router";
import { Box } from "../../styles";

//The number in the file names tell you which step in the form they are
import JobBasics from "../../components/post-job/1_JobBasics";
import JobDetails from "../../components/post-job/2_JobDetails";
import JobSummary from "../../components/post-job/3_JobSummary";

type IFormData = {
  jobtitle: string,
  jobdescription: string,
  jobtype: string,
  jobposition: string,
  jobcompensation: string,
  jobequity: string,
  joblocation: string,
  jobcontact: string
}

export default function CreateProject() {
  const [formData, setFormData] = useState({
    jobtitle: "",
    jobdescription: "",
    jobtype: "",
    jobposition: "",
    jobcompensation: "",
    jobequity: "",
    joblocation: "",
    jobcontact: ""
  });

  const [timeframeActive, setTimeframeActive] = useState(false);

  const [locationActive, setLocationActive] = useState(false);

  const addLocation = () => {
  setLocationActive(true);
  }

  //Page States will change depending on whether the user clicks on Continue or Back
  const [basicsPage, setBasicsPage] = useState(true);
  const [detailsPage, setDetailsPage] = useState(false);
  const [summaryPage, setSummaryPage] = useState(false);

  //Change Page on Click - either to Continue or go Back to previous components
  const goToBasics = () => {
    setBasicsPage(true);
    setDetailsPage(false);
    setSummaryPage(false);
  };

  const goToDetails = () => {
    setDetailsPage(true);
    setBasicsPage(false);
    setSummaryPage(false);
  };

  const goToSummary = () => {
    setSummaryPage(true);
    setDetailsPage(false);
  };

  //Sent to JobBasics as a way to get out of Create Gig page.
  const router = useRouter()
  const goBack = () => {
     router.back();
  };

  // Handles state changes for inputs, selectors, and textarea
  const onChange = (e: React.FormEvent) =>
    setFormData({ ...formData, [(e.target as any).name]: (e.target as any).value });

  //Sends data to database (sent to JobSummary as props)
  const createJob = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
      <Box>
        <form>
          {basicsPage ? (
            <JobBasics
              goToDetails={goToDetails}
              goBack={goBack}
              formData={formData}
              onChange={onChange}
            />
          ) : null}

          {detailsPage ? (
            <JobDetails
              goToBasics={goToBasics}
              goToSummary={goToSummary}
              formData={formData}
              setFormData={setFormData}
              locationActive={locationActive}
              addLocation={addLocation}
              onChange={onChange}
            />
          ) : null}

          {summaryPage ? (
            <JobSummary
              formData={formData}
              goToDetails={goToDetails}
              goToBasics={goToBasics}
              createJob={createJob}
              onChange={onChange}
            />
          ) : null}
        </form>
      </Box>
  );
}
