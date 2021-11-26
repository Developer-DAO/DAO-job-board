import React, { useState } from 'react';

import {
  chakra,
  Box,
  Input,
  Heading,
  VStack,
  InputGroup,
  InputLeftAddon,
  ButtonGroup,
} from '@chakra-ui/react';

import {
  ButtonBlue,
  ButtonOrange,
} from '../../styles/ui-components/Chakra-Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faGithub,
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

type LinksProps = {
  profileLinks: {
    linkedin: string;
    twitter: string;
    behance: string;
    dribbble: string;
    producthunt: string;
    github: string;
  };
  closeLinksModal: () => void;
  linksDataHandler: (formData: React.ReactNode) => void;
};

export default function AddLinks({
  profileLinks,
  closeLinksModal,
  linksDataHandler,
}: LinksProps) {
  //formData where links are stored (takes the profileLinks props from parent component)
  const [formData, setFormData] = useState({
    github: '',
    linkedin: '',
    twitter: '',
    behance: '',
    dribbble: '',
    producthunt: '',
  });

  const linksIcons = () => {
    let faIconArray = [];
    for (let link in profileLinks) {
      const linkText = link.charAt(0).toUpperCase() + link.slice(1);
      const faIconText = 'fa' + linkText;
      const faPropIcon = faIconText as IconProp;

      faIconArray.push(<FontAwesomeIcon icon={faPropIcon} />);
    }

    return faIconArray;
  };

  const linkInputs = () => {
    for (let link in profileLinks) {
      return (
        <>
          <InputGroup>
            <InputLeftAddon> {linksIcons}</InputLeftAddon>
            <Input
              bgColor="white"
              placeholder="user"
              name={link}
              value={link}
              onChange={(e) => onChange(e)}
            />
          </InputGroup>
        </>
      );
    }
  };

  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as HTMLTextAreaElement).name]: (
        e.target as HTMLTextAreaElement
      ).value,
    });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

// <InputGroup>
//   <InputLeftAddon>
//     {' '}
//     <FontAwesomeIcon icon={faGithub} />
//   </InputLeftAddon>
//   <Input
//     bgColor="white"
//     placeholder="user"
//     name="github"
//     value={github}
//     onChange={(e) => onChange(e)}
//   />
// </InputGroup>
//
// <InputGroup>
//   <InputLeftAddon>
//     {' '}
//     <FontAwesomeIcon icon={faTwitter} />
//   </InputLeftAddon>
//   <Input
//     placeholder="username"
//     name="twitter"
//     value={twitter}
//     onChange={(e) => onChange(e)}
//   ></Input>
// </InputGroup>
//
// <InputGroup>
//   <InputLeftAddon>
//     {' '}
//     <FontAwesomeIcon icon={faLinkedinIn} />
//   </InputLeftAddon>
//   <Input
//     placeholder="username"
//     name="linkedin"
//     value={linkedin}
//     onChange={(e) => onChange(e)}
//   ></Input>
// </InputGroup>
//
// <InputGroup>
//   <InputLeftAddon>
//     {' '}
//     <FontAwesomeIcon icon={faProductHunt} />
//   </InputLeftAddon>
//   <Input
//     placeholder="username"
//     name="producthunt"
//     value={producthunt}
//     onChange={(e) => onChange(e)}
//   ></Input>
// </InputGroup>
//
// <InputGroup>
//   <InputLeftAddon>
//     {' '}
//     <FontAwesomeIcon icon={faBehance} />
//   </InputLeftAddon>
//   <Input
//     placeholder="username"
//     name="behance"
//     value={behance}
//     onChange={(e) => onChange(e)}
//   ></Input>
// </InputGroup>
//
// <InputGroup>
//   <InputLeftAddon>
//     {' '}
//     <FontAwesomeIcon icon={faDribbble} />
//   </InputLeftAddon>
//   <Input
//     placeholder="username"
//     name="dribbble"
//     value={dribbble}
//     onChange={(e) => onChange(e)}
//   ></Input>
// </InputGroup>
//
