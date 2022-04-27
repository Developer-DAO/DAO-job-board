import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import KeywordsSection from '../forms/KeywordsSection';
import AddAvatar from './AddAvatar';
import { FormProps } from '@/pages/create-profile';
import { useState } from 'react';
import { Keyword } from '@/types/keyword';
import KeywordSelect from '../modals/SelectKeywords';

export const YourDetails = ({
  formData,
  onChange,
}: Omit<FormProps, 'setFormData'>) => {
  const { t } = useTranslation('common');
  const { status, username, title } = formData;
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

  return (
    <>
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
      <Flex flexDirection="column">
        <Stack direction="column" flex={2} spacing="large">
          <Stack mb="-6rem">
            <Box
              mt="20px"
              pr="50px"
              borderRadius="0.5rem"
              bg="#2C56DD"
              w="95vh"
              h="20vh"
              opacity="20%"
            ></Box>
            <Box pos="relative" top="-5rem" left="-15rem">
              <AddAvatar src="/DevDAO.png" />
            </Box>
          </Stack>

          <Stack direction="column" textAlign="left" spacing="xs">
            <Text>{t('pages.create_profile.identity') + '*'}</Text>
            <Text fontSize="xs">{t('pages.create_profile.min_chars')}</Text>
            <InputGroup position="static">
              <InputLeftAddon>@</InputLeftAddon>
              <Input
                w="55vh"
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
              w="60vh"
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
              w="60vh"
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
              <Button
                bg="primary.700"
                color="white"
                _hover={{ bg: 'primary.500' }}
                onClick={openKeywordModal}
              >
                {t('pages.create_profile.choose_keywords')}
              </Button>
            </ButtonGroup>
            <KeywordsSection
              templateColumns="repeat(3, 3fr)"
              keywordsData={profileKeywords}
            />
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};
