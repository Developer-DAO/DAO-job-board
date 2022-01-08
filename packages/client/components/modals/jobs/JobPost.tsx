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
    <Grid
      gridTemplateColumns="repeat(2, 1fr)"
      w="100%"
      border="1px"
      borderColor="neutral.200"
    >
      <Stack
        textAlign="justify"
        borderRight="1px"
        borderColor="neutral.200"
        h="full"
        p="20px"
      >
        <Heading
          fontSize="subheader"
          color="neutral.400"
          fontWeight="semibold"
          letterSpacing="4px"
        >
          JOB DESCRIPTION
        </Heading>
        <Text fontSize="body3">{description}</Text>
      </Stack>

      <Grid gridTemplateRows="repeat(2, 1fr)">
        <Box
          textAlign="justify"
          borderBottom="1px"
          borderColor="neutral.200"
          w="100%"
          p="20px"
        >
          <Heading
            fontSize="subheader"
            color="neutral.400"
            fontWeight="semibold"
            letterSpacing="4px"
          >
            RESPONSIBILITIES
          </Heading>
        </Box>

        <Box textAlign="justify" p="20px">
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
      >
        Ignore
      </Button>
    </Stack>
  );
};
