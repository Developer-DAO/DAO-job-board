import * as React from 'react';
import {
  Path,
  UseFormRegister,
  RegisterOptions,
  FieldErrors,
} from 'react-hook-form';
import { Input, FormErrorMessage } from '@chakra-ui/react';
import type { InputProps } from '@chakra-ui/react';

export type TextInputProps<T> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  options?: RegisterOptions;
  errors: FieldErrors | undefined;
} & Omit<InputProps, 'name'>;

export function TextInput<T>(props: TextInputProps<T>) {
  const { name, options, register, errors, ...rest } = props;
  return (
    <>
      <Input {...register(name, { ...options })} {...rest} />
      {errors ? <FormErrorMessage>{errors.message}</FormErrorMessage> : null}
    </>
  );
}
