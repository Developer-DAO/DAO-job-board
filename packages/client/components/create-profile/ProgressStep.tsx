import { Circle, HStack, Text } from '@chakra-ui/react';
import React from 'react';

type ProgressStepType = {
  isCurrentPage: boolean;
  content: string;
  className?: string;
  id?: string;
};

const ProgressStep = ({ isCurrentPage, content }: ProgressStepType) => {
  return (
    <>
      {isCurrentPage ? (
        <HStack ml="20px">
          <Circle size="24px" bg="primary.100">
            <Circle size="10px" bg="primary.500"></Circle>
          </Circle>
          <Text
            color="neutral.400"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            fontWeight="bold"
            p="3"
          >
            {content}
          </Text>
        </HStack>
      ) : (
        <HStack ml="20px" pl="7px">
          <Circle size="10px" bg="primary.500"></Circle>
          <Text
            color="neutral.400"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            fontSize="xs"
            p="3"
          >
            {content}
          </Text>
        </HStack>
      )}
    </>
  );
};

export default ProgressStep;
