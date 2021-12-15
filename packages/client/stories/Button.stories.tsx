import { Link, Button } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import {
  ButtonPrimary,
  ButtonSuccess,
  ButtonInfo,
} from '../styles/ui-components/Chakra-Button';

const elementTypes = { Button, Link };

export default {
  title: 'Components/Button',
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
export const Primary: ComponentStory<typeof ButtonPrimary> = (args) => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setValue('Primary');
    } else {
      setValue('Secondary');
    }
    setIsPrimary(!isPrimary);
  };
  return (
    <ButtonPrimary onClick={handleOnChange} {...args}>
      {value}
    </ButtonPrimary>
  );
};

export const Success: ComponentStory<typeof ButtonSuccess> = (args) => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setValue('Primary');
    } else {
      setValue('Secondary');
    }
    setIsPrimary(!isPrimary);
  };
  return (
    <ButtonSuccess onClick={handleOnChange} {...args}>
      {value}
    </ButtonSuccess>
  );
};

export const Info: ComponentStory<typeof ButtonInfo> = (args) => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setValue('Primary');
    } else {
      setValue('Secondary');
    }
    setIsPrimary(!isPrimary);
  };
  return (
    <ButtonInfo onClick={handleOnChange} {...args}>
      {value}
    </ButtonInfo>
  );
};
