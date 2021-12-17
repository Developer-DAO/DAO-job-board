import { Box, Stack, Heading, Flex, Center } from '@chakra-ui/react';
import { ButtonGreen, ButtonGray } from '@/styles/ui-components/Chakra-Button';
import Image from 'next/image';
import { useEthers } from '@usedapp/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { useAuth } from '@/hooks/useAuth';

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
  const { t } = useTranslation('common');
  const router = useRouter();
  const { setUser } = useAuth();

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
          setUser(result);
          router.push('/create-profile');
        } else if (result.id) {
          setUser(result);
          router.push('/');
        }
      };

      performAuth();
    }
  }, [account, deactivate, setUser, router]);
  const connectButtonText = account ? 'connected' : 'login';
  return (
    <Button onClick={handleOnConnectToWallet}>
      <Flex gridGap={2}>
        <Image width={15} height={15} src="/metamask.png" alt="icon" />
        {t(`pages.auth.index.${connectButtonText}`, {
          account: formatAccount(account || ''),
        })}
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

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
