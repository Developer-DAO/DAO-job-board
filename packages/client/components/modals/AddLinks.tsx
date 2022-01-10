import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

import {
  chakra,
  Input,
  Heading,
  VStack,
  InputGroup,
  InputLeftAddon,
  Stack,
  Button,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faGithub,
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
  faDev,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

type LinksProps = {
  profileLinks: ProfileLinkPayload;
  closeLinksModal: () => void;
  linksDataHandler: (formData: React.ReactNode) => void;
};

type ProfileLinkPayload = {
  linkedin: string;
  twitter: string;
  behance: string;
  dribbble: string;
  producthunt: string;
  github: string;
  dev: string;
  medium: string;
};

export default function AddLinks({
  profileLinks,
  closeLinksModal,
  linksDataHandler,
}: LinksProps) {
  const { t } = useTranslation('common');

  //formData where links are stored (takes the profileLinks props from parent component)
  const [formData, setFormData] = useState<ProfileLinkPayload>(profileLinks);

  library.add(
    faGithub,
    faProductHunt,
    faTwitter,
    faLinkedinIn,
    faBehance,
    faDribbble,
    faDev,
    faMedium
  );

  const linksIcons = (link: string) => {
    let propIcon = link;
    if (link === 'producthunt') {
      propIcon = 'product-hunt';
    }

    if (link === 'linkedin') {
      propIcon = 'linkedin-in';
    }

    return (
      <FontAwesomeIcon icon={['fab' as IconPrefix, propIcon as IconName]} />
    );
  };

  const inputValues = (link: string) => {
    let stateValue;

    for (let state in profileLinks) {
      state === link && stateValue == state;
    }

    return stateValue;
  };

  const linkInputs = (
    <>
      {Object.keys(formData).map((link, index) => (
        <InputGroup key={index}>
          <InputLeftAddon>{linksIcons(link)}</InputLeftAddon>
          <Input
            bgColor="white"
            placeholder={t('components.modals.add_links.input_placeholder', {
              link: link,
            })}
            name={link}
            value={inputValues(link) as any}
            onChange={(e) => onChange(e)}
          />
        </InputGroup>
      ))}
    </>
  );
  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    linksDataHandler(formData);
    closeLinksModal();
  };

  return (
    <>
      <VStack
        spacing="xs"
        position="fixed"
        borderRadius="18px"
        p={5}
        m="auto"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%);"
        w={{ '2xl': 'fit-content', sm: '70%' }}
        h="fit-content"
        textAlign="center"
        bg="#ffffff"
        zIndex="modal"
      >
        <Heading size="md">{t('components.modals.add_links.header')}</Heading>
        <chakra.form>
          <VStack spacing="medium">
            {linkInputs}

            <Stack w="100%">
              <Button
                color="white"
                bg="primary.500"
                _hover={{ bg: 'primary.900' }}
                onClick={onSubmit}
              >
                {t('components.modals.add_links.save_button_text')}
              </Button>
              <Button
                color="white"
                bg="danger.500"
                _hover={{ bg: 'danger.900' }}
                onClick={closeLinksModal}
              >
                {t('components.modals.add_links.cancel_button_text')}
              </Button>
            </Stack>
          </VStack>
        </chakra.form>
      </VStack>
    </>
  );
}
