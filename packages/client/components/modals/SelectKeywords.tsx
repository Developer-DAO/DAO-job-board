import React, { useState, useEffect } from 'react';

import { keywordsSamples } from '@/constants/keywords-sample';
import { Keyword } from '@/types';

import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Container,
  Text,
  Stack,
  SimpleGrid,
  Tag,
  TagLabel,
  TagCloseButton,
  TagRightIcon,
  ButtonGroup,
} from '@chakra-ui/react';

import {
  ButtonPrimary,
  ButtonWarning,
} from '../../styles/ui-components/Chakra-Button';

import { AddIcon, SearchIcon } from '@chakra-ui/icons';

type KeywordProps = {
  keywordsData: Array<Keyword>;
  keywordsDataHandler: (setSelectedKeywords: Keyword[]) => void;
  closeKeywordModal: () => void;
};

export default function KeywordSelect({
  keywordsDataHandler,
  closeKeywordModal,
  keywordsData,
}: KeywordProps) {
  let keywords = keywordsSamples;

  const [searchKeywords, setSearchKeywords] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);
  const [keywordsActive, setKeywordsActive] = useState(false);

  useEffect(() => {
    if (keywordsData && selectedKeywords.length === 0) {
      for (let keyword of keywordsData) {
        selectKeyword(keyword.name);
      }
    }
  }, [selectedKeywords, keywordsData]);

  const selectKeyword = (keyword: string) => {
    //Limits the number of selected keywords to 10
    const isInArray = selectedKeywords.find(
      (element: Keyword) => element.name === keyword
    );
    if (isInArray || selectedKeywords.length > 10) {
      return;
    }
    //Merges the selected keywords with the state
    setSelectedKeywords((prevKeywords: Keyword[]) => {
      const updatedKeywords = [...prevKeywords];
      updatedKeywords.unshift({ name: keyword, id: Math.random().toString() });
      return updatedKeywords;
    });
    setKeywordsActive(true);
  };

  //Deletes keywords from selected list
  const deleteKeywords = async (e: string) => {
    setSelectedKeywords((prevKeywords: Keyword[]) => {
      const updatedKeywords = prevKeywords.filter(
        (keyword) => keyword.id !== e
      );
      return updatedKeywords;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    keywordsDataHandler(selectedKeywords);
    closeKeywordModal();
  };

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="100vh"
        onClick={closeKeywordModal}
      ></Box>

      <Box
        position="fixed"
        borderRadius="18px"
        p={5}
        m="auto"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%);"
        w={{ '2xl': '50%', sm: '80%' }}
        h="fit-content"
        textAlign="center"
        bg="#ffffff"
        zIndex={1000}
      >
        <Stack
          width="100%"
          height="fit-content"
          overflow="hidden"
          text-overflow="clip"
          word-break="break-all"
          white-space="pre-wrap"
        >
          <Stack m="auto" textAlign="center" spacing={2}>
            <Heading size="md">Search Keywords</Heading>
            <InputGroup>
              <InputLeftAddon>
                <SearchIcon color="gray.500" />
              </InputLeftAddon>
              <Input
                value={searchKeywords}
                onInput={(e) =>
                  setSearchKeywords((e.target as HTMLTextAreaElement).value)
                }
                placeholder="Write skills or positions"
                w="100%"
                textAlign="center"
              />
            </InputGroup>
          </Stack>
          <SimpleGrid spacing={1} templateColumns="repeat(2, 3fr)" h="52px">
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
                <Tag
                  cursor="pointer"
                  colorScheme="blue"
                  w="100%"
                  key={index}
                  onClick={() => selectKeyword(keyword.name)}
                >
                  <TagLabel m="auto">{keyword.name}</TagLabel>
                  <TagRightIcon as={AddIcon} />
                </Tag>
              ))}
          </SimpleGrid>
        </Stack>

        <Stack spacing={2} mt="2.5%">
          <Container>
            <Heading size="sm">
              {selectedKeywords && selectedKeywords.length} Selected Keywords{' '}
              <Text as="em" fontWeight="light">
                (Max 10)
              </Text>
            </Heading>
          </Container>
          <SimpleGrid spacing={1} templateColumns="repeat(2, 5fr)">
            {keywordsActive &&
              selectedKeywords.length >= 0 &&
              selectedKeywords.map((keyword: Keyword, index: number) => (
                <Tag
                  colorScheme="red"
                  w="100%"
                  key={index}
                  onClick={() => deleteKeywords(keyword.id!)}
                >
                  <TagLabel m="auto">{keyword.name}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
          </SimpleGrid>
        </Stack>

        <ButtonGroup
          display="flex"
          flexDirection="column"
          m="5px"
          padding="1px"
          w="100%"
        >
          <ButtonPrimary onClick={onSubmit}>Save Keywords</ButtonPrimary>
          <ButtonWarning onClick={closeKeywordModal}>Cancel</ButtonWarning>
        </ButtonGroup>
      </Box>
    </>
  );
}
