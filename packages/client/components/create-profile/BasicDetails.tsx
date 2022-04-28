import { Stack, Box, Heading, Text, Input, Textarea } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FormProps } from '@/pages/create-profile';

export const BasicDetails = ({
  formData,
  onChange,
}: Omit<FormProps, 'setFormData'>) => {
  const { t } = useTranslation('common');
  const { name, location, description, website } = formData;

  return (
    <Stack direction="column" width="100%" flex={2}>
      <Box p="0px" maxW={{ sm: '100%' }} display="inline-box">
        <Stack spacing="xs" mt="2.5%">
          <Heading size="md" textAlign="center">
            {t('pages.create_profile.basic_details')}
          </Heading>

          <Text>{t('pages.create_profile.name')}</Text>
          <Text fontSize="xs">{t('pages.create_profile.name_sub_text')}</Text>
          <Input
            position="static"
            bgColor="white"
            w="60vh"
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
            w="60vh"
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
            w="60vh"
            position="static"
            bgColor="white"
            placeholder={t('pages.create_profile.location_placeholder')}
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
        </Stack>
      </Box>
    </Stack>
  );
};
