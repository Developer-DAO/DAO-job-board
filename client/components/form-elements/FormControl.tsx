import { FormControl as ChakraFormControl } from '@chakra-ui/react';
import type { FormControlProps } from '@chakra-ui/react';
import { FieldErrors } from 'react-hook-form';
type Props = {
  children: React.ReactNode;
  errors: FieldErrors | undefined;
} & FormControlProps;

export const FormControl = (props: Props) => {
  const { children, errors, ...rest } = props;
  return (
    <ChakraFormControl isInvalid={errors ? true : false} {...rest}>
      {children}
    </ChakraFormControl>
  );
};
