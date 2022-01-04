import { Plus, X } from 'tabler-icons-react';
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
  StackDivider,
} from '@chakra-ui/react';

type filterLabelProps = {
  text: string;
};

function FilterLabel(props: filterLabelProps) {
  const [selected, setSelected] = useControllableState({ defaultValue: false });

  const clickLabel = () => setSelected(!selected);
  return (
    <Button
      onClick={clickLabel}
      rounded="10px"
      m="8px"
      border="solid"
      borderWidth="1"
      color={selected ? 'neutral.600' : 'neutral.300'}
      rightIcon={selected ? <X /> : <Plus />}
    >
      <Text fontStyle="Inter" fontSize="md">
        {props.text}
      </Text>
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
    <Box borderColor="neutral.200" borderLeftWidth="1px">
      <VStack divider={<StackDivider borderColor="neutral.200" />}>
        <Container my="25px" p="10px">
          <Heading
            color="neutral.300"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            p="3"
            textTransform="uppercase"
          >
            {t('components.jobs.jobs_filter.headers.position')}
          </Heading>
          {positionFilter &&
            positionFilter.map((position, index) => (
              <FilterLabel key={index} text={position}></FilterLabel>
            ))}
        </Container>
        <Container my="5px" p="10px">
          <Heading
            color="neutral.300"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            p="3"
            textTransform="uppercase"
          >
            {t('components.jobs.jobs_filter.headers.location')}
          </Heading>
          {locationFilter &&
            locationFilter.map((location, index) => (
              <FilterLabel key={index} text={location}></FilterLabel>
            ))}
        </Container>
        <Container my="5px" p="10px">
          <Heading
            color="neutral.300"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            p="3"
            textTransform="uppercase"
          >
            {t('components.jobs.jobs_filter.headers.min_pay')}
          </Heading>
          <Input
            borderColor="neutral.200"
            borderWidth="2px"
            mx="3"
            maxWidth="25%"
            _hover={{ borderColor: '#2F2D3B' }}
            placeholder={t('components.jobs.jobs_filter.placeholder')}
          />
        </Container>
        <Container
          my="5px"
          p="10px"
          borderBottomColor="neutral.200"
          borderBottomWidth="1px"
        >
          <Heading
            color="neutral.300"
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
        </Container>
      </VStack>
      <Box my="5px" p="10px" textAlign="center">
        <Button
          onClick={() => {}}
          rounded="10"
          border="solid"
          borderWidth="1"
          width="80%"
        >
          <Text fontStyle="Inter" fontSize="md">
            {t('components.jobs.jobs_filter.headers.reset_filter')}
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

export default JobFilter;
