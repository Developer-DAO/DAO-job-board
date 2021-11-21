import React, { useState } from 'react';

import AddLinks from '../../components/create-profile/add-links';

import {
  Box,
  Heading,
  Flex,
  HStack,
  Stack,
  Tag,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Switch,
  InputGroup,
  Input,
  InputLeftAddon,
  Text,
  Textarea,
  Image,
  Select,
  Label,
  useDisclosure,
} from '@chakra-ui/react';

import {
  ButtonBlack,
  ButtonGreen,
  ButtonRed,
} from '../../styles/ui-components/Chakra-Button';

//FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    status: '',
    name: '',
    username: '',
    description: '',
    title: '',
    location: '',
    website: '',
    links: '',
  });

  const {
    status,
    name,
    username,
    title,
    location,
    description,
    website,
    githubusername,
  } = formData;

  const [profileLinks, setProfileLinks] = useState({
    linkedin: '',
    twitter: '',
    behance: '',
    dribbble: '',
    producthunt: '',
  });

  //To Open and Close Keyword Modals
  const { isOpen, onOpen, onClose } = useDisclosure();

  //To Open and Close Links Modals
  const [changeLinks, setChangeLinks] = useState(false);

  const openLinksModal = () => {
    setChangeLinks(true);
  };

  const closeLinksModal = () => {
    setChangeLinks(false);
  };

  //Sets links data and sends to database
  const linksDataHandler = (linkData) => {
    setProfileLinks(linkData);
  };

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
    <>
      {changeLinks && (
        <AddLinks
          unSelectLinks={unSelectLinks}
          linksDataHandler={linksDataHandler}
          profileLinks={profileLinks}
        />
      )}

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

          <Stack
            width="50%"
            m="auto"
            mt="5%"
            textAlign="left"
            direction="column"
          >
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
          <Box p="0px" mt="5px" maxW={{ sm: '100%' }} display="inline-box">
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

            <HStack
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
            </HStack>

            <Heading mt="2.5%" size="md">
              Links and Socials
            </Heading>

            <Label>Website</Label>
            <Input
              placeholder="e.g. developer.com"
              name="website"
              value={website}
              onChange={(e) => onChange(e)}
            />
            <Label>GitHub</Label>
            <InputGroup>
              <InputLeftAddon>
                {' '}
                <FontAwesomeIcon icon={faGithub} />
              </InputLeftAddon>
              <Input
                placeholder="e.g. github.com/github-username"
                name="githubusername"
                value={githubusername}
                onChange={(e) => onChange(e)}
              />
            </InputGroup>

            <Text mt="2.5%">Profile Keywords</Text>
            <ButtonBlack onClick={onOpen}>Add Keywords</ButtonBlack>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <AddLinks />
                </ModalBody>
                <ModalFooter>
                  <ButtonGreen onClick={(e) => onSubmit(e)}>
                    Update Keywords
                  </ButtonGreen>
                  <ButtonRed onClick={onClose}>Cancel</ButtonRed>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
