import { HStack, Tag, TagLabel, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
  faDev,
  faMedium,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

type ProfileLinkProps = {
  href: string;
  icon: IconDefinition;
};

export const ProfileLink = (props: ProfileLinkProps) => (
  <NextLink href={props.href} passHref>
    <Link target="_blank">
      <Tag
        w="fit-content"
        size="lg"
        borderRadius="8px"
        bgColor="#E2E9F0"
        color="black"
      >
        <TagLabel m="auto">
          <FontAwesomeIcon icon={props.icon} />
        </TagLabel>
      </Tag>
    </Link>
  </NextLink>
);

type LinksSectionProps = {
  profileLinks?: {
    linkedin?: string;
    twitter?: string;
    behance?: string;
    dribbble?: string;
    producthunt?: string;
    github?: string;
    dev?: string;
    medium?: string;
  };
};

export default function LinksSection(props: LinksSectionProps) {
  if (!props.profileLinks) return null;

  const links = Object.keys(props.profileLinks).map<ProfileLinkProps | null>(
    (key) => {
      // TS thinks that props.profileLinks can be undefined here allthough we return null.
      const value =
        props.profileLinks![key as keyof LinksSectionProps['profileLinks']];
      if (!value) return null;

      switch (key) {
        case 'github': {
          return {
            href: 'https://github.com/' + value,
            icon: faGithub,
          };
        }
        case 'twitter': {
          return {
            href: 'https://www.twitter.com/' + value,
            icon: faTwitter,
          };
        }
        case 'behance': {
          return {
            href: 'https://www.behance.net/' + value,
            icon: faBehance,
          };
        }
        case 'producthunt': {
          return {
            href: 'https://www.producthunt.com/@' + value,
            icon: faProductHunt,
          };
        }
        case 'linkedin': {
          return {
            href: 'https://www.linkedin.com/' + value,
            icon: faLinkedinIn,
          };
        }
        case 'dev': {
          return {
            href: 'https://www.dev.to/' + value,
            icon: faDev,
          };
        }
        case 'dribble': {
          return {
            href: 'https://www.dribbble.com/' + value,
            icon: faDribbble,
          };
        }
        case 'medium': {
          return {
            href: `https://www.${value}.medium.com`,
            icon: faMedium,
          };
        }
        default:
          return null;
      }
    }
  );

  return (
    <HStack mt="15px" gap="0.5rem" spacing={1}>
      {links.map((link) => link && <ProfileLink key={link.href} {...link} />)}
    </HStack>
  );
}
