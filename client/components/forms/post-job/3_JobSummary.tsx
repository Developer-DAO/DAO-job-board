import { useState, Dispatch, SetStateAction } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, FormControl } from '@/components/form-elements';
import * as z from 'zod';
// UI & CSS
import {
  ButtonBlue,
  ButtonGray,
  ButtonOrange,
} from '@/styles/ui-components/Chakra-Button';

import {
  Heading,
  Tag,
  VisuallyHidden,
  Container,
  Text,
  ButtonGroup,
  TagLabel,
  HStack,
  FormLabel,
} from '@chakra-ui/react';

import type { JobFormData } from '@/types';

type JobSummaryProps = {
  setStep: Dispatch<SetStateAction<number>>;
  setFormData: Dispatch<SetStateAction<JobFormData>>;
  formData: JobFormData;
  createJob: () => void;
};

const schema = z.object({
  contact: z.string().min(1, 'this field is required'),
});

export type Inputs = z.infer<typeof schema>;

export default function JobSummary(props: JobSummaryProps) {
  //Active state makes inputs red if data is not correct
  const { setFormData, setStep, formData, createJob } = props;
  const {
    title,
    description,
    type,
    position,
    compensation,
    min,
    max,
    equity,
    location,
    contact,
  } = formData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: { contact },
  });

  const goToDetails = () => {
    setStep(2);
  };
  const goToBasics = () => {
    setStep(1);
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormData((prev) => {
      return { ...prev, ...data };
    });
    createJob();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container textAlign="center" mt="2.5%" mb="2.5%">
        <Heading>Job Summary</Heading>
        <Text>Check that everything is correct (click edit if not)</Text>
      </Container>

      <Container margin="auto" textAlign="center" maxW="100%">
        <Heading fontSize="lg">Job Basics</Heading>
        <ButtonGray onClick={goToBasics}>Edit</ButtonGray>
      </Container>

      <Container maxW="100%">
        <Heading fontSize="sm">Job Name:</Heading> {title}
        <br />
        <br />
        <Heading fontSize="sm">Job Description:</Heading> {description}
        <br />
        <br />
        {position && (
          <>
            <Heading fontSize="sm">Job Position:</Heading> {position}
          </>
        )}
        <br />
        <br />
        {type && (
          <>
            <Heading fontSize="sm">Job Type:</Heading> {type}
          </>
        )}
      </Container>

      <br />

      <Container margin="auto" textAlign="center" maxW="100%">
        <Heading fontSize="lg">Job Details</Heading>
        <ButtonGray onClick={goToDetails}>Edit</ButtonGray>
      </Container>

      <Container maxW="100%">
        <Heading fontSize="sm">Category:</Heading>
        <HStack spacing={4} mt="2.5%" mb="2.5%">
          <Tag size="md" borderRadius="full" variant="solid" color="black">
            <TagLabel>Keyword</TagLabel>
          </Tag>
        </HStack>

        {compensation && min && max ? (
          <>
            <Heading fontSize="sm">Job Compensation:</Heading> {min}-{max}{' '}
            {compensation}
          </>
        ) : null}

        <br />
        <br />

        {equity ? (
          <>
            <Heading fontSize="sm">Equity Offer:</Heading> {equity}
          </>
        ) : null}

        <br />
        <br />

        {location ? (
          <>
            <Heading fontSize="sm">Job Location:</Heading> {location}
          </>
        ) : null}

        <br />
        <br />

        <Heading fontSize="md">
          How should people contact you or your company?
        </Heading>
        <Text fontSize="xs" textAlign="left" mb="2.5%">
          Write your website job post link or an email
        </Text>
        <FormControl errors={errors.contact}>
          <VisuallyHidden>
            <FormLabel htmlFor="contact">Job contact link or email</FormLabel>
          </VisuallyHidden>
          <TextInput
            id="contact"
            bgColor="white"
            bg="white"
            color="black"
            _hover={{ borderColor: '#97c0e6' }}
            placeholder="e.g. www.company.com/job or company@email.com"
            name="contact"
            register={register}
            errors={errors.contact}
          />
        </FormControl>
      </Container>

      <br />

      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonBlue type="submit">Post Job</ButtonBlue>

        <ButtonOrange onClick={goToDetails}>Back</ButtonOrange>
      </ButtonGroup>
    </form>
  );
}
