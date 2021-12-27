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
      bgColor="success.600"
      _hover={{ cursor: 'pointer', bg: 'success.800' }}
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
