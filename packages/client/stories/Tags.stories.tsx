import FilterTag from '../components/modals/FilterTag';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const elementTypes = { FilterTag };

export default {
  title: 'Components/Tags',
  component: FilterTag,
} as ComponentMeta<typeof FilterTag>;

export const Active: ComponentStory<typeof FilterTag> = (args) => (
  <FilterTag {...args} />
);
