import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
//The number in the file names tell you which step in the form they are

const JobBasics = dynamic(
  () => import('../../components/post-job/1_JobBasics')
);
const JobDetails = dynamic(
  () => import('../../components/post-job/2_JobDetails')
);
const JobSummary = dynamic(
  () => import('../../components/post-job/3_JobSummary')
);

import type { JobFormData } from '@/types';
export default function CreateProject() {
  const [formData, setFormData] = useState<JobFormData>({
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
  });
  const [step, setStep] = useState(1);
  const createJob = () => {
    console.log(formData);
  };
  let Form: null | JSX.Element = null;

  if (step == 2) {
    Form = (
      <JobDetails
        setStep={setStep}
        setFormData={setFormData}
        formData={formData}
      />
    );
  } else if (step == 3) {
    Form = (
      <JobSummary
        setStep={setStep}
        setFormData={setFormData}
        formData={formData}
        createJob={createJob}
      />
    );
  } else {
    Form = (
      <JobBasics
        setStep={setStep}
        setFormData={setFormData}
        formData={formData}
      />
    );
  }

  return (
    <Box
      bg={'none'}
      width={{ '2xl': '70%', lg: '70%', md: '90%', sm: '100%' }}
      margin="auto"
      boxSizing="border-box"
      p="0.5%"
      borderRadius="18px"
      mt="2.5%"
    >
      {Form}
    </Box>
  );
}
