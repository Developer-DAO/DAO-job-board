import { Container, Box, Stack, Heading, Flex, Center } from '@chakra-ui/react';
import {
  ButtonGreen,
  ButtonGray,
} from '../../styles/ui-components/Chakra-Button';
import Image from 'next/image';
import { useEthers } from '@usedapp/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  return <SignUp />;
}

// TODO: move to utils library
function formatAccount(account: String, length = 10) {
  const halve = Math.floor(length - 2) / 2;
  return `${account.slice(0, halve + 2)}...${account.slice(-halve)}`;
}

// TODO: Move to components
function ConnectButton() {
  const router = useRouter();

  const { activateBrowserWallet, account, deactivate } = useEthers();

  const isConnected = () => !!account;
  const handleOnConnectToWallet = () => {
    activateBrowserWallet();
  };
  const Button = isConnected() ? ButtonGreen : ButtonGray;

  useEffect(() => {
    if (account) {
      const performAuth = async () => {
        const response = await fetch('/api/auth', {
          method: 'POST',
          body: JSON.stringify({ walletAddress: account }),
        });

        if (response.status !== 200) {
          deactivate();
        }

        const result = await response.json();
        if (result.isNew) {
          router.push('/create-profile');
        } else if (result.id) {
          router.push('/');
        }
      };
    }
  }, [account, deactivate, router]);

  return (
    <Button onClick={handleOnConnectToWallet}>
      <Flex gridGap={2}>
        <Image width={15} height={15} src="/metamask.png" alt="icon" />
        {account ? `Connected: ${formatAccount(account)}` : `Login with Wallet`}
      </Flex>
    </Button>
  );
}

function SignUp() {
  return (
    <Box>
      <Stack>
        <Heading m="auto">LOG-IN</Heading>

        <Center>
          <ConnectButton />
        </Center>
      </Stack>
    </Box>
  );
}
