import { Input } from '@chakra-ui/input';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

interface ProjectProps {
  index: number;
  githubUrl: string;
  title: string;
  description: string;
  changeHandler: (index: number, field: string, value: string) => void;
}

const Project: React.FC<ProjectProps> = ({
  index,
  githubUrl,
  title,
  description,
  changeHandler,
}) => {
  return (
    <Stack spacing={2}>
      <Box>
        <Text mt={2}>Title</Text>
        <Input
          value={title}
          onChange={(e) => changeHandler(index, 'title', e.target.value)}
          placeholder="Enter title"
          size="sm"
        />
      </Box>
      <Box>
        <Text mt={2}>Github URL</Text>
        <Input
          value={githubUrl}
          onChange={(e) => changeHandler(index, 'githubUrl', e.target.value)}
          placeholder="Enter Github URL"
          size="sm"
        />
      </Box>
      <Box>
        <Text mt={2}>Description</Text>
        <Input
          value={description}
          onChange={(e) => changeHandler(index, 'description', e.target.value)}
          placeholder="Enter Description"
          size="sm"
        />
      </Box>
    </Stack>
  );
};

export default Project;
