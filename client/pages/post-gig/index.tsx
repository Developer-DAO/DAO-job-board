import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';

//The number in the file names tell you which step in the form they are
import GigBasics from 'components/post-gig/1_GigBasics';
import GigDetails from 'components/post-gig/2_GigDetails';
import GigSummary from 'components/post-gig/3_GigSummary';

type IFormData = {
  gigname: string;
  gigwebsite: string;
  gigdescription: string;
  gigcategory: string;
  gigreward: string;
  gigamount: string;
  gigtimeframe: string;
};

export default function CreateProject() {
  const [formData, setFormData] = useState<IFormData>({
    gigname: '',
    gigwebsite: '',
    gigdescription: '',
    gigcategory: '',
    gigreward: '',
    gigamount: '',
    gigtimeframe: '',
  });

  const [timeframeActive, setTimeframeActive] = useState(false);

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

  //Sent to GigBasics as a way to get out of Create Gig page.
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  // Turns timeframeActive state to true in order to allow people to add a specific timeframe to gigs. Sent to GigDetails as props.
  const addTimeframe = () => {
    setTimeframeActive(true);
  };

  // Handles state changes for inputs, selectors, and textarea
  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as any).name]: (e.target as any).value,
    });

  //Sends data to database (sent to GigSummary as props)
  const createGig = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      bg={{ lg: '#ffffff', sm: 'none' }}
      width={{ '2xl': '70%', lg: '70%', md: '90%', sm: '100%' }}
      margin="auto"
      boxSizing="border-box"
      boxShadow={{ lg: '0px 0px 2px 4px #e2e8f0', md: 'none' }}
      p="0.5%"
      borderRadius="18px"
      mt="2.5%"
    >
      <form>
        {basicsPage ? (
          <GigBasics
            goToDetails={goToDetails}
            goBack={goBack}
            formData={formData}
            onChange={onChange}
          />
        ) : null}

        {detailsPage ? (
          <GigDetails
            goToBasics={goToBasics}
            goToSummary={goToSummary}
            formData={formData}
            setFormData={setFormData}
            timeframeActive={timeframeActive}
            addTimeframe={addTimeframe}
            onChange={onChange}
          />
        ) : null}

        {summaryPage ? (
          <GigSummary
            formData={formData}
            goToDetails={goToDetails}
            goToBasics={goToBasics}
            createGig={createGig}
          />
        ) : null}
      </form>
    </Box>
  );
}
