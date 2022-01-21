import { SocialBadge } from './SocialBadge';

const Config = {
  title: 'Components/SocialBadge',
  component: SocialBadge,
};

export const Twitter = () => (
  <SocialBadge platform="twitter" username="dhaiwat10" />
);
export const Github = () => (
  <SocialBadge platform="github" username="dhaiwat10" />
);
export const Discord = () => (
  <SocialBadge platform="discord" username="dhaiwat10" />
);

export default Config;
