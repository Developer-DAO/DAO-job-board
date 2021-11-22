import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';

//The number in the file names tell you which step in the form they are
import JobBasics from '../../components/forms/post-job/1_JobBasics';
import JobDetails from '../../components/forms/post-job/2_JobDetails';
import JobSummary from '../../components/forms/post-job/3_JobSummary';

type IFormData = {
  jobtitle: string;
  jobdescription: string;
  jobtype: string;
  jobposition: string;
  jobcompensation: string;
  jobmax: string;
  jobmin: string;
  jobequity: string;
  joblocation: string;
  jobcontact: string;
};

export default function CreateProject() {
  const [formData, setFormData] = useState({
    jobtitle: '',
    jobdescription: '',
    jobtype: '',
    jobposition: '',
    jobcompensation: '',
    jobmax: '',
    jobmin: '',
    jobequity: '',
    joblocation: '',
    jobcontact: '',
  });

  //Job Keywords
  const [jobKeywords, setJobKeywords] = useState();

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
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  // Handles state changes for inputs, selectors, and textarea
  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as any).name]: (e.target as any).value,
    });

  //Sends data to database (sent to JobSummary as props)
  const createJob = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      bg={'none'}
      width={{ '2xl': '70%', lg: '70%', md: '90%', sm: '100%' }}
      margin="auto"
      boxSizing="border-box"
      p="0.5%"
      borderRadius="18px"
    >
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
            jobKeywords={jobKeywords}
            setJobKeywords={setJobKeywords}
            formData={formData}
            setFormData={setFormData}
            onChange={onChange}
          />
        ) : null}

        {summaryPage ? (
          <JobSummary
            formData={formData}
            jobKeywords={jobKeywords}
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
