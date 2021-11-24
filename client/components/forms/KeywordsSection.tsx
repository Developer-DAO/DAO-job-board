import { SimpleGrid, Tag, TagLabel } from '@chakra-ui/react';

type keywordDataProps = {
  keywordsData: string[];
  templateColumns: CSS.Properties;
};

export default function KeywordsSection({
  keywordsData,
  templateColumns,
}: keywordDataProps) {
  return (
    <>
      {keywordsData && (
        <SimpleGrid spacing={2} templateColumns={templateColumns}>
          {keywordsData &&
            keywordsData.map((keyword: any, index: number) => (
              <Tag
                key={index}
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
