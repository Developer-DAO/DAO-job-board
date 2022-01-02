import { Link, Button } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

const elementTypes = { Button, Link };

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    as: {
      options: Object.keys(elementTypes),
      mapping: elementTypes,
      control: {
        type: 'select',
        labels: {
          Button: 'Button',
          Link: 'Link',
        },
      },
    },
  },
} as ComponentMeta<typeof Button>;

/*
 * Example Button story with React Hooks.
 */
export const Primary: ComponentStory<typeof Button> = (args) => {
  return (
    <Button
      bg="primary.700"
      color="white"
      _hover={{ bg: 'primary.500' }}
      {...args}
    >
      Primary
    </Button>
  );
};

export const Success: ComponentStory<typeof Button> = (args) => {
  return (
    <Button
      bg="success.700"
      color="white"
      _hover={{ bg: 'success.500' }}
      {...args}
    >
      Success
    </Button>
  );
};

export const Info: ComponentStory<typeof Button> = (args) => {
  return (
    <Button bg="info.700" color="white" _hover={{ bg: 'info.500' }} {...args}>
      Info
    </Button>
  );
};

export const Danger: ComponentStory<typeof Button> = (args) => {
  return (
    <Button
      bg="danger.700"
      color="white"
      _hover={{ bg: 'danger.500' }}
      {...args}
    >
      Danger
    </Button>
  );
};

export const Warning: ComponentStory<typeof Button> = (args) => {
  return (
    <Button
      bg="warning.700"
      color="white"
      _hover={{ bg: 'warning.500' }}
      {...args}
    >
      Warning
    </Button>
  );
};

export const Neutral: ComponentStory<typeof Button> = (args) => {
  return (
    <Button
      bg="neutral.700"
      color="white"
      _hover={{ bg: 'neutral.500' }}
      {...args}
    >
      Neutral
    </Button>
  );
};
