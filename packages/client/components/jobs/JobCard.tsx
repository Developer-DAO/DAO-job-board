import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  Tag,
  TagLabel,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import { Job } from '../../types/job';
import { Heart } from 'tabler-icons-react';
import { useState } from 'react';

import JobPostModal from '../modals/jobs/JobPost';

const JobCard = (props: Job) => {
  const technologyTags = ['Solidity', 'EthersJS', 'React', 'Rust'];
  // Organization data is hardcoded as I am not currently aware of how this data will be pulled in.
  const companyInfo = {
    name: 'Company Name',
    organization_description: 'NFT Marketplace',
    logo_url: '/DevDAO.png',
  };

  //To Open and the Job Post Modal
  const [jobModal, setJobModal] = useState(false);

  const openJobModal = () => {
    setJobModal(true);
  };

  const closeJobModal = () => {
    setJobModal(false);
  };

  return (
    <>
      {jobModal && (
        <Modal isOpen={jobModal} onClose={closeJobModal} motionPreset="none">
          <ModalOverlay onClick={closeJobModal} />
          <ModalContent>
            <JobPostModal
              technologyTags={technologyTags}
              closeJobModal={closeJobModal}
              compensation={props.compensation}
              description={props.description}
              position={props.position}
              companyInfo={companyInfo as any}
            />
          </ModalContent>
        </Modal>
      )}

      <Box
        key={props.id}
        border="1px"
        borderColor="neutral.200"
        borderRadius="6px"
        boxSizing="border-box"
        transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-out"
        _hover={{
          transform: props.id ? 'translateY(6px)' : 'translateY(0)',
          boxShadow: props.id ? '0px 16px 20px rgba(0, 0, 0, 0.1)' : '',
        }}
        height={{
          md: 'fit-content',
          base: 'max-content',
        }}
        w="100%"
        textAlign="left"
        bg="white"
        minW="300px"
        maxW="320px"
      >
        <JobHeader props={props} />
        <Box ml="0.5%" maxW="100%" px="20px" py="40px" onClick={openJobModal}>
          <Heading variant="header5" mb="1.5%" pb="1">
            {props.position}
          </Heading>
          <HStack mb="15px">
            <Text
              fontSize="sm"
              display="inline-flex"
              color="primary.500"
              fontWeight="semibold"
            >
              {props.compensation == 'USD' ? '$' : ''}
              {props.min}-{props.max} {props.compensation}
              <Text color="neutral.500">/ month</Text>
              <Text color="neutral.400" pl="1">
                &#183; UTC±3
              </Text>
            </Text>
          </HStack>
          <Text color="neutral.400" mt="1.5%" fontSize="xs">
            “{props.description}”
          </Text>
        </Box>

        <Box
          ml="0.5%"
          maxW="100%"
          px="25px"
          pt="25px"
          pb="13px"
          borderTop="1px"
          borderColor="neutral.200"
        >
          <Flex wrap="wrap">
            {technologyTags.map((tag, index) => (
              <Tag
                key={`technology-tag-${index}`}
                w="fit-content"
                size="md"
                mx="12px"
                mb="12px"
                ml="0px"
                px="16px"
                py="8px"
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
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default JobCard;

// This header component exists so that the JobCard doesn't completely re-render
// on changing the state of isFavorited
const JobHeader = (props: any) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const name = 'Company Name',
    organization_description = 'NFT Marketplace',
    logo_url = '/DevDAO.png';

  const content = (
    <Flex mt="1%" mb="2.5%">
      <Image
        w="45px"
        h="45px"
        borderRadius="6px"
        border="1px solid black"
        src={logo_url}
        alt={`${name ?? 'organization'} logo`}
        mr="15px"
      />
      <VStack spacing="micro" alignItems="start">
        <Heading size="sm">{name}</Heading>
        <Text color="neutral.400" fontSize="xs" mb="32px">
          {organization_description}
        </Text>
      </VStack>
    </Flex>
  );

  return (
    <Box p="25px" borderBottom="1px" borderColor="neutral.200">
      <Flex align="center" justify="space-between">
        <HStack>
          <Link
            href="/recruiter-name"
            _hover={{ textDecoration: 'none' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
          >
            <Flex mt="1%" mb="2.5%">
              <Image
                w="45px"
                h="45px"
                borderRadius="6px"
                border="1px solid black"
                src={props.featured_photo_url || '/DevDAO.png'}
                alt="logo"
                mr="15px"
              />
              <VStack spacing="micro" alignItems="start">
                <Heading size="sm">{props.name || 'Company name'}</Heading>
                <Text color="neutral.400" fontSize="xs" mb="32px">
                  {props.organization_description || 'NFT Marketplace'}
                </Text>
              </VStack>
            </Flex>
          </Link>
        </HStack>

        <svg width="0" height="0">
          <linearGradient
            id="utility-gradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop stopColor="#AD00FF" offset="0%" />
            <stop stopColor="#4E00EC" offset="100%" />
          </linearGradient>
        </svg>

        {isFavorited ? (
          <Heart
            style={{
              fill: 'url(#utility-gradient)',
              stroke: 'none',
            }}
            onClick={() => setIsFavorited(false)}
          />
        ) : (
          <Heart color="#BDBBC7" onClick={() => setIsFavorited(true)} />
        )}
      </Flex>
    </Box>
  );
};
