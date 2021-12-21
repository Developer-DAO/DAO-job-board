import { Container } from '@chakra-ui/react';

import {
  ButtonSuccess,
  ButtonPrimary,
  ButtonInfo,
  ButtonDanger,
  ButtonNeutral,
  ButtonWarning,
} from '@/styles/ui-components/Chakra-Button';

export default function ButtonsNew() {
  return (
    <Container p={10}>
      <ButtonSuccess>Button Success</ButtonSuccess>

      <ButtonPrimary>Button Primary</ButtonPrimary>

      <ButtonInfo>Button Info</ButtonInfo>

      <ButtonDanger>Button Danger</ButtonDanger>

      <ButtonNeutral> Button Neutral</ButtonNeutral>

      <ButtonWarning>Button Warning</ButtonWarning>
    </Container>
  );
}
