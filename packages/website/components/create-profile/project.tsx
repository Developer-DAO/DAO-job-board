import { Input } from '@chakra-ui/input';
import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
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
    <Grid width="90%" templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem w="100%">
        <Text mt={2}>Title</Text>
        <Input
          value={title}
          onChange={(e) => changeHandler(index, 'title', e.target.value)}
          placeholder="Enter title"
          size="md"
        />
      </GridItem>
      <GridItem>
        <Text mt={2}>Github URL</Text>
        <Input
          value={githubUrl}
          onChange={(e) => changeHandler(index, 'githubUrl', e.target.value)}
          placeholder="Enter Github URL"
          size="md"
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Text mt={2}>Description</Text>
        <Textarea
          value={description}
          onChange={(e) => changeHandler(index, 'description', e.target.value)}
          placeholder="Enter Description"
          size="md"
        />
      </GridItem>
    </Grid>
  );
};

export default Project;
