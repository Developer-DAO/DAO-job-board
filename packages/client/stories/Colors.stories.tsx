import {
  Box,
  Stack,
  Heading,
  HStack,
  Text,
  VStack,
  Grid,
  useTheme,
} from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { capitalize } from 'lodash';

export default {
  title: 'Design System/Colors',
};

const colors = [
  {
    name: 'primary',
    description:
      'Primary colour used for CTAs, links, inputs, active states etc.',
  },
  {
    name: 'success',
    description: 'Success colour used to signal correct states etc.',
  },
  {
    name: 'info',
    description: 'Info colours used to subtly show elevant information',
  },
  {
    name: 'warning',
    description: 'Warning colours are used to show warning or on-hold states',
  },
  {
    name: 'danger',
    description: 'Danger colours are used to show error states or negativity',
  },
  {
    name: 'neutral',
    description:
      'Neutral colours can be used in text etc. This is written in @400!',
  },
];

const scales = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const ColorBox = ({ color, scale }: { color: string; scale: number }) => {
  const theme = useTheme();
  const bg = theme.colors[color][scale];

  return (
    <VStack w="150px" spacing="micro">
      <Box w="150px" h="50px" bg={bg} borderRadius={10} />
      <HStack w="full" justifyContent="space-between">
        <Text>{scale}</Text>
        <Text>{bg}</Text>
      </HStack>
    </VStack>
  );
};

export const Colors = () => {
  return (
    <Stack spacing="xl">
      {colors.map((color) => (
        <Stack key={color.name} spacing="large">
          <Stack spacing="small">
            <Heading size="md">{capitalize(color.name)}</Heading>
            <Text size="sm">{color.description}</Text>
          </Stack>
          <Grid
            columns={3}
            templateColumns="150px 150px 150px"
            gap={5}
            spacingX="medium"
            spacingY="xs"
          >
            {scales.map((scale) => (
              <ColorBox key={scale} color={color.name} scale={scale} />
            ))}
          </Grid>
        </Stack>
      ))}
    </Stack>
  );
};
