import { Text } from '@chakra-ui/react';

import { useEffect } from 'react';

import { useRouter } from 'next/router';

export default function NavTitle() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
  });

  const TitleContent = () => {
    const dynamicTitles: any = {
      '/developers': 'Developers For Hire',
      '/jobs': 'Job List',
      '/post-job': 'Post a Job',
      '/create-profile': 'Create a Profile',
    };
    return dynamicTitles[router.pathname];
  };

  return <Text>{TitleContent()}</Text>;
}
