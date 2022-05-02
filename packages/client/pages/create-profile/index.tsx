import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Grid, GridItem } from '@chakra-ui/layout';

import { Box, Text } from '@chakra-ui/react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { YourDetails } from '@/components/create-profile/YourDetails';
import { BasicDetails } from '@/components/create-profile/BasicDetails';
import { SocialLinks } from '@/components/create-profile/SocialLinks';
import { FormButtonGroup } from '@/components/create-profile/FormButtonGroup';
import { ProgressGroup } from '@/components/create-profile/ProgressGroup';

export type FormProps = {
  formData: formData;
  onChange: (e: React.FormEvent) => void;
  setFormData: (formData: formData) => void;
};

type Projects = {
  title: string;
  github_url: string;
  description: string;
  created_by: string;
};

export type formData = {
  status: string;
  name: string;
  username: string;
  description: string;
  title: string;
  location: string;
  website: string;
  projects: Projects[];
};

export type pageNumber = 0 | 1 | 2;

export default function CreateProfile() {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState<formData>({
    status: '',
    name: '',
    username: '',
    description: '',
    title: '',
    location: '',
    website: '',
    projects: [],
  });

  const [pageIndex, setPageIndex] = useState<pageNumber>(0);

  const goNextPage = () => {
    let newPageIndex = pageIndex + 1;
    if (newPageIndex >= 0 && newPageIndex <= 2) {
      setPageIndex(newPageIndex as pageNumber);
    } else {
      setPageIndex(0);
    }
  };

  const goBackPage = () => {
    let newPageIndex = pageIndex - 1;
    if (newPageIndex >= 0 && newPageIndex <= 2) {
      setPageIndex(newPageIndex as pageNumber);
    } else {
      setPageIndex(0);
    }
  };

  const onChange = (e: React.FormEvent) =>
    setFormData({
      ...formData,
      [(e.target as HTMLTextAreaElement).name]: (
        e.target as HTMLTextAreaElement
      ).value,
    });

  const onSubmit = async (e: React.FormEvent) => {
    console.log(formData);
    e.preventDefault();
  };

  const renderSwitch = (index: pageNumber) => {
    switch (index) {
      case 0:
        return <YourDetails formData={formData} onChange={onChange} />;
      case 1:
        return <BasicDetails formData={formData} onChange={onChange} />;
      case 2:
        return (
          <SocialLinks
            formData={formData}
            setFormData={setFormData}
            onChange={onChange}
          />
        );
      default:
        return <YourDetails formData={formData} onChange={onChange} />;
    }
  };

  return (
    // issue: width to be fixed.
    <Box
      bg={'none'}
      width="137vh"
      boxSizing="border-box"
      ml="25px"
      height={{ lg: 'calc(100vh - var(--chakra-space-14))', sm: 'auto' }}
    >
      <Grid height="100vh" templateColumns="repeat(4, 1fr)">
        <GridItem
          height="100vh"
          borderRightWidth="1px"
          borderColor="gray.200"
          colSpan={3}
          pr="120px"
        >
          <Grid height="100vh" templateRows="repeat(7, 1fr)">
            <GridItem rowSpan={6}>
              <Box>{renderSwitch(pageIndex)}</Box>
            </GridItem>
            <GridItem pb="-7vh" rowSpan={1}>
              <FormButtonGroup
                goBackPage={goBackPage}
                goNextPage={goNextPage}
                onSubmit={onSubmit}
                pageIndex={pageIndex}
                formData={formData}
              />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={1}>
          <Text
            color="neutral.400"
            letterSpacing="2px"
            font="Inter"
            justify="left"
            textTransform="uppercase"
            fontSize="xs"
            p="3"
            pl="5"
          >
            Profile completion progress
          </Text>
          <ProgressGroup pageIndex={pageIndex} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
