import { Button, Text, useControllableState } from '@chakra-ui/react';
import { Plus, X } from 'tabler-icons-react';

export type FilterTagProps = {
  tag: string;
};

function FilterTag(props: FilterTagProps) {
  const [active, setActive] = useControllableState({ defaultValue: false });

  const clickLabel = () => setActive(!active);

  const content = (
    <Text fontStyle="Inter" fontSize="md">
      {props.tag ? props.tag : 'Empty'}
    </Text>
  );

  return (
    <>
      {active ? (
        <Button
          onClick={clickLabel}
          rounded="10px"
          mr="1"
          mb="1"
          border="solid"
          borderWidth="1"
          color="neutral.600"
          rightIcon={<X />}
        >
          {content}
        </Button>
      ) : (
        <Button
          onClick={clickLabel}
          rounded="10px"
          mr="1"
          mb="1"
          border="solid"
          borderWidth="1"
          color="neutral.300"
          rightIcon={<Plus />}
        >
          {content}
        </Button>
      )}
    </>
  );
}

export default FilterTag;
