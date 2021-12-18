import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  Text,
  useControllableState,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTimes,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'next-i18next';

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
      borderWidth="1.5px"
      color={selected ? 'black.600' : 'gray.300'}
    >
      <Text fontStyle="Inter" fontSize="md">
        {props.text}
      </Text>
      <Box ml="8px">
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

  // Postions placeholder
  const positionFilter = ['UI Design', 'UX Design', 'Frontend', 'Backend'];

  // Location placeholder
  const locationFilter = ['Remote', 'Not-Remote'];

  return (
    <Box mt="2.5%">
      <Container my="5px" p="10px" bgColor="white">
        <Container my="5px" p="10px">
          {positionFilter &&
            positionFilter.map((position) => (
              <FilterLabel text={position}></FilterLabel>
            ))}
        </Container>
        <Divider bor color="#86848F" />
        <Container my="5px" p="10px">
          {locationFilter &&
            locationFilter.map((location) => (
              <FilterLabel text={location}></FilterLabel>
            ))}
        </Container>
        <Container my="5px" p="10px">
          <Input
            borderColor="gray.300"
            borderWidth="1.5px"
            _hover={{ borderColor: '#000000' }}
            placeholder={t('components.jobs.jobs_filter.placeholder')}
          />
        </Container>
      </Container>
    </Box>
  );
}

export default JobFilter;
