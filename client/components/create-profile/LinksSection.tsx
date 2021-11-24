import { HStack, Tag, TagLabel, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

type profileLinksProps = {
  profileLinks: any;
};

export default function LinksSection({ profileLinks }: profileLinksProps) {
  const { linkedin, twitter, behance, dribbble, producthunt, github } =
    profileLinks;

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
        </HStack>
      )}
    </>
  );
}
