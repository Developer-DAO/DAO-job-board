import React, { useState } from 'react';

import {
  chakra,
  Box,
  Text,
  Icon,
  Form,
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
import {
  faGithub,
  faProductHunt,
  faTwitter,
  faLinkedinIn,
  faBehance,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

export default function AddLinks({
  profileLinks,
  openLinksModal,
  closeLinksModal,
  linksDataHandler,
}) {
  //formData where links are stored (takes the profileLinks props from parent component)
  const [formData, setFormData] = useState(profileLinks);

  const { linkedin, twitter, behance, dribbble, producthunt } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    linksDataHandler(formData);
    closeLinksModal();
  };

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="100vh"
        bg="rgba(0, 0, 0, 0.5)"
        onClick={closeLinksModal}
      ></Box>

      <Box
        position="fixed"
        borderRadius="18px"
        p={2}
        m="auto"
        left="50%"
        top="50%"
        mt="-25%"
        ml="-25%"
        w={{ '2xl': '50%', sm: '80%' }}
        textAlign="center"
        bg="#ffffff"
        zIndex={1000}
      >
        <Heading>Add Socials</Heading>
        <chakra.form>
          <VStack spacing={4}>
            <InputGroup>
              <InputLeftAddon>
                {' '}
                <FontAwesomeIcon icon={faTwitter} />
              </InputLeftAddon>
              <Input
                placeholder="username"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              ></Input>
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>
                {' '}
                <FontAwesomeIcon icon={faLinkedinIn} />
              </InputLeftAddon>
              <Input
                placeholder="username"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
              ></Input>
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>
                {' '}
                <FontAwesomeIcon icon={faProductHunt} />
              </InputLeftAddon>
              <Input
                placeholder="@username"
                name="producthunt"
                value={producthunt}
                onChange={(e) => onChange(e)}
              ></Input>
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>
                {' '}
                <FontAwesomeIcon icon={faBehance} />
              </InputLeftAddon>
              <Input
                placeholder="username"
                name="behance"
                value={behance}
                onChange={(e) => onChange(e)}
              ></Input>
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>
                {' '}
                <FontAwesomeIcon icon={faDribbble} />
              </InputLeftAddon>
              <Input
                placeholder="username"
                name="dribbble"
                value={dribbble}
                onChange={(e) => onChange(e)}
              ></Input>
            </InputGroup>

            <ButtonGroup
              display="flex"
              flexDirection="column"
              m="5px"
              padding="1px"
              w="100%"
            >
              <ButtonBlue onClick={onSubmit}>Save Links</ButtonBlue>
              <ButtonOrange onClick={closeLinksModal}>Go Back</ButtonOrange>
            </ButtonGroup>
          </VStack>
        </chakra.form>
      </Box>
    </>
  );
}
