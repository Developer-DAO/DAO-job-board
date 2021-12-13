import { Link, Text, Box, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface LinkProps {
  path: string;
  icon: IconProp;
  title: string;
}
[];

const NavLink: React.FC<LinkProps> = (props): JSX.Element => {
  return (
    <NextLink href={props.path} passHref>
      <Link
        color="gray.400"
        p="3"
        pl="5"
        mb="2"
        w="100%"
        borderRadius="0px"
        _hover={{
          textDecoration: 'none',
          color: 'black',
          borderLeft: '5px solid #4E00EC',
        }}
        _focus={{ textDecoration: 'none', border: 'none' }}
        transition="0.2s"
      >
        <Text size="md">
          <HStack spacing="10px">
            <Box>
              <FontAwesomeIcon icon={props.icon} />
            </Box>
            <Box>{props.title}</Box>
          </HStack>
        </Text>
      </Link>
    </NextLink>
  );
};

export default NavLink;
