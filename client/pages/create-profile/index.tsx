import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { Grid, GridItem, StackDivider } from '@chakra-ui/layout';
import AddExperience from '@/components/create-profile/add-experience';
import AddEducation from '@/components/create-profile/add-education';

import {
  Box,
  Heading,
  Container,
  Flex,
  SimpleGrid,
  Tag,
  TagLabel,
  Stack,
  Switch,
  InputGroup,
  Input,
  InputLeftAddon,
  Text,
  Textarea,
  Image,
  Select,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Accordion,
  VStack,
} from '@chakra-ui/react';

import {
  ButtonBlack,
  ButtonGreen,
  ButtonRed,
} from '../../styles/ui-components/Chakra-Button';
import Project from '@/components/create-profile/project';
import { DeleteIcon } from '@chakra-ui/icons';

interface Projects {
  title: string;
  githubUrl: string;
  description: string;
}
interface formData {
  status: string;
  name: string;
  username: string;
  description: string;
  title: string;
  location: string;
  website: string;
  projects: Projects[];
}

export default function CreateProfile() {
  const [formData, setFormData] = useState<formData>({
    status: '',
    name: '',
    username: '',
    description: '',
    title: '',
    location: '',
    website: '',
    projects: [],
  });

  const { status, name, username, title, location, description, website } =
    formData;

  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as any).name]: (e.target as any).value,
    });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const projectDataChangeHandler = (
    index: number,
    field: string,
    value: string
  ) => {
    const newProjects = [...formData.projects];
    newProjects[index] = {
      ...newProjects[index],
      [field]: value,
    };
    setFormData({
      ...formData,
      projects: newProjects,
    });
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={2}
      bg={{ lg: '#ffffff', sm: 'none' }}
      width={{ '2xl': '70%', md: '90%', sm: '100%' }}
      margin="auto"
      boxSizing="border-box"
      justifyContent="start"
      boxShadow={{ lg: '0px 0px 2px 4px #e2e8f0', sm: 'none' }}
      pt="2%"
      pl="0.5%"
      pr="0.5%"
      pb="0.5%"
      mt="2.5%"
    >
      <Container
        mt={0}
        overflowY="auto"
        bg="none"
        height="100%"
        width="100%"
        margin="auto"
        boxSizing="border-box"
        boxShadow="none"
      >
        <Heading textAlign="center" size="md">
          Identity
        </Heading>
        <Text textAlign="center" mt={5}>
          PFP
        </Text>
        <Image
          w="9rem"
          h="9rem"
          margin="auto"
          borderRadius="180px"
          src="/DevDAO.png"
          alt="developer"
        />
        <Text mt={4}>Username</Text>
        <Text mt={2} mb={2} fontSize="sm">
          Make it easy for people to know it is you (min 3 characters)
        </Text>
        <InputGroup>
          <InputLeftAddon>@</InputLeftAddon>
          <Input
            placeholder="Write your favorite username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
        </InputGroup>

        <Text mt={4}>Professional Title</Text>
        <Text mt={2} mb={2} fontSize="sm">
          What kind of professional are you? (min 3 characters)
        </Text>
        <Input
          placeholder="Write a profile title e.g. (Developer, Designer, Marketer)"
          name="title"
          value={title}
          onChange={(e) => onChange(e)}
        />

        <Text mt={4}>Status</Text>
        <Text mt={2} mb={2} fontSize="sm">
          Let people know your status at the moment
        </Text>
        <Select placeholder="Select Status">
          <option value="option1">Available Full-Time</option>
          <option value="option2">Available Part-Time</option>
          <option value="option3">Looking for Contracts</option>
          <option value="option3">Looking for Gigs</option>
          <option value="option3">Not Available</option>
        </Select>

        <Text mt={4}>Profile Keywords</Text>
        <Text mt={2} mb={2} fontSize="xs">
          Keywords help categorize your profile in skills and sectors
        </Text>
        <ButtonBlack>Choose Keywords</ButtonBlack>
      </Container>
      <Container
        mt={2}
        bg="none"
        width="100%"
        margin="auto"
        boxSizing="border-box"
        boxShadow="none"
        maxW={{ sm: '100%' }}
      >
        <Heading textAlign="center" size="md">
          Basic Details
        </Heading>

        <Text mt="2.5%">Name</Text>
        <Text mt={2} mb={2} fontSize="sm">
          How would you like people to find you?
        </Text>
        <Input
          placeholder="The name that will be displayed on your profile"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
        />

        <Text mt="2.5%">Description</Text>
        <Text mt={2} mb={2} fontSize="sm">
          Let people know what is going on in your life
        </Text>
        <Textarea
          placeholder="Here goes a brief description of yourself"
          name="description"
          value={description}
          onChange={(e) => onChange(e)}
        />

        <Text mt="2.5%">Location</Text>
        <Text mt={2} mb={2} fontSize="sm">
          Where are you located right now?
        </Text>
        <Input
          placeholder="e.g. Madrid, Spain or Nomad"
          name="location"
          value={location}
          onChange={(e) => onChange(e)}
        />

        <Heading mt={3} textAlign="center" size="md">
          Links and Socials
        </Heading>
        <Text mt="2.5%">Website</Text>
        <Input
          placeholder="e.g. developer.com"
          name="website"
          value={website}
          onChange={(e) => onChange(e)}
        />

        <Text mt="2.5%">Social Links</Text>
        <ButtonBlack>Add Links</ButtonBlack>

        <Text mt="2.5%">Projects</Text>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          align="stretch"
          spacing={4}
        >
          {formData.projects.map((project, index) => {
            return (
              <Flex alignItems="center" justify="space-between" key={index}>
                <Project
                  index={index}
                  changeHandler={projectDataChangeHandler}
                  title={project.title}
                  githubUrl={project.githubUrl}
                  description={project.description}
                />
                <DeleteIcon
                  mt={4}
                  mr={4}
                  boxSize={6}
                  cursor="pointer"
                  onClick={() => {
                    const newProjects = [...formData.projects];
                    newProjects.splice(index, 1);
                    setFormData({
                      ...formData,
                      projects: newProjects,
                    });
                  }}
                />
              </Flex>
            );
          })}
        </VStack>

        <Box mt={4}>
          <ButtonBlack
            onClick={() => {
              setFormData({
                ...formData,
                projects: [
                  ...formData.projects,
                  {
                    githubUrl: '',
                    title: '',
                    description: '',
                  },
                ],
              });
            }}
          >
            Add Project
          </ButtonBlack>
        </Box>
      </Container>
      <GridItem width="95%" p={2} colSpan={2} margin="auto">
        <Button color="white" width="100%" m={4} bg="#38A169" variant="solid">
          Save Profile
        </Button>
        <Button
          color="white"
          width="100%"
          ml={4}
          mr={4}
          mb={4}
          bg="#DD6B20"
          variant="solid"
        >
          Dismiss Changes
        </Button>
      </GridItem>
    </Grid>
  );
}
