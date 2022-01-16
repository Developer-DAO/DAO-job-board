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
    <Button variant="primary" {...args}>
      Primary
    </Button>
  );
};

export const Success: ComponentStory<typeof Button> = (args) => {
  return (
    <Button variant="success" {...args}>
      Success
    </Button>
  );
};

export const Info: ComponentStory<typeof Button> = (args) => {
  return (
    <Button variant="info" {...args}>
      Info
    </Button>
  );
};

export const Danger: ComponentStory<typeof Button> = (args) => {
  return (
    <Button variant="danger" {...args}>
      Danger
    </Button>
  );
};

export const Warning: ComponentStory<typeof Button> = (args) => {
  return (
    <Button variant="warning" {...args}>
      Warning
    </Button>
  );
};

export const Neutral: ComponentStory<typeof Button> = (args) => {
  return (
    <Button variant="neutral" {...args}>
      Neutral
    </Button>
  );
};
