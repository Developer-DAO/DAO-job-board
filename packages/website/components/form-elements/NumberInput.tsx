import * as React from 'react';
import {
  Path,
  UseFormRegister,
  RegisterOptions,
  FieldErrors,
} from 'react-hook-form';
import {
  NumberInput as ChakraNumberInput,
  FormErrorMessage,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import type {
  NumberInputProps as ChakraNumberInputProps,
  NumberInputFieldProps,
} from '@chakra-ui/react';

export type NumberInputProps<T> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  options?: RegisterOptions;
  errors: FieldErrors | undefined;
  inputField?: NumberInputFieldProps;
} & Omit<ChakraNumberInputProps, 'name'>;

export function NumberInput<T>(props: NumberInputProps<T>) {
  const { name, options, register, errors, inputField, ...rest } = props;
  return (
    <>
      <ChakraNumberInput {...rest}>
        <NumberInputField {...register(name, { ...options })} {...inputField} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
      {errors ? <FormErrorMessage>{errors.message}</FormErrorMessage> : null}
    </>
  );
}
