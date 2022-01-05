import { Button, Flex, Text } from '@chakra-ui/react';

import Image from 'next/image';
import { useEthers } from '@usedapp/core';
import { useTranslation } from 'next-i18next';

function ConnectButton() {
  const { t } = useTranslation('common');

  const { activateBrowserWallet } = useEthers();

  const handleOnConnectToWallet = () => {
    activateBrowserWallet();
  };

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
