import React, { useState } from "react";

import {Box, Heading, Container, Flex, SimpleGrid, Tag, TagLabel, Switch, Input, Textarea, Image, Select, } from "@chakra-ui/react";

import {ButtonBlack, ButtonGreen, ButtonRed} from "@chakra-ui/react";

export default function CreateProfile() {

  const [formData, setFormData] = useState({
    status: "",
    name: "",
    username: "",
    title: "",
    location: "",
    bio: "",
    website: ""});

  const { status, name, title, location, description, website } = formData;

  const onChange = (e: React.FormEvent) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <Box
      display="flex"
      bg={{lg: "#ffffff", sm:"none"}}
      flexDirection={{lg: "row", md:"row", sm: "column"}}
      width={{"2xl": "70%", md: "90%", sm: "100%"}}
      margin="auto"
      boxSizing="border-box"
      boxShadow={{lg: "0px 0px 2px 4px #e2e8f0", sm: "none"}}
      p="0.5%"
      mt="2.5%"
    >

    <Flex
    bg="none"
    direction="column"
    width="100%"
    margin="auto"
    textAlign="center"
    boxSizing="border-box"
    boxShadow="none"
    flex={1}
    >
        <Heading size="sm">PFP</Heading>
        <Image
        w="8rem"
        h="8rem"
        margin="auto"
        borderRadius="180px"
        src="/DevDAO.png"
        alt="developer"
        >
        </Image>
    </Flex>

    <Flex
      bg="none"
      direction="column"
      width="100%"
      margin="auto"
      boxSizing="border-box"
      boxShadow="none"
      flex={2}
    >
      <Container
        p="0px"
        mt="5px"
        maxW={{sm: "100%"}}
        display="inline-box"
      >
        <Heading size="sm">Basic Details</Heading>
        <Input/>

      </Container>

      <Container
        p="0px"
        m="0"
        maxW={{lg: "auto", md:"auto", sm: "100%"}}
        display="inline-box"
      >
        <Textarea
        placeholder="Here goes a brief description of the user"/>
      </Container>

    <SimpleGrid
    mt="15px"
    templateColumns="repeat(5, 2fr)"
    autoRows="fit-content"
    gap="0.5rem"
    spacing={1}>
      <ButtonBlack>
        Choose Keywords
      </ButtonBlack>
      <Tag
      size="md"
      borderRadius="8px"
      bgColor="#E2E9F0"
      color="black"
      ><TagLabel m="auto">First Keyword</TagLabel></Tag>
    </SimpleGrid>

    </Flex>
    </Box>
  )
}
