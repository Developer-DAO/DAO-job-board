import { Stack, Heading, Text } from '@chakra-ui/react';

export default {
  title: 'Design System/Typography',
};

const texts = [
  {
    name: 'body1',
    description: 'Neutral 900 - Semibold - 1.75rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'body1',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'body2',
    description: 'Neutral 900 - Semibold - 1.5rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'body2',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'body3',
    description: 'Neutral 700 - Semibold - 1.25rem',
    properties: {
      color: 'neutral.700',
      fontSize: 'body3',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'caption',
    description: 'Neutral 400 - Semibold - 0.875rem',
    properties: {
      color: 'neutral.400',
      fontSize: 'caption',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'micro',
    description: 'Neutral 400 - Semibold - 0.75rem',
    properties: {
      color: 'neutral.400',
      fontSize: 'micro',
      fontWeight: 'semibold',
    },
  },
];

const headings = [
  {
    name: 'huge',
    description: 'Extra Bold - 9rem',
    properties: { fontSize: 'huge', fontWeight: 'extrabold' },
  },
  {
    name: 'big1',
    description: 'Neutral 900 - Semibold - 6rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'big1',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'big2',
    description: 'Neutral 900 - Semibold - 4.5rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'big2',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'header1',
    description: 'Neutral 900 - Semibold - 3rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'header1',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'header2',
    description: 'Neutral 900 - Semibold - 2.5rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'header2',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'header3',
    description: 'Neutral 900 - Semibold - 2.25rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'header3',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'header4',
    description: 'Neutral 900 - Semibold - 2rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'header4',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'header5',
    description: 'Neutral 900 - Semibold - 1.75rem',
    properties: {
      color: 'neutral.900',
      fontSize: 'header5',
      fontWeight: 'semibold',
    },
  },
  {
    name: 'subheader',
    description: 'Neutral 400 - Semibold - 1.75rem - 20% Letter Spacing',
    properties: {
      color: 'neutral.400',
      fontSize: 'subheader',
      fontWeight: 'light',
      letterSpacing: '10px',
    },
  },
];

export const Headings = () => {
  return (
    <Stack spacing="xl">
      {headings.map((headings) => (
        <Stack key={headings.name} spacing="large">
          <Stack spacing="small">
            <Heading {...headings.properties}>
              fontSize: '{headings.name}'
            </Heading>
            <Text fontSize="body3">{headings.description}</Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export const Body = () => {
  return (
    <Stack spacing="xl">
      {texts.map((body) => (
        <Stack key={body.name} spacing="large">
          <Stack spacing="small">
            <Text {...body.properties}>fontSize: '{body.name}'</Text>
            <Text fontSize="body3">{body.description}</Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
