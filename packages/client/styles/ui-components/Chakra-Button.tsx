import { Button, ButtonProps } from '@chakra-ui/react';

export const ButtonPrimary = ({ children, as, onClick }: ButtonProps) => {
  return (
    <Button
      size="sm"
      colorScheme="primary"
      _hover={{ cursor: 'pointer', bg: 'primary.700' }}
      textColor="white"
      m="5px"
      fontSize="14px"
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonSuccess = ({ children, as, onClick }: ButtonProps) => {
  return (
    <Button
      size="sm"
      colorScheme="success"
      _hover={{ cursor: 'pointer', bg: 'success.700' }}
      textColor="white"
      m="5px"
      fontSize="14px"
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonInfo = ({ children, as, onClick }: ButtonProps) => {
  return (
    <Button
      size="sm"
      colorScheme="info"
      _hover={{ cursor: 'pointer', bg: 'info.700' }}
      textColor="white"
      m="5px"
      fontSize="14px"
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonWarning = ({ children, as, onClick }: ButtonProps) => {
  return (
    <Button
      size="sm"
      colorScheme="warning"
      _hover={{ cursor: 'pointer', bg: 'warning.700' }}
      textColor="white"
      m="5px"
      fontSize="14px"
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonDanger = ({ children, as, onClick }: ButtonProps) => {
  return (
    <Button
      size="sm"
      colorScheme="danger"
      _hover={{ cursor: 'pointer', bg: 'danger.700' }}
      textColor="white"
      m="5px"
      fontSize="14px"
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonNeutral = ({ children, as, onClick }: ButtonProps) => {
  return (
    <Button
      size="sm"
      colorScheme="neutral"
      _hover={{ cursor: 'pointer', bg: 'neutral.700' }}
      textColor="white"
      m="5px"
      fontSize="14px"
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

/**
 * Black Button UI component for user interaction
 */
export const ButtonBlack = ({ children, as, onClick }: ChakraButtonProps) => {
  return (
    <Button
      size="sm"
      bgColor="#000000"
      _hover={{ cursor: 'pointer', bg: '#30363D' }}
      textColor="white"
      m="5px"
      fontSize="14px"
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonGray = ({ children, as, onClick }: ChakraButtonProps) => {
  return (
    <Button
      bgColor="#EDF2F7"
      textColor="black"
      _hover={{ cursor: 'pointer', bg: '#E2E9F0' }}
      m="5px"
      ms="0px"
      w="auto"
      fontSize="14px"
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonGray2 = ({ children, as, onClick }: ChakraButtonProps) => {
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
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonGreen = ({ children, as, onClick }: ChakraButtonProps) => {
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
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonRed = ({ children, as, onClick }: ChakraButtonProps) => {
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
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonOrange = ({ children, as, onClick }: ChakraButtonProps) => {
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
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonBlue = ({ children, as, onClick }: ChakraButtonProps) => {
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
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};

export const ButtonBlue2 = ({ children, as, onClick }: ChakraButtonProps) => {
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
      onClick={onClick}
      as={as}
    >
      {children}
    </Button>
  );
};
