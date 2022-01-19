import Sidebar from './navigation/Sidebar';
import { useRouter } from 'next/router';
import { Box, Flex, HStack } from '@chakra-ui/react';

const MainComponent: React.FC = ({ children }) => {
  const router = useRouter();
  const showSidebar = router.pathname !== '/';

  return (
    <Flex alignItems="center">
      {showSidebar && <Sidebar />}
      <Box margin="auto" mt={14} ml={showSidebar ? 72 : ''}>
        {children}
      </Box>
    </Flex>
  );
};

export default MainComponent;
