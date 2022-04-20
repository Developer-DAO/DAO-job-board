import React from 'react';
import { Box, HStack, Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faDiscord,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

type SocialPlatform = 'twitter' | 'github' | 'discord';

interface Props {
  platform: SocialPlatform;
  username: string;
  width?: string | number;
}

const getIcon = (platform: SocialPlatform) => {
  switch (platform) {
    case 'twitter':
      return faTwitter;
    case 'github':
      return faGithub;
    case 'discord':
      return faDiscord;
  }
};

const platformToLinkPrefix: { [key in SocialPlatform]: string } = {
  twitter: 'https://twitter.com/',
  github: 'https://github.com/',
  discord: 'https://discord.com/',
};

export const SocialBadge: React.FC<Props> = ({
  platform,
  username,
  width = 'max-content',
}) => {
  return (
    <Box
      borderWidth="0.7px"
      borderColor="#ccc"
      borderRadius="7px"
      padding="8px"
      width={width}
      _hover={{ cursor: platform !== 'discord' ? 'pointer' : 'default' }}
      onClick={() => {
        if (platform !== 'discord') {
          window.open(`${platformToLinkPrefix[platform]}${username}`, '_blank');
        }
      }}
    >
      <HStack>
        <FontAwesomeIcon icon={getIcon(platform)} />
        <p>@{username}</p>
      </HStack>
    </Box>
  );
};
