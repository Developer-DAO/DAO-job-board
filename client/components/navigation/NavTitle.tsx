import { Text } from '@chakra-ui/react';

import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function NavTitle() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
  });

  const TitleContent = () => {
    if (router.pathname === '/developers') {
      return 'Developers';
    } else if (router.pathname === '/jobs') {
      return 'Job List';
    } else if (router.pathname === '/post-job') {
      return 'Post a Job';
    } else if (router.pathname === '/create-profile') {
      return 'Create a Profile';
    }
  };

  return <Text>{TitleContent}</Text>;
}
