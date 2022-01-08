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

type CompanyInfo = {
  name: string;
  organization_description: string;
  logo_url: string;
};

type Jobinfo = {
  closeJobModal: () => void;
  compensation: string;
  description: string;
  position: string;
  companyInfo: CompanyInfo[];
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
      p={5}
      m="auto"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%);"
      w={{ '2xl': '50%', sm: '80%' }}
      h="fit-content"
      textAlign="center"
      bg="neutral.100"
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
    <Grid>
      <Box textAlign="justify">
        <Text fontSize="body3">{description}</Text>
      </Box>
    </Grid>
  );
};

const JobModalFooter = ({ closeJobModal }: any) => {
  return (
    <Stack>
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
      >
        Ignore
      </Button>
    </Stack>
  );
};
