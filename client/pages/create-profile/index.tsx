import React, { useState } from "react";

import {Box, Input, Select, } from "@chakra-ui/react";

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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
      <Box>

      </Box>
  )
}
