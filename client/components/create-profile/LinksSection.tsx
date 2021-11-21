import { HStack, Tag, TagLabel } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

type profileLinksProps = {
  profileLinks: Array<string>;
};

export default function LinksSection({ profileLinks }: profileLinksProps) {
  const { linkedin, twitter, behance, dribbble, producthunt } = profileLinks;

  return (
    <>
      {profileLinks && (
        <HStack
          mt="15px"
          templateColumns="repeat(5, 2fr)"
          autoRows="fit-content"
          gap="0.5rem"
          spacing={1}
        >
          {profileLinks && twitter ? (
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
          ) : null}

          {profileLinks && linkedin ? (
            <Tag
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
          ) : null}

          {profileLinks && producthunt ? (
            <Tag
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
          ) : null}

          {profileLinks && dribbble ? (
            <Tag
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
          ) : null}

          {profileLinks && behance ? (
            <Tag
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
          ) : null}
        </HStack>
      )}
    </>
  );
}
