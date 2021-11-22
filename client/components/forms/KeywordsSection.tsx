import { SimpleGrid, Tag, TagLabel } from '@chakra-ui/react';

type keywordDataProps = {
  keywordsData: Array<string>;
};

export default function KeywordsSection({ keywordsData }: keywordDataProps) {
  return (
    <>
      {keywordsData && (
        <SimpleGrid spacing={1} templateColumns="repeat(2, 5fr)">
          {keywordsData &&
            keywordsData.map((keyword) => (
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
