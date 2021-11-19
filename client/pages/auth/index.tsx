import { Container, Stack, Heading, Flex, Center } from '@chakra-ui/react';
import {
  ButtonGreen,
  ButtonGray,
} from '../../styles/ui-components/Chakra-Button';
import Image from 'next/image';
import { useEthers } from '@usedapp/core';
import { useEffect } from 'react';

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
  const { activateBrowserWallet, account } = useEthers();

  const isConnected = () => !!account;
  const handleOnConnectToWallet = () => {
    activateBrowserWallet();
  };
  const Button = isConnected() ? ButtonGreen : ButtonGray;

  useEffect(() => {
    if (account) {
      fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ walletAddress: account }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((result) => {
          console.log(result);
          // Now we can set the user in a global auth context and redirect them
          // to /create-profile if they don't have one yet
        });
    }
  }, [account]);

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
    <Container>
      <Stack>
        <Heading>LOG-IN</Heading>

        <Center>
          <ConnectButton />
        </Center>
      </Stack>
    </Container>
  );
}
