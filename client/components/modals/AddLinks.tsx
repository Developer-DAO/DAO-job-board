import React, { useState } from 'react';

import {
  chakra,
  Input,
  Heading,
  VStack,
  InputGroup,
  InputLeftAddon,
  ButtonGroup,
  Text,
} from '@chakra-ui/react';

import { ButtonBlue, ButtonOrange } from '@/styles/ui-components/Chakra-Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  IconProp,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

import {
  faGithub,
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

import fontawesome from '@fortawesome/fontawesome';

type LinksProps = {
  profileLinks: Links[];
  closeLinksModal: () => void;
  linksDataHandler: (formData: React.ReactNode) => void;
};

interface Links {
  linkedin: string;
  twitter: string;
  behance: string;
  dribbble: string;
  producthunt: string;
  github: string;
}

export default function AddLinks({
  profileLinks,
  closeLinksModal,
  linksDataHandler,
}: LinksProps) {
  //formData where links are stored (takes the profileLinks props from parent component)
  const [formData, setFormData] = useState(profileLinks);

  fontawesome.library.add(
    faGithub,
    faProductHunt,
    faTwitter,
    faLinkedinIn,
    faBehance,
    faDribbble
  );

  const linksIcons = (link: string) => {
    let propIcon = null;
    const linkText = link.charAt(0).toUpperCase() + link.slice(1);
    const iconText = linkText;

    propIcon = iconText;

    if (iconText === 'Producthunt') {
      propIcon = 'ProductHunt';
    }

    if (iconText === 'Linkedin') {
      propIcon = 'LinkedinIn';
    }

    return (
      <FontAwesomeIcon icon={['fa' as IconPrefix, propIcon as IconName]} />
    );
  };

  const linkInputs = (
    <>
      {Object.keys(profileLinks).map((link) => (
        <InputGroup>
          <InputLeftAddon>{linksIcons(link)}</InputLeftAddon>
          <Input
            bgColor="white"
            placeholder={`your ${link} username`}
            name={link}
            onChange={(e) => onChange(e)}
          />
        </InputGroup>
      ))}
    </>
  );

  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as HTMLTextAreaElement).name]: (
        e.target as HTMLTextAreaElement
      ).value,
    });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // linksDataHandler(formData);
    // closeLinksModal();
  };

  return (
    <>
      <VStack
        spacing={2}
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
        zIndex={1000}
      >
        <Heading size="md">Add Socials</Heading>
        <chakra.form>
          <VStack spacing={4}>
            {linkInputs}

            <ButtonGroup
              display="flex"
              flexDirection="column"
              m="5px"
              padding="1px"
              w="100%"
            >
              <ButtonBlue onClick={onSubmit}>Save Links</ButtonBlue>
              <ButtonOrange onClick={closeLinksModal}>Cancel</ButtonOrange>
            </ButtonGroup>
          </VStack>
        </chakra.form>
      </VStack>
    </>
  );
}
