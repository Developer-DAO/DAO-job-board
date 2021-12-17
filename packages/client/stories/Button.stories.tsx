import { Link, Button } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import {
  ButtonPrimary,
  ButtonSuccess,
  ButtonInfo,
  ButtonWarning,
  ButtonDanger,
  ButtonNeutral,
} from '../styles/ui-components/Chakra-Button';

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
export const Primary: ComponentStory<typeof ButtonPrimary> = (args) => {
  return <ButtonPrimary {...args}>Primary</ButtonPrimary>;
};

export const Success: ComponentStory<typeof ButtonSuccess> = (args) => {
  return <ButtonSuccess {...args}>Success</ButtonSuccess>;
};

export const Info: ComponentStory<typeof ButtonInfo> = (args) => {
  return <ButtonInfo {...args}>Info</ButtonInfo>;
};

export const Danger: ComponentStory<typeof ButtonDanger> = (args) => {
  return <ButtonDanger {...args}>Danger</ButtonDanger>;
};

export const Warning: ComponentStory<typeof ButtonWarning> = (args) => {
  return <ButtonWarning {...args}>Warning</ButtonWarning>;
};

export const Neutral: ComponentStory<typeof ButtonNeutral> = (args) => {
  return <ButtonNeutral {...args}>Neutral</ButtonNeutral>;
};
