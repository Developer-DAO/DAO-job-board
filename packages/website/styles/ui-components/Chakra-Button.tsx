import { Button, ButtonGroup } from '@chakra-ui/react';
import type { ButtonProps } from '@chakra-ui/react';

export const ButtonBlack = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      size="sm"
      bgColor="#000000"
      _hover={{ cursor: 'pointer', bg: '#30363D' }}
      textColor="white"
      m="5px"
      fontSize="14px"
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ButtonGray = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      bgColor="#EDF2F7"
      textColor="black"
      _hover={{ cursor: 'pointer', bg: '#E2E9F0' }}
      m="5px"
      ms="0px"
      w="auto"
      fontSize="14px"
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ButtonGray2 = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      size="sm"
      bgColor="#E2E9F0"
      textColor="black"
      _hover={{ cursor: 'pointer', bg: '#EDF2F7' }}
      m="5px"
      ms="0px"
      w="auto"
      fontSize="14px"
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ButtonGreen = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      size="sm"
      bgColor="#38A169"
      textColor="white"
      _hover={{ cursor: 'pointer', bg: '#2F855A' }}
      m="5px"
      ms="0px"
      w="auto"
      fontSize="14px"
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ButtonRed = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      size="sm"
      bgColor="#E2252B"
      textColor="white"
      _hover={{ cursor: 'pointer', bg: '#BB5348' }}
      m="5px"
      ms="0px"
      w="auto"
      fontSize="14px"
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ButtonOrange = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      size="sm"
      bgColor="#DD6B20"
      textColor="white"
      _hover={{ cursor: 'pointer', bg: '#C05621' }}
      m="5px"
      ms="0px !important"
      w="auto"
      fontSize="14px"
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ButtonBlue = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      size="sm"
      bgColor="#3B82F6"
      textColor="white"
      _hover={{ cursor: 'pointer', bg: '#1D4ED8' }}
      m="5px"
      ms="0px"
      w="auto"
      fontSize="14px"
      {...rest}
    >
      {children}
    </Button>
  );
};

export const ButtonBlue2 = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      size="sm"
      bgColor="#3182CE"
      textColor="white"
      _hover={{ cursor: 'pointer', bg: '#2B6CB0' }}
      m="5px"
      ms="0px"
      w="auto"
      fontSize="14px"
      {...rest}
    >
      {children}
    </Button>
  );
};
