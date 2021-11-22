import { SimpleGrid, Tag, TagLabel } from '@chakra-ui/react';

type profileKeywordsProps = {
  profileKeywords: Array<string>;
};

export default function KeywordsSection({
  profileKeywords,
}: profileKeywordsProps) {
  return (
    <>
      {profileKeywords && (
        <SimpleGrid spacing={1} templateColumns="repeat(2, 5fr)">
          {profileKeywords &&
            profileKeywords.map((keyword) => (
              <Tag
                w="fit-content"
                size="lg"
                borderRadius="8px"
                bgColor="#E2E9F0"
                color="black"
              >
                <TagLabel m="auto">{keyword.keyword}</TagLabel>
              </Tag>
            ))}
        </SimpleGrid>
      )}
    </>
  );
}
