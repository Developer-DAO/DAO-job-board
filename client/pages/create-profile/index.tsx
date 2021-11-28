import React, { useState } from 'react';
import {
  Box,
  ButtonGroup,
  Heading,
  Flex,
  Stack,
  InputGroup,
  Input,
  InputLeftAddon,
  Text,
  Textarea,
  Image,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import {
  ButtonBlack,
  ButtonGreen,
  ButtonOrange,
} from '@/styles/ui-components/Chakra-Button';
import { Keyword } from '@/types';

import KeywordsSection from '@/components/forms/KeywordsSection';
import KeywordSelect from '@/components/modals/SelectKeywords';
//Social Links Components
import AddLinks from '@/components/modals/AddLinks';
import LinksSection from '@/components/create-profile/LinksSection';

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

  const { status, name, username, title, location, description, website } =
    formData;

  const [profileLinks, setProfileLinks] = useState({
    github: '',
    linkedin: '',
    twitter: '',
    behance: '',
    dribbble: '',
    producthunt: '',
  });

  const [profileKeywords, setProfileKeywords] = useState<Keyword[]>([]);

  //To Open and Close Keywords Modal
  const [changeProfileKeywords, setChangeProfileKeywords] = useState(false);

  const openKeywordModal = () => {
    setChangeProfileKeywords(true);
  };

  const closeKeywordModal = () => {
    setChangeProfileKeywords(false);
  };

  //Sets profile keywords data
  const keywordsDataHandler = (selectedKeywords: Keyword[]) => {
    setProfileKeywords(selectedKeywords);
  };

  //To Open and Close Links Modal
  const [changeProfileLinks, setChangeProfileLinks] = useState(false);

  const openLinksModal = () => {
    setChangeProfileLinks(true);
  };

  const closeLinksModal = () => {
    setChangeProfileLinks(false);
  };

  //Sets links data and sends to database
  const linksDataHandler = (linkData: any) => {
    setProfileLinks(linkData);
  };

  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as HTMLTextAreaElement).name]: (
        e.target as HTMLTextAreaElement
      ).value,
    });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {changeProfileLinks && (
        <Modal
          isOpen={changeProfileLinks}
          onClose={closeLinksModal}
          motionPreset="none"
        >
          <ModalOverlay onClick={closeLinksModal} />
          <ModalContent>
            <AddLinks
              closeLinksModal={closeLinksModal}
              linksDataHandler={linksDataHandler}
              profileLinks={profileLinks}
            />
          </ModalContent>
        </Modal>
      )}

      {changeProfileKeywords && (
        <Modal
          isOpen={changeProfileKeywords}
          onClose={closeKeywordModal}
          motionPreset="none"
        >
          <ModalOverlay onClick={closeKeywordModal} />
          <ModalContent>
            <KeywordSelect
              keywordsDataHandler={keywordsDataHandler}
              closeKeywordModal={closeKeywordModal}
              keywordsData={profileKeywords}
            />
          </ModalContent>
        </Modal>
      )}

      <Box
        m="auto"
        width={{ '2xl': '70%', md: '90%', sm: '100%' }}
        boxSizing="border-box"
        boxShadow={{ lg: '0px 0px 2px 4px #e2e8f0', sm: 'none' }}
        bg={{ lg: '#ffffff', sm: 'none' }}
        p="2%"
        mt="2.5%"
      >
        <Flex flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}>
          <Stack direction="column" textAlign="center" flex={2} spacing={5}>
            <Heading size="md">Identity</Heading>

            <Box m="auto">
              <Text size="md">PFP</Text>
              <Image
                w="8rem"
                h="8rem"
                margin="auto"
                borderRadius="180px"
                src="/DevDAO.png"
                alt="developer"
              />
            </Box>

            <Stack direction="column" textAlign="left" spacing={2}>
              <Text>Username</Text>
              <Text fontSize="xs">
                Make it easy for people to know it is you {'(min 3 characters)'}
              </Text>
              <InputGroup position="static">
                <InputLeftAddon>@</InputLeftAddon>
                <Input
                  position="static"
                  bgColor="white"
                  w={{ '2xl': '85%', sm: '85%' }}
                  placeholder="Write your favorite username"
                  name="username"
                  value={username}
                  onChange={(e) => onChange(e)}
                />
              </InputGroup>

              <Text>Professional Title</Text>
              <Text fontSize="xs">
                What kind of professional are you? {'(min 3 characters)'}
              </Text>
              <Input
                position="static"
                bgColor="white"
                w={{ '2xl': '95%', sm: '92.5%' }}
                placeholder="Write a profile title e.g. (Developer, Designer, Marketer)"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
              />

              <Text>Status</Text>
              <Text fontSize="xs">
                Let people know your status at the moment
              </Text>
              <Select
                position="initial"
                w={{ '2xl': '95%', sm: '92.5%' }}
                bgColor="white"
                bg="white"
                borderColor="#e2e8f0"
                _hover={{ borderColor: '#97c0e6' }}
                name="status"
                value={status}
                onChange={(e) => onChange(e)}
              >
                <option value="" disabled hidden>
                  Select Status
                </option>
                <option value="Available Full-Time ">
                  Available Full-Time
                </option>
                <option value="Available Part-Time">Available Part-Time</option>
                <option value="Looking for Contracts">
                  Looking for Contracts
                </option>
                <option value="Looking for Gigs">Looking for Gigs</option>
                <option value="Not Available">Not Available</option>
              </Select>

              <Text>Profile Keywords</Text>
              <Text fontSize="xs">
                Keywords help categorize your profile in skills and sectors
              </Text>
              <ButtonGroup>
                <ButtonBlack onClick={openKeywordModal}>
                  Choose Keywords
                </ButtonBlack>
              </ButtonGroup>
              <KeywordsSection
                templateColumns="repeat(3, 3fr)"
                keywordsData={profileKeywords}
              />
            </Stack>
          </Stack>

          <Stack direction="column" width="100%" flex={2}>
            <Box p="0px" maxW={{ sm: '100%' }} display="inline-box">
              <Stack spacing={2} mt="2.5%">
                <Heading size="md" textAlign="center">
                  Basic Details
                </Heading>

                <Text>Name</Text>
                <Text fontSize="xs">
                  How would you like people to find you?
                </Text>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder="The name that will be displayed on your profile"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />

                <Text>Description</Text>
                <Text fontSize="xs">
                  Let people know what is going on in your life
                </Text>
                <Textarea
                  position="static"
                  bgColor="white"
                  placeholder="Here goes a brief description of yourself"
                  name="description"
                  value={description}
                  onChange={(e) => onChange(e)}
                />

                <Text size="sm">Location</Text>
                <Text fontSize="xs">Where are you located right now?</Text>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder="e.g. Madrid, Spain or Nomad"
                  name="location"
                  value={location}
                  onChange={(e) => onChange(e)}
                />

                <Heading size="md" textAlign="center">
                  Links and Socials
                </Heading>

                <Text size="sm">Website</Text>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder="e.g. developer.com"
                  name="website"
                  value={website}
                  onChange={(e) => onChange(e)}
                />

                <Text size="sm">Social Links</Text>

                <ButtonGroup w="50%">
                  <ButtonBlack onClick={openLinksModal}>Add Links</ButtonBlack>
                </ButtonGroup>

                <LinksSection profileLinks={profileLinks} />
              </Stack>
            </Box>
          </Stack>
        </Flex>

        <ButtonGroup
          display="flex"
          flexDirection="column"
          m="5px"
          mt="2.5%"
          padding="1px"
          w="100%"
        >
          <ButtonGreen onClick={onSubmit}>Save Profile</ButtonGreen>
          <ButtonOrange>Dismiss Changes</ButtonOrange>
        </ButtonGroup>
      </Box>
    </>
  );
}
