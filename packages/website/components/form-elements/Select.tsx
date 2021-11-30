import * as React from 'react';
import {
  Path,
  FieldErrors,
  UseFormRegister,
  RegisterOptions,
} from 'react-hook-form';
import { Select as ChakraSelect, FormErrorMessage } from '@chakra-ui/react';
import type { SelectProps as ChakraSelectProps } from '@chakra-ui/react';

export type SelectProps<T> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  options?: RegisterOptions;
  errors: FieldErrors | undefined;
  children: React.ReactNode;
} & ChakraSelectProps;

export function Select<T>(props: SelectProps<T>) {
  const { name, register, options, errors, children, ...rest } = props;
  return (
    <>
      <ChakraSelect {...register(name, { ...options })} {...rest}>
        {children}
      </ChakraSelect>
      {errors ? <FormErrorMessage>{errors.message}</FormErrorMessage> : null}
    </>
  );
}
