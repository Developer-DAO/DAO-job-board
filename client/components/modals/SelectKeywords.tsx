import React, { useState } from 'react';

import { keywordsSamples } from '../../constants/keywords-sample';

import {
  Box,
  Heading,
  Container,
  Flex,
  Text,
  SimpleGrid,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

type KeywordProps = {};

export default function KeywordSelect({
  keywordsDataHandler,
  closeKeywordModal,
  keywordsData,
}: KeywordProps) {
  let keywords = keywordsSamples;

  const [searchKeywords, setSearchKeywords] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [keywordsActive, setKeywordsActive] = useState(false);

  const [formData, setFormData] = useState(keywords);

  const selectKeyword = (e) => {
    const isInArray = selectedKeywords.find((element) => element.keyword === e);
    if (isInArray || selectedKeywords.length >= 6) {
      return;
    }

    setSelectedKeywords((prevKeywords) => {
      const updatedKeywords = [...prevKeywords];
      updatedKeywords.unshift({ keyword: e, id: Math.random().toString() });
      return updatedKeywords;
    });
    setKeywordsActive(true);
  };

  const deleyeKeywords = (e) => {
    setSelectedKeywords((prevKeywords) => {
      const updatedKeywords = prevKeywords.filter(
        (keyword) => keyword.id !== e
      );
      return updatedKeywords;
    });
  };

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="100vh"
        bg="rgba(0, 0, 0, 0.5)"
        onClick={closeKeywordModal}
      ></Box>

      <Box
        position="fixed"
        borderRadius="18px"
        p={5}
        m="auto"
        left="10vw"
        right="25vw"
        top="25vh"
        bottom="25vh"
        w={{ '2xl': '50%', sm: '80%' }}
        h="fit-content"
        textAlign="center"
        bg="#ffffff"
        zIndex={1000}
      >
        <Box
          width="100%"
          height="fit-content"
          overflow="hidden"
          text-overflow="clip"
          word-break="break-all"
          white-space="pre-wrap"
        >
          {keywords
            .filter((keyword) => {
              if (searchKeywords === '') {
                return keyword;
              } else if (
                keyword.name
                  .toLowerCase()
                  .includes(searchKeywords.toLowerCase())
              ) {
                return keyword;
              }
              {
                return false;
              }
            })
            .map((keyword, index) => (
              <Tag key={index} onClick={(e) => selectKeyword(keyword.name)}>
                {keyword.name}
              </Tag>
            ))}
        </Box>

        {keywordsActive && selectedKeywords ? (
          <>
            <Container>
              <Heading size="sm">
                Selected Keywords{' '}
                <Text as="em" fontWeight="light">
                  (Max 6)
                </Text>
              </Heading>
            </Container>
            <SimpleGrid columns={1} row={2} spacing={2}>
              {selectedKeywords &&
                selectedKeywords.map((keyword, index) => (
                  <Tag
                    w="50%"
                    key={index}
                    onClick={(e) => deleyeKeywords(keyword.id)}
                  >
                    <TagLabel m="auto">{keyword.keyword}</TagLabel>
                  </Tag>
                ))}{' '}
            </SimpleGrid>
          </>
        ) : null}
      </Box>
    </>
  );
}
