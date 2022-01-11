import {
  Box,
  Circle,
  HStack,
  Text,
} from '@chakra-ui/react';

import JobCard from './JobCard';
import { Job } from '@/types/job';

export default function JobPreview({ formData } : any ) {

  return (
    <Box>
        <HStack>
            <Circle size="24px" bg="primary.100">
                <Circle size="10px" bg="primary.500"></Circle>
            </Circle>
            <Text
                color="neutral.400"
                letterSpacing="2px"
                font="Inter"
                justify="left"
                textTransform="uppercase"
                fontSize="xs"
                p="3"
                pl="5">
                    Preview Job Listing
            </Text>
            </HStack>
            <JobCard {...({} as Job)} company_id="" />
        
    </Box>
  );
}
