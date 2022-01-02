import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  Container,
  Input,
  Text,
  useControllableState,
  Heading,
  VStack,
} from '@chakra-ui/react';

import {
  faPlus,
  faTimes,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

type filterLabelProps = {
  text: string;
};

function FilterLabel(props: filterLabelProps) {
  const [selected, setSelected] = useControllableState({ defaultValue: true });

  const clickLabel = () => setSelected(!selected);
  return (
    <Button
      onClick={clickLabel}
      rounded="10px"
      m="8px"
      border="solid"
      borderWidth="1"
      color={selected ? 'black.600' : 'gray.300'}
    >
      <Text fontStyle="Inter" fontSize="md">
        {props.text}
      </Text>
      <Box ml="8px" minWidth="12px">
        <FontAwesomeIcon
          icon={selected ? faTimes : faPlus}
          size="sm"
        ></FontAwesomeIcon>
      </Box>
    </Button>
  );
}

function JobFilter() {
  const { t } = useTranslation('common');

  // Skills placeholder
  const skillsFilter = ['Solidity', 'EthersJS', 'React', 'Rust'];

  // Postions placeholder
  const positionFilter = ['UI Design', 'UX Design', 'Frontend', 'Backend'];

  // Location placeholder
  const locationFilter = ['Remote', 'Not-Remote'];

  return (
    <Box borderColor="gray.200" borderLeftWidth="1px" alignContent="start">
      <VStack align="start">
        <Heading
          color="gray.300"
          letterSpacing="2px"
          font="Inter"
          justify="left"
          fontSize="xs"
          p="3"
          pl="5"
          mt={2}
          textTransform="uppercase"
        >
          {t('components.jobs.jobs_filter.headers.position')}
        </Heading>
        <Container
          my="5px"
          p="10px"
          borderBottomColor="gray.200"
          borderBottomWidth="1px"
        >
          {positionFilter &&
            positionFilter.map((position) => (
              <FilterLabel text={position}></FilterLabel>
            ))}
        </Container>
        <Heading
          color="gray.300"
          letterSpacing="2px"
          font="Inter"
          justify="left"
          fontSize="xs"
          p="3"
          pl="5"
          mt={2}
          textTransform="uppercase"
        >
          {t('components.jobs.jobs_filter.headers.location')}
        </Heading>
        <Container
          my="5px"
          p="10px"
          borderBottomColor="gray.200"
          borderBottomWidth="1px"
        >
          {locationFilter &&
            locationFilter.map((location) => (
              <FilterLabel text={location}></FilterLabel>
            ))}
        </Container>
        <Heading
          color="gray.300"
          letterSpacing="2px"
          font="Inter"
          justify="left"
          fontSize="xs"
          p="3"
          pl="5"
          mt={2}
          textTransform="uppercase"
        >
          {t('components.jobs.jobs_filter.headers.min_pay')}
        </Heading>
        <Container
          my="5px"
          p="10px"
          borderBottomColor="gray.200"
          borderBottomWidth="1px"
        >
          <Input
            borderColor="black.600"
            borderWidth="2px"
            mx="3"
            maxWidth="25%"
            // _hover={{ borderColor: '#2F2D3B' }}
            placeholder={t('components.jobs.jobs_filter.placeholder')}
          />
        </Container>
        <Heading
          color="gray.300"
          letterSpacing="2px"
          font="Inter"
          justify="left"
          fontSize="xs"
          p="3"
          pl="5"
          mt={2}
          textTransform="uppercase"
        >
          {t('components.jobs.jobs_filter.headers.matches')} -
        </Heading>
        <Container
          my="5px"
          p="10px"
          borderBottomColor="gray.200"
          borderBottomWidth="1px"
        ></Container>
        <Container my="5px" p="10px" textAlign="center">
          <Button
            onClick={() => {}}
            rounded="10"
            mx="10"
            // m="10"
            border="solid"
            borderWidth="1"
          >
            <Text fontStyle="Inter" fontSize="md">
              {t('components.jobs.jobs_filter.headers.reset_filter')}
            </Text>
          </Button>
        </Container>
      </VStack>
    </Box>
  );
}

export default JobFilter;
