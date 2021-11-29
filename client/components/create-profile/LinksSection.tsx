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
} from '@fortawesome/free-brands-svg-icons';

type profileLinksProps = {
  profileLinks: {
    linkedin: string;
    twitter: string;
    behance: string;
    dribbble: string;
    producthunt: string;
    github: string;
    dev: string;
    medium: string;
  };
};

export default function LinksSection({ profileLinks }: profileLinksProps) {
  const {
    linkedin,
    twitter,
    behance,
    dribbble,
    producthunt,
    github,
    dev,
    medium,
  } = profileLinks;

  return (
    <>
      {profileLinks && (
        <HStack mt="15px" gap="0.5rem" spacing={1}>
          {github ? (
            <NextLink href={`https://www.github.com/${github}`} passHref>
              <Link target="_blank">
                <Tag
                  w="fit-content"
                  size="lg"
                  borderRadius="8px"
                  bgColor="#E2E9F0"
                  color="black"
                >
                  <TagLabel m="auto">
                    <FontAwesomeIcon icon={faGithub} />
                  </TagLabel>
                </Tag>
              </Link>
            </NextLink>
          ) : null}

          {twitter ? (
            <NextLink href={`https://www.twitter.com/${twitter}`} passHref>
              <Link target="_blank">
                <Tag
                  w="fit-content"
                  size="lg"
                  borderRadius="8px"
                  bgColor="#E2E9F0"
                  color="black"
                >
                  <TagLabel m="auto">
                    <FontAwesomeIcon icon={faTwitter} />
                  </TagLabel>
                </Tag>
              </Link>
            </NextLink>
          ) : null}

          {linkedin ? (
            <NextLink href={`https://www.linkedin.com/${linkedin}`} passHref>
              <Link target="_blank">
                <Tag
                  cursor="pointer"
                  w="fit-content"
                  size="lg"
                  borderRadius="8px"
                  bgColor="#E2E9F0"
                  color="black"
                >
                  <TagLabel m="auto">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </TagLabel>
                </Tag>
              </Link>
            </NextLink>
          ) : null}

          {producthunt ? (
            <NextLink
              href={`https://www.producthunt.com/@${producthunt}`}
              passHref
            >
              <Link target="_blank">
                <Tag
                  cursor="pointer"
                  w="fit-content"
                  size="lg"
                  borderRadius="8px"
                  bgColor="#E2E9F0"
                  color="black"
                >
                  <TagLabel m="auto">
                    <FontAwesomeIcon icon={faProductHunt} />
                  </TagLabel>
                </Tag>
              </Link>
            </NextLink>
          ) : null}

          {dribbble ? (
            <NextLink href={`https://www.dribbble.com/${dribbble}`} passHref>
              <Link target="_blank">
                <Tag
                  cursor="pointer"
                  w="fit-content"
                  size="lg"
                  borderRadius="8px"
                  bgColor="#E2E9F0"
                  color="black"
                >
                  <TagLabel m="auto">
                    <FontAwesomeIcon icon={faDribbble} />
                  </TagLabel>
                </Tag>
              </Link>
            </NextLink>
          ) : null}

          {behance ? (
            <NextLink href={`https://www.behance.net/${behance}`} passHref>
              <Link target="_blank">
                <Tag
                  cursor="pointer"
                  w="fit-content"
                  size="lg"
                  borderRadius="8px"
                  bgColor="#E2E9F0"
                  color="black"
                >
                  <TagLabel m="auto">
                    <FontAwesomeIcon icon={faBehance} />
                  </TagLabel>
                </Tag>
              </Link>
            </NextLink>
          ) : null}

          {dev ? (
            <NextLink href={`https://www.dev.to/${dev}`} passHref>
              <Link target="_blank">
                <Tag
                  cursor="pointer"
                  w="fit-content"
                  size="lg"
                  borderRadius="8px"
                  bgColor="#E2E9F0"
                  color="black"
                >
                  <TagLabel m="auto">
                    <FontAwesomeIcon icon={faDev} />
                  </TagLabel>
                </Tag>
              </Link>
            </NextLink>
          ) : null}

          {medium ? (
            <NextLink href={`https://www.${medium}.medium.com`} passHref>
              <Link target="_blank">
                <Tag
                  cursor="pointer"
                  w="fit-content"
                  size="lg"
                  borderRadius="8px"
                  bgColor="#E2E9F0"
                  color="black"
                >
                  <TagLabel m="auto">
                    <FontAwesomeIcon icon={faMedium} />
                  </TagLabel>
                </Tag>
              </Link>
            </NextLink>
          ) : null}
        </HStack>
      )}
    </>
  );
}
