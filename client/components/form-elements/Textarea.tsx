import * as React from 'react';
import {
  Path,
  RegisterOptions,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';
import { Textarea as ChakraTextarea, FormErrorMessage } from '@chakra-ui/react';
import type { TextareaProps as ChakraTextareaProps } from '@chakra-ui/react';

export type TextareaProps<T> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  options?: RegisterOptions;
  errors: FieldErrors | undefined;
} & ChakraTextareaProps;

export function Textarea<T>(props: TextareaProps<T>) {
  const { name, options, errors, register, ...rest } = props;
  return (
    <>
      <ChakraTextarea {...register(name, { ...options })} {...rest} />
      {errors ? <FormErrorMessage>{errors.message}</FormErrorMessage> : null}
    </>
  );
}
