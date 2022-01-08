import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
  Stack,
  Button,
  Grid,
} from '@chakra-ui/react';

import { definitions } from '@/types/supabase';

type Jobinfo = {
  closeJobModal: () => void;
  compensation: string;
  description: string;
  position: string;
  companyInfo: definitions['organizations'];
};

export default function JobPostModal({
  closeJobModal,
  compensation,
  description,
  position,
  companyInfo,
}: Jobinfo) {
  return (
    <Stack
      position="fixed"
      borderRadius="18px"
      m="auto"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%);"
      w={{ '2xl': '50%', sm: '80%' }}
      h="fit-content"
      textAlign="center"
      bg="utility.light80"
      zIndex="modal"
    >
      <JobModalHeader
        position={position}
        compensation={compensation}
        companyInfo={companyInfo}
      />
      <JobModalContent description={description} />
      <JobModalFooter closeJobModal={closeJobModal} />
    </Stack>
  );
}

const JobModalHeader = ({ position, compensation, companyInfo }: any) => {
  return (
    <HStack textAlign="start">
      <Image
        h="4rem"
        w="4rem"
        borderRadius="10px"
        m="30px"
        src={companyInfo.logo_url}
      />

      <VStack alignItems="left">
        <Heading fontSize="header5">
          {position} - {companyInfo.name}
        </Heading>
        <Text fontSize="caption" color="neutral.400" fontWeight="semibold">
          {compensation} / month
        </Text>
      </VStack>
    </HStack>
  );
};

const JobModalContent = ({ description }: any) => {
  return (
    <Grid
      gridTemplateColumns="repeat(2, 1fr)"
      w="100%"
      bgColor="neutral.200"
      borderY="1px solid"
      borderColor="neutral.200"
      gap="1px"
    >
      <Stack textAlign="justify" bgColor="utility.light80" h="full" p="20px">
        <Heading variant="subheader">JOB DESCRIPTION</Heading>
        <Text fontSize="body3">{description}</Text>
      </Stack>

      <Grid gridTemplateRows="repeat(2, 1fr)" gap="1px">
        <Box textAlign="justify" bgColor="utility.light80" w="100%" p="20px">
          <Heading
            fontSize="subheader"
            color="neutral.400"
            fontWeight="semibold"
            letterSpacing="4px"
          >
            RESPONSIBILITIES
          </Heading>
        </Box>

        <Box textAlign="justify" p="20px" bgColor="utility.light80">
          <Heading
            fontSize="subheader"
            color="neutral.400"
            fontWeight="semibold"
            letterSpacing="4px"
          >
            SKILLS
          </Heading>
        </Box>
      </Grid>
    </Grid>
  );
};

const JobModalFooter = ({ closeJobModal }: any) => {
  return (
    <Stack p="20px">
      <Button
        color="white"
        bgColor="neutral.900"
        _hover={{ bgColor: 'neutral.500' }}
      >
        Apply for Job
      </Button>
      <Button
        color="white"
        bgColor="danger.500"
        _hover={{ color: 'black', bgColor: 'danger.300' }}
        onClick={closeJobModal}
      >
        Ignore
      </Button>
    </Stack>
  );
};
