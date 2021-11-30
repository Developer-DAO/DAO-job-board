import { useState, Dispatch, SetStateAction } from 'react';
import {
  TextInput,
  Select,
  NumberInput,
  FormControl,
} from '@/components/form-elements';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  ButtonGreen,
  ButtonOrange,
  ButtonBlack,
} from '@/styles/ui-components/Chakra-Button';

import {
  Heading,
  Box,
  Container,
  Tag,
  Stack,
  Text,
  ButtonGroup,
  TagLabel,
  TagCloseButton,
  HStack,
  VisuallyHidden,
  FormLabel,
} from '@chakra-ui/react';

import type { JobFormData } from '@/types';

type JobDetailProps = {
  setStep: Dispatch<SetStateAction<number>>;
  setFormData: Dispatch<SetStateAction<JobFormData>>;
  formData: JobFormData;
};

const schema = z.object({
  compensation: z.string().min(1, 'this field is required'),
  min: z.string(),
  max: z.string(),
  // min: z.number(),
  // max: z.number(),
  equity: z.string(),
  location: z.string(),
});

export type Inputs = z.infer<typeof schema>;

export default function JobDetails(props: JobDetailProps) {
  const { setFormData, setStep, formData } = props;
  const { compensation, min, max, equity, location } = formData;
  //Active state makes inputs red if data is not correct
  const [wrongData, setWrongData] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: { compensation, min, max, equity, location },
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
        {' '}
        <Heading color="black">Job Details</Heading>
        <Text color="black" as="i">
          Define the job category, compensation, and location
        </Text>
      </Container>

      <Box maxW="100%">
        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          Pick a job keyword category
        </Heading>

        {!wrongData ? (
          <Text fontSize="xs" textAlign="left">
            Keywords help categorize your job post (pick at least 3)
          </Text>
        ) : (
          <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
            Make sure to pick at least 3 keywords
          </Text>
        )}

        <HStack
          spacing={4}
          mt="2.5%"
          mb="2.5%"
          border={!wrongData ? 'none' : '1px solid red'}
        >
          <ButtonBlack>Select Keywords</ButtonBlack>
          <Tag
            // onClick={selectCategory}
            size="md"
            borderRadius="full"
            variant="solid"
            colorScheme="red"
            color="black"
          >
            <TagLabel>Keyword</TagLabel>
            <TagCloseButton />
          </Tag>
        </HStack>

        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          Explain compensation (optional)
        </Heading>
        <Text fontSize="xs" textAlign="left" mb="2.5%">
          Jobs with compensation info get more applications
        </Text>
        <FormControl errors={errors.compensation}>
          <VisuallyHidden>
            <FormLabel htmlFor="compensation">Job compensation</FormLabel>
          </VisuallyHidden>
          <Select
            bg="white"
            bgColor="white"
            borderColor="#e2e8f0"
            _hover={{ borderColor: '#97c0e6' }}
            name="compensation"
            placeholder="Token / Currency"
            register={register}
            errors={errors.compensation}
          >
            <optgroup label="Crypto">
              {['ETH', 'SOL', 'BTC', 'USDT'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </optgroup>
            <optgroup label="Fiat">
              {['USD', 'EUR', 'GBP', 'CAD', 'AUD'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </optgroup>
          </Select>
        </FormControl>

        <br />
        <Stack direction={['column', 'row']} spacing="24px">
          <FormControl errors={errors.min}>
            <VisuallyHidden>
              <FormLabel htmlFor="min">compensation minimum</FormLabel>
            </VisuallyHidden>
            <NumberInput
              id="min"
              inputField={{ placeholder: 'min amount' }}
              name="min"
              register={register}
              errors={errors.min}
              // options={{ valueAsNumber: true }}
              // defaultValue={0}
            />
          </FormControl>
          <FormControl errors={errors.max}>
            <VisuallyHidden>
              <FormLabel htmlFor="max">compensation maximum</FormLabel>
            </VisuallyHidden>
            <NumberInput
              id="max"
              inputField={{ placeholder: 'max amount' }}
              name="max"
              register={register}
              errors={errors.max}
              // options={{ valueAsNumber: true }}
              // defaultValue={0}
            />
          </FormControl>
        </Stack>

        <br />

        <Heading mb="1%" mt="1%" color="black" fontSize="md" textAlign="left">
          Do you offer equity? (optional)
        </Heading>

        <FormControl errors={errors.equity}>
          <VisuallyHidden>
            <FormLabel htmlFor="equity">Job Equity Range</FormLabel>
          </VisuallyHidden>
          <Select
            id="equity"
            bgColor="white"
            bg="white"
            borderColor="#e2e8f0"
            _hover={{ borderColor: '#97c0e6' }}
            name="equity"
            register={register}
            errors={errors.equity}
            placeholder="Equity Range"
          >
            {['0.01-1%', '1%-2%', '2%-5%', '+5%'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>

        <br />

        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          Location (optional)
        </Heading>
        <Text fontSize="xs" textAlign="left" mb="1%">
          Defaults to remote if empty
        </Text>

        <FormControl errors={errors.location}>
          <VisuallyHidden>
            <FormLabel htmlFor="location">Job location</FormLabel>
          </VisuallyHidden>
          <TextInput
            id="location"
            bgColor="white"
            bg="white"
            color="black"
            _hover={{ borderColor: '#97c0e6' }}
            placeholder="e.g California, US"
            name="location"
            register={register}
            errors={errors.location}
          />
        </FormControl>
      </Box>
      <br />
      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonGreen type="submit">Continue</ButtonGreen>
        <ButtonBlack onClick={() => setStep((prev) => prev - 1)}>
          Go back
        </ButtonBlack>
        <ButtonOrange>Cancel</ButtonOrange>
      </ButtonGroup>
    </form>
  );
}
