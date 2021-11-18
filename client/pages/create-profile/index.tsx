import React, { useState } from 'react';

import AddExperience from '../../components/create-profile/add-experience';
import AddEducation from '../../components/create-profile/add-education';

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
} from '@chakra-ui/react';

import {
  ButtonBlack,
  ButtonGreen,
  ButtonRed,
} from '../../styles/ui-components/Chakra-Button';

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    status: '',
    name: '',
    username: '',
    description: '',
    title: '',
    location: '',
    website: '',
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

  return (
    <Box
      display="flex"
      bg={{ lg: '#ffffff', sm: 'none' }}
      flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
      width={{ '2xl': '70%', md: '90%', sm: '100%' }}
      margin="auto"
      boxSizing="border-box"
      boxShadow={{ lg: '0px 0px 2px 4px #e2e8f0', sm: 'none' }}
      p="0.5%"
      mt="2.5%"
    >
      <Flex
        bg="none"
        direction="column"
        width="100%"
        margin="auto"
        textAlign="center"
        boxSizing="border-box"
        boxShadow="none"
        flex={1}
      >
        <Heading size="md">PFP</Heading>
        <Image
          w="8rem"
          h="8rem"
          margin="auto"
          mt="5%"
          borderRadius="180px"
          src="/DevDAO.png"
          alt="developer"
        />
        <Heading mt="5%" size="md">
          Content Visibility
        </Heading>
        <Text mt="2.5%" fontSize="xs">
          Choose what you want people to see on your profile
        </Text>

        <Stack width="50%" m="auto" mt="5%" textAlign="left" direction="column">
          <Switch>Basic Details</Switch>
          <Switch>PFP</Switch>
          <Switch>Description</Switch>
          <Switch>Username</Switch>
          <Switch>Keywords</Switch>
          <Switch>Experience</Switch>
          <Switch>Education</Switch>
        </Stack>
      </Flex>

      <Flex
        bg="none"
        direction="column"
        width="100%"
        margin="auto"
        boxSizing="border-box"
        boxShadow="none"
        flex={2}
      >
        <Container p="0px" mt="5px" maxW={{ sm: '100%' }} display="inline-box">
          <Heading size="md">Basic Details</Heading>

          <Text mt="2.5%">Name</Text>
          <Input
            placeholder="The name that will be displayed on your profile"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />

          <Text mt="2.5%">Description</Text>
          <Textarea
            placeholder="Here goes a brief description of yourself"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
          />

          <Heading mt="2.5%" size="md">
            Identity
          </Heading>

          <Text mt="2.5%">Username</Text>
          <Text fontSize="xs">Make it easy for people to know it is you</Text>
          <InputGroup>
            <InputLeftAddon>@</InputLeftAddon>
            <Input
              placeholder="Write your favorite username"
              name="username"
              value={username}
              onChange={(e) => onChange(e)}
            />
          </InputGroup>

          <Text mt="2.5%">Profile Keywords</Text>
          <Text fontSize="xs">
            Keywords help categorize your profile in skills and sectors
          </Text>
          <ButtonBlack>Choose Keywords</ButtonBlack>

          <SimpleGrid
            mt="15px"
            templateColumns="repeat(5, 2fr)"
            autoRows="fit-content"
            gap="0.5rem"
            spacing={1}
          >
            <Tag
              w="fit-content"
              size="md"
              borderRadius="8px"
              bgColor="#E2E9F0"
              color="black"
            >
              <TagLabel m="auto">First Keyword</TagLabel>
            </Tag>
          </SimpleGrid>

          <Accordion mt="2.5%" allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading size="md">Experience</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <AddExperience />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading size="md">Education</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <AddEducation />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Flex>
    </Box>
  );
}
