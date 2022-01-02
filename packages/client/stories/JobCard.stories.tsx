import { ComponentMeta, ComponentStory } from '@storybook/react';
import JobCard from '../components/jobs/JobCard';

const elementTypes = { JobCard };

export default {
  title: 'Components/JobCard',
  component: JobCard
} as ComponentMeta<typeof JobCard>;

export const Job: ComponentStory<typeof JobCard> = (args) => <JobCard {...args} />;
