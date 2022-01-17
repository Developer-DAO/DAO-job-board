import { Box, Grid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { supabase } from '@/common/supabase';
import { User } from '@/types/user';
import DeveloperItem from './DeveloperItem';

export default function DeveloperList() {
  const [devs, setDevs] = useState<User[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from('users').select();
    setDevs(data || []);
  };

  return (
    <Box textAlign="center" m="auto" h="100%">
      <Grid
        templateColumns={{
          '2xl': 'repeat(4, 2fr)',
          xl: 'repeat(3, 2fr)',
          lg: 'repeat(2, 2fr)',
          md: 'repeat(2, 2fr)',
          sm: 'repeat(1, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        gap={8}
        mx="auto"
        p={10}
      >
        {devs && devs.map((dev) => <DeveloperItem key={dev.id} {...dev} />)}
      </Grid>
    </Box>
  );
}
