import { SimpleGrid, Tag, TagLabel } from '@chakra-ui/react';
import { Keyword } from '@/types';

type keywordDataProps = {
  keywordsData: Keyword[];
  templateColumns: any;
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
            keywordsData.map((keyword, index) => (
              <Tag
                key={index}
                w="fit-content"
                size="lg"
                borderRadius="8px"
                bgColor="#E2E9F0"
                color="black"
              >
                <TagLabel m="auto">{keyword.name}</TagLabel>
              </Tag>
            ))}
        </SimpleGrid>
      )}
    </>
  );
}
