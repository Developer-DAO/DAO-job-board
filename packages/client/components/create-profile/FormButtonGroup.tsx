import { formData, pageNumber } from '@/pages/create-profile';
import {
  Box,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

type FormButtonGroupProps = {
  goBackPage: () => void;
  goNextPage: () => void;
  onSubmit: (e: React.FormEvent) => void;
  pageIndex: pageNumber;
  formData: formData;
};

export const FormButtonGroup = ({
  goBackPage,
  goNextPage,
  onSubmit,
  pageIndex,
  formData,
}: FormButtonGroupProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Flex minWidth="max-content" alignItems="center">
        {pageIndex !== 0 ? (
          <ButtonLeft onClick={goBackPage}>Cancel</ButtonLeft>
        ) : null}
        <Spacer />
        {pageIndex !== 2 ? (
          <ButtonRight onClick={goNextPage}>Save & Next</ButtonRight>
        ) : (
          <ButtonRight onClick={onSubmit}>Submit</ButtonRight>
        )}
      </Flex>
    </>
  );
};

const ButtonLeft = styled(Button)`
  width: 200px;
  background-color: white;
  border: 1px solid #0d0b21;
`;

const ButtonRight = styled(Button)`
  width: 200px;
  color: white;
  background-color: black;
  &:hover {
    background-color: black;
    border: 1px solid #0d0b21;
    box-shadow: 1px 10px 25px -10px rgba(0, 0, 0, 0.4);
  }
`;
