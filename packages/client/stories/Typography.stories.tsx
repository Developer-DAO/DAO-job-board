import { Stack, Heading, Text } from '@chakra-ui/react';

export default {
  title: 'Design System/Typography',
};

const headings = [
  {
    name: 'huge',
    description: 'Extra Bold - 9rem',
  },
  {
    name: 'big1',
    description: 'Neutral 900 - Semibold - 6rem',
  },
  {
    name: 'big2',
    description: 'Neutral 900 - Semibold - 4.5rem',
  },
  {
    name: 'header1',
    description: 'Neutral 900 - Semibold - 3rem',
  },
  {
    name: 'header2',
    description: 'Neutral 900 - Semibold - 2.5rem',
  },
  {
    name: 'header3',
    description: 'Neutral 900 - Semibold - 2.25rem',
  },
  {
    name: 'header4',
    description: 'Neutral 900 - Semibold - 2rem',
  },
  {
    name: 'header5',
    description: 'Neutral 900 - Semibold - 1.75rem',
  },
  {
    name: 'subheader',
    description: 'Neutral 400 - Semibold - 1.75rem - 4px Letter Spacing',
  },
];

export const Headings = () => {
  return (
    <Stack spacing="xl">
      {headings.map((heading) => (
        <Stack key={heading.name} spacing="large">
          <Stack spacing="small">
            <Heading variant={heading.name}>variant='{heading.name}'</Heading>
            <Text variant="body3">{heading.description}</Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const texts = [
  {
    name: 'body1',
    description: 'Neutral 900 - Semibold - 1.75rem',
  },
  {
    name: 'body2',
    description: 'Neutral 900 - Semibold - 1.5rem',
  },
  {
    name: 'body3',
    description: 'Neutral 700 - Semibold - 1.25rem',
  },
  {
    name: 'caption',
    description: 'Neutral 400 - Semibold - 0.875rem',
  },
  {
    name: 'micro',
    description: 'Neutral 400 - Semibold - 0.75rem',
  },
];

export const Texts = () => {
  return (
    <Stack spacing="xl">
      {texts.map((text) => (
        <Stack key={text.name} spacing="large">
          <Stack spacing="small">
            <Text variant={text.name}>variant='{text.name}'</Text>
            <Text fontSize="body3">{text.description}</Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
