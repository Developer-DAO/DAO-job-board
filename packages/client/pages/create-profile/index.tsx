import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { StackDivider } from '@chakra-ui/layout';

//Social Links Components
import AddLinks from '@/components/modals/AddLinks';
import LinksSection from '@/components/create-profile/LinksSection';
import KeywordsSection from '@/components/forms/KeywordsSection';
import KeywordSelect from '@/components/modals/SelectKeywords';
import { Keyword } from '@/types';
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
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
} from '@chakra-ui/react';

import {
  ButtonPrimary,
  ButtonSuccess,
  ButtonWarning,
} from '@/styles/ui-components/Chakra-Button';
import AddAvatar from '@/components/create-profile/AddAvatar';

import Project from '@/components/create-profile/project';
import { DeleteIcon } from '@chakra-ui/icons';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Projects = {
  title: string;
  githubUrl: string;
  description: string;
};

type formData = {
  status: string;
  name: string;
  username: string;
  description: string;
  title: string;
  location: string;
  website: string;
  projects: Projects[];
};

export default function CreateProfile() {
  const { t } = useTranslation('common');

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

  const [profileLinks, setProfileLinks] = useState({
    github: '',
    linkedin: '',
    twitter: '',
    producthunt: '',
    medium: '',
    dev: '',
    behance: '',
    dribbble: '',
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
        bg="none"
        pt={{ '2xl': '2%', lg: '4%', sm: '6%' }}
        pl={{ '2xl': '5%', lg: '22.5%', sm: '5%', base: '5%' }}
        pr={{ sm: '3%', base: '3%' }}
        pos="relative"
        top="50"
      >
        <Flex flexDirection="column">
          <Stack direction="column" textAlign="center" flex={2} spacing={5}>
            <Heading size="md">{t('pages.create_profile.identity')}</Heading>

            <Stack m="auto" alignItems="center" spacing={2}>
              <Text size="md">{t('pages.create_profile.pfp')}</Text>
              <AddAvatar src="/DevDAO.png" />
            </Stack>

            <Stack direction="column" textAlign="left" spacing={2}>
              <Text>{t('pages.create_profile.identity')}</Text>
              <Text fontSize="xs">{t('pages.create_profile.min_chars')}</Text>
              <InputGroup position="static">
                <InputLeftAddon>@</InputLeftAddon>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder={t('pages.create_profile.username_placeholder')}
                  name="username"
                  value={username}
                  onChange={(e) => onChange(e)}
                />
              </InputGroup>

              <Text>{t('pages.create_profile.professional_title')}</Text>
              <Text fontSize="xs">
                {t('pages.create_profile.profession_type')}
              </Text>
              <Input
                position="static"
                bgColor="white"
                placeholder={t('pages.create_profile.profession_placeholder')}
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
              />

              <Text>{t('pages.create_profile.status')}</Text>
              <Text fontSize="xs">
                {t('pages.create_profile.status_sub_text')}
              </Text>
              <Select
                bgColor="white"
                bg="white"
                borderColor="neutral.200"
                _hover={{ borderColor: 'neutral.200' }}
                name="status"
                value={status}
                onChange={(e) => onChange(e)}
              >
                <option value="" disabled hidden>
                  {t('pages.create_profile.select_status')}
                </option>
                <option value="Available Full-Time ">
                  {t('pages.create_profile.full_time')}
                </option>
                <option value="Available Part-Time">
                  {t('pages.create_profile.part_time')}
                </option>
                <option value="Looking for Contracts">
                  {t('pages.create_profile.contract')}
                </option>
                <option value="Not Available">
                  {t('pages.create_profile.na')}
                </option>
              </Select>

              <Text>{t('pages.create_profile.profile_keywords')}</Text>
              <Text fontSize="xs">
                {t('pages.create_profile.keywords_sub_text')}
              </Text>
              <ButtonGroup>
                <ButtonPrimary onClick={openKeywordModal}>
                  {t('pages.create_profile.choose_keywords')}
                </ButtonPrimary>
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
                  {t('pages.create_profile.basic_details')}
                </Heading>

                <Text>{t('pages.create_profile.name')}</Text>
                <Text fontSize="xs">
                  {t('pages.create_profile.name_sub_text')}
                </Text>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder={t('pages.create_profile.name_placeholder')}
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />

                <Text>{t('pages.create_profile.description')}</Text>
                <Text fontSize="xs">
                  {t('pages.create_profile.description_sub_text')}
                </Text>
                <Textarea
                  position="static"
                  bgColor="white"
                  placeholder={t('pages.create_profile.self_description')}
                  name="description"
                  value={description}
                  onChange={(e) => onChange(e)}
                />

                <Text size="sm">{t('pages.create_profile.location')}</Text>
                <Text fontSize="xs">
                  {t('pages.create_profile.location_sub_text')}
                </Text>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder={t('pages.create_profile.location_placeholder')}
                  name="location"
                  value={location}
                  onChange={(e) => onChange(e)}
                />
              </Stack>

              <Stack spacing={2} mt="2.5%">
                <Heading size="md" textAlign="center">
                  {t('pages.create_profile.links_header')}
                </Heading>

                <Text size="sm">{t('pages.create_profile.website')}</Text>
                <Input
                  position="static"
                  bgColor="white"
                  placeholder={t('pages.create_profile.website_placeholder')}
                  name="website"
                  value={website}
                  onChange={(e) => onChange(e)}
                />

                <Text size="sm">{t('pages.create_profile.social_links')}</Text>

                <ButtonGroup w="50%">
                  <ButtonPrimary onClick={openLinksModal}>
                    {t('pages.create_profile.social_button_text')}
                  </ButtonPrimary>
                </ButtonGroup>

                <LinksSection profileLinks={profileLinks} />
              </Stack>
            </Box>
          </Stack>
        </Flex>

        <Text size="sm">{t('pages.create_profile.projects')}</Text>
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
          <ButtonPrimary
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
            {t('pages.create_profile.projects_button_text')}
          </ButtonPrimary>
        </Box>

        <ButtonGroup
          display="flex"
          flexDirection="column"
          m="5px"
          mt="2.5%"
          padding="1px"
          w="100%"
        >
          <ButtonSuccess onClick={onSubmit}>
            {t('pages.create_profile.save_button_text')}
          </ButtonSuccess>
          <ButtonWarning>
            {t('pages.create_profile.dismiss_button_text')}
          </ButtonWarning>
        </ButtonGroup>
      </Box>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
