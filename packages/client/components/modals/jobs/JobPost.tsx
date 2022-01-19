import {
  Heading,
  Image,
  Text,
  HStack,
  VStack,
  Stack,
  Button,
  Grid,
  TagLabel,
  Tag,
} from '@chakra-ui/react';

import { definitions } from '@/types/supabase';

type Jobinfo = {
  closeJobModal: () => void;
  compensation: string;
  description: string;
  position: string;
  companyInfo: definitions['organizations'];
  technologyTags: Array<string>;
};

export default function JobPostModal({
  closeJobModal,
  compensation,
  description,
  position,
  companyInfo,
  technologyTags,
}: Jobinfo) {
  return (
    <Stack
      position="fixed"
      borderRadius="18px"
      m="auto"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%);"
      w="80%"
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
      <JobModalContent
        technologyTags={technologyTags}
        description={description}
      />
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
        <Heading variant="header5">
          {position} - {companyInfo.name}
        </Heading>
        <Text fontSize="caption" color="neutral.400" fontWeight="semibold">
          {compensation} / month
        </Text>
      </VStack>
    </HStack>
  );
};

const JobModalContent = ({ description, technologyTags }: any) => {
  return (
    <Grid
      gridTemplateColumns={{
        lg: 'repeat(2, 1fr)',
        base: 'repeat(1, minmax(150px, 1fr))',
      }}
      w="100%"
      bgColor="neutral.200"
      borderY="1px solid"
      borderColor="neutral.200"
      gap="1px"
    >
      <Stack textAlign="justify" bgColor="utility.light80" h="full" p="20px">
        <Heading variant="subheader" fontSize="12px">
          JOB DESCRIPTION
        </Heading>
        <Text fontSize="body4">{description}</Text>
      </Stack>

      <Grid gridTemplateRows="repeat(2, 1fr)" gap="1px">
        <Stack
          gap="5px"
          textAlign="justify"
          bgColor="utility.light80"
          w="100%"
          p="20px"
        >
          <Heading variant="subheader" fontSize="12px">
            REQUIREMENTS
          </Heading>
        </Stack>

        <Stack gap="5px" textAlign="justify" p="20px" bgColor="utility.light80">
          <Heading variant="subheader" fontSize="12px">
            SKILLS
          </Heading>
          <Grid gap="10px" gridTemplateColumns="repeat(5, 1fr)">
            {technologyTags?.map((tag: string, index: any) => (
              <Tag
                key={`technology-tag-${index}`}
                w="fit-content"
                size="md"
                p="8px"
                backgroundColor="transparent"
                border="1px"
                borderColor="neutral.200"
                borderRadius="8px"
                color="neutral.400"
                minWidth="max-content"
              >
                <TagLabel m="auto">{tag}</TagLabel>
              </Tag>
            ))}
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

const JobModalFooter = ({ closeJobModal }: any) => {
  return (
    <Stack p="20px">
      <Button as="a" variant="neutral" href="/jobs/gitcoin/marketing-manager">
        Apply for Job
      </Button>
      <Button variant="danger" onClick={closeJobModal}>
        Ignore
      </Button>
    </Stack>
  );
};
