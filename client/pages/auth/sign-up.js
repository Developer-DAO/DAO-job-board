import {Box, Title, Icon} from '../../styles/styles';
import Image from 'next/image'

import Button from '../../styles/UI-Components/Button';

export default function SignUp() {
  return (
    <Box>
      <Title>
        TO BE FINISHED
      </Title>

        <div style={{textAlign: 'center'}}>
          <Button styling='positive'>
            <span style={{position: 'relative', top: '2px'}}>
              <Image
               width={15}
               height={15}
               src='/metamask.png'/>
            </span>

             {' '}
            Login with Wallet
          </Button>
        </div>
    </Box>
  )
}
