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
} from '@chakra-ui/react';
import { Job } from '../../types/job';
import { Heart } from 'tabler-icons-react';
import { useState } from 'react';

export default function JobCard({
  // Setting defaults until we start passing some form of data into the component
  position = 'Frontend Magician',
  compensation = '0.6 ETH',
  description = 'We already have the best design skills in web3. No chance you’ll be able to improve on what we’ve got but why not come along and learn something?',
}: Job) {
  const technologyTags = ['Solidity', 'EthersJS', 'React', 'Rust'];

  return (
    <Box
      key={Math.floor(Math.random() * 1000)} // will use the actual job id
      border="1px"
      borderColor="neutral.200"
      borderRadius="6px"
      boxSizing="border-box"
      transition="margin 0.3s ease-in-out, box-shadow 0.3s ease-out"
      _hover={{
        marginTop: '16px',
        boxShadow: '0px 16px 20px rgba(0, 0, 0, 0.1)',
      }}
      height={{
        lg: 'fit-content',
        md: 'fit-content',
        sm: 'max-content',
        base: 'max-content',
      }}
      w="100%"
      m="20px"
      textAlign="left"
      bg="white"
      minW="300px"
      maxW="320px"
    >
      <JobHeader />
      <Box ml="0.5%" maxW="100%" p="40px">
        <Link
          href="/jobs/username/marketing-manager"
          _hover={{ textDecoration: 'none' }}
          _focus={{ textDecoration: 'none', border: 'none' }}
        >
          <Heading style={{ fontSize: '24px' }} mb="1.5%" fontWeight="medium">
            {position}
          </Heading>
          <HStack mb="15px">
            <Text fontSize="lg" color="primary.500" fontWeight="semibold">
              {compensation}
            </Text>
            <Text color="neutral.500">/ month</Text>
            <Text color="primary.200">&#183;</Text>
            <Text color="neutral.400">UTC±3</Text>
          </HStack>
          <Text color="neutral.400" mt="1.5%">
            {description}
          </Text>
        </Link>
      </Box>

      <Box
        ml="0.5%"
        pb="1%"
        maxW="100%"
        px="40px"
        py="28px"
        borderTop="1px"
        borderColor="neutral.200"
      >
        <Flex wrap="wrap">
          {technologyTags?.map((tag, index) => (
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
  );
}

// This header component exists so that the JobCard doesn't completely re-render
// on changing the state of isFavorited
const JobHeader = () => {
  // Organization data is hardcoded as I am not currently aware of how this data will be pulled in.
  const name = 'Company Name',
    organization_description = 'NFT Marketplace',
    logo_url = '/DevDAO.png';

  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Box p="40px" borderBottom="1px" borderColor="neutral.200">
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
