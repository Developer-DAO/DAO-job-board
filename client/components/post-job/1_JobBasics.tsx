import { Dispatch, SetStateAction } from 'react';
import {
  TextInput,
  Select,
  Textarea,
  FormControl,
} from '@/components/form-elements';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import type { JobFormData } from '@/types';
// UI & CSS
import {
  ButtonGreen,
  ButtonOrange,
} from '@/styles/ui-components/Chakra-Button';

import {
  Heading,
  Container,
  Box,
  Text,
  ButtonGroup,
  FormLabel,
  VisuallyHidden,
} from '@chakra-ui/react';

type JobBasicProps = {
  setStep: Dispatch<SetStateAction<number>>;
  setFormData: Dispatch<SetStateAction<JobFormData>>;
  formData: JobFormData;
};

const schema = z.object({
  title: z.string().min(10, 'minimum required length is 10'),
  position: z.string().min(1, 'this field is required'),
  type: z.string().min(1, 'this field is required'),
  description: z.string().min(100, 'minimum required length is 100'),
});

export type Inputs = z.infer<typeof schema>;

export default function JobBasics(props: JobBasicProps) {
  const { setFormData, setStep, formData } = props;
  const { title, position, type, description } = formData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: { title, position, type, description },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormData((prev) => {
      return { ...prev, ...data };
    });
    setStep((prev) => {
      return prev + 1;
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container textAlign="center" mt="2.5%" mb="2.5%">
        <Heading color="black">Job Basics</Heading>
        <Text color="black" as="i">
          Let us know what type of professional you are looking for
        </Text>
      </Container>
      <Box maxW="100%">
        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          Write a clear title for your job post
        </Heading>
        <FormControl errors={errors.title}>
          <VisuallyHidden>
            <FormLabel htmlFor="title">Job title</FormLabel>
          </VisuallyHidden>
          <TextInput
            id="title"
            bgColor="white"
            bg="white"
            color="black"
            _hover={{ borderColor: '#97c0e6' }}
            placeholder="e.g. Full-Stack Blockchain Engineer"
            name="title"
            register={register}
            errors={errors.title}
          />
        </FormControl>

        <br />

        <Heading mb="5px" fontSize="md" textAlign="left">
          Pick a job position
        </Heading>
        <FormControl errors={errors.position}>
          <VisuallyHidden>
            <FormLabel htmlFor="position">Job Positions</FormLabel>
          </VisuallyHidden>
          <Select
            id="position"
            bgColor="white"
            bg="white"
            borderColor="#e2e8f0"
            _hover={{ borderColor: '#97c0e6' }}
            name="position"
            register={register}
            errors={errors.position}
            placeholder="Select Job Positions"
          >
            {[
              'Co-Founder',
              'Engineering',
              'Marketing',
              'Sales',
              'Design',
              'Community',
              'Art',
              'Customer Support',
              'Writing',
              'Other',
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        <br />
        <Heading mb="5px" fontSize="md" textAlign="left">
          What type of job is it?
        </Heading>
        <FormControl errors={errors.type}>
          <VisuallyHidden>
            <FormLabel htmlFor="type">Job Positions</FormLabel>
          </VisuallyHidden>
          <Select
            id="type"
            bgColor="white"
            bg="white"
            borderColor="#e2e8f0"
            _hover={{ borderColor: '#97c0e6' }}
            name="type"
            register={register}
            errors={errors.type}
            placeholder="Select Job Positions"
          >
            {['Full-Time', 'Part-Time', 'Contract', 'Paid Internship'].map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
          </Select>
        </FormControl>
        <br />
        <Heading mb="5px" fontSize="md" textAlign="left">
          Describe the job
        </Heading>
        <FormControl errors={errors.description}>
          <VisuallyHidden>
            <FormLabel htmlFor="description">Job description</FormLabel>
          </VisuallyHidden>
          <Textarea
            id="description"
            bgColor="white"
            _hover={{ borderColor: '#97c0e6' }}
            name="description"
            register={register}
            errors={errors.description}
            placeholder="e.g. We are looking for an experienced full-stack blockhain engineer with at least 3 years..."
          />
        </FormControl>
      </Box>
      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonGreen type="submit">Continue</ButtonGreen>
        <ButtonOrange>Cancel</ButtonOrange>
      </ButtonGroup>
    </form>
  );
}
