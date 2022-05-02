import { DeleteIcon } from '@chakra-ui/icons';
import {
  VStack,
  Text,
  StackDivider,
  Flex,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Input,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Project from './project';
import { FormProps } from '@/pages/create-profile';
import LinksSection from './LinksSection';
import { useState } from 'react';
import AddLinks from '../modals/AddLinks';

export const SocialLinks = ({ formData, setFormData, onChange }: FormProps) => {
  const { t } = useTranslation('common');

  const { website } = formData;

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
      <Stack spacing="xs" mt="2.5%">
        <Heading size="md" textAlign="center">
          {t('pages.create_profile.links_header')}
        </Heading>

        <Text size="sm">{t('pages.create_profile.website')}</Text>
        <Input
          position="static"
          bgColor="white"
          w="60vh"
          placeholder={t('pages.create_profile.website_placeholder')}
          name="website"
          value={website}
          onChange={(e) => onChange(e)}
        />

        <Text size="sm">{t('pages.create_profile.social_links')}</Text>

        <ButtonGroup w="50%">
          <Button
            bg="primary.700"
            color="white"
            _hover={{ bg: 'primary.500' }}
            onClick={openLinksModal}
          >
            {t('pages.create_profile.social_button_text')}
          </Button>
        </ButtonGroup>

        <LinksSection profileLinks={profileLinks} />
      </Stack>

      <Text size="sm">{t('pages.create_profile.projects')}</Text>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        align="stretch"
        spacing="medium"
      >
        {formData.projects.map((project, index) => {
          return (
            <Flex alignItems="center" justify="space-between" key={index}>
              <Project
                index={index}
                changeHandler={projectDataChangeHandler}
                title={project.title}
                github_url={project.github_url}
                description={project.description}
                created_by={project.created_by}
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

      <Box my={4}>
        <Button
          bg="primary.700"
          color="white"
          _hover={{ bg: 'primary.500' }}
          onClick={() => {
            setFormData({
              ...formData,
              projects: [
                ...formData.projects,
                {
                  github_url: '',
                  title: '',
                  description: '',
                  created_by: '',
                },
              ],
            });
          }}
        >
          {t('pages.create_profile.projects_button_text')}
        </Button>
      </Box>
    </>
  );
};
