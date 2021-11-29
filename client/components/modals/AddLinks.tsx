import React, { useState } from 'react';

import {
  chakra,
  Input,
  Heading,
  VStack,
  InputGroup,
  InputLeftAddon,
  ButtonGroup,
} from '@chakra-ui/react';

import { ButtonBlue, ButtonOrange } from '@/styles/ui-components/Chakra-Button';

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
} from '@fortawesome/free-brands-svg-icons';

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
  const [formData, setFormData] = useState<Links[]>(profileLinks);

  library.add(
    faGithub,
    faProductHunt,
    faTwitter,
    faLinkedinIn,
    faBehance,
    faDribbble
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
      {Object.keys(formData).map((link) => (
        <InputGroup>
          <InputLeftAddon>{linksIcons(link)}</InputLeftAddon>
          <Input
            bgColor="white"
            placeholder={`your ${link} username`}
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
