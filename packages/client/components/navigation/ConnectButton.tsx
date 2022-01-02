import { Button, Flex, Text } from '@chakra-ui/react';

import Image from 'next/image';
import { useEthers } from '@usedapp/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

import { useAuth } from '../../hooks/useAuth';

function ConnectButton() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { setUser } = useAuth();

  const { activateBrowserWallet, account, deactivate } = useEthers();

  const isConnected = () => !!account;
  const handleOnConnectToWallet = () => {
    activateBrowserWallet();
  };
  const LogButton = isConnected() ? (
    <Button bg="success" />
  ) : (
    <Button bg="neutral" />
  );

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

  return (
    <Button onClick={handleOnConnectToWallet} minWidth="max-content">
      <Flex gridGap={2}>
        <Image width={15} height={15} src="/metamask.png" alt="icon" />
        <Text fontSize="sm">
          {t('components.navigation.connect_button.connect')}
        </Text>
      </Flex>
    </Button>
  );
}

export default ConnectButton;
