import { Link, Button } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ButtonBlack } from '../styles/ui-components/Chakra-Button';

const elementTypes = { Button, Link };

export default {
  title: 'Components/Button',
  component: ButtonBlack,
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
export const Black: ComponentStory<typeof ButtonBlack> = (args) => {
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
    <ButtonBlack onClick={handleOnChange} {...args}>
      {value}
    </ButtonBlack>
  );
};
