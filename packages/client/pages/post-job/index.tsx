import { useState } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box } from '@chakra-ui/react';
import { Keyword } from '@/types';

//The number in the file names tell you which step in the form they are
import JobBasics from '@/components/forms/post-job/1_JobBasics';
import JobDetails from '@/components/forms/post-job/2_JobDetails';
import JobSummary from '@/components/forms/post-job/3_JobSummary';
import { supabase } from '@/common/supabase';

export default function CreateProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    position: '',
    compensation: '',
    max: '',
    min: '',
    equity: '',
    location: '',
    contact: '',
    created_by: '',
  });

  //Job Keywords
  const [jobKeywords, setJobKeywords] = useState<any>();

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
      [(e.target as HTMLTextAreaElement).name]: (
        e.target as HTMLTextAreaElement
      ).value,
    });

  //Sends data to database (sent to JobSummary as props)
  const createJob = async (e: React.FormEvent) => {
    let user = await supabase.from('users').select('id');
    e.preventDefault();

    const { data, error } = await supabase.from('jobs').upsert({
      ...formData,
      created_by: user['data']![0].id,
      linkable_type: 'users',
      linkable_id: user['data']![0].id,
    });
  };

  return (
    <Box
      bg={'none'}
      width={{ '2xl': '70%', lg: '70%', md: '90%', sm: '100%' }}
      margin="auto"
      pt={{ '2xl': '5%', lg: '7%', sm: '10%' }}
      pl={{ '2xl': '5%', lg: '12%', sm: 'none', base: 'none' }}
      boxSizing="border-box"
      p="0.5%"
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
            jobKeywords={jobKeywords as Keyword[]}
            setJobKeywords={setJobKeywords}
            formData={formData}
            onChange={onChange}
          />
        ) : null}

        {summaryPage ? (
          <JobSummary
            formData={formData}
            jobKeywords={jobKeywords as any}
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

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
