import { pageNumber } from '@/pages/create-profile';
import styled from '@emotion/styled';
import ProgressStep from './ProgressStep';

type ProgressGroupProps = {
  pageIndex: pageNumber;
};

export const ProgressGroup: React.FC<ProgressGroupProps> = ({
  pageIndex,
}: ProgressGroupProps) => {
  return (
    <>
      <ProgressStep
        isCurrentPage={pageIndex === 0}
        content="Your details"
        id="firstStep"
      />
      <ConnectLine />
      <ProgressStep
        isCurrentPage={pageIndex === 1}
        content="Basic details"
        id="secondStep"
      />
      <ConnectLine />
      <ProgressStep
        isCurrentPage={pageIndex === 2}
        content="Social links"
        id="thirdStep"
      />
    </>
  );
};

const ConnectLine = styled.div`
  background-color: #4e00ec;
  width: 2px;
  height: 20px;
  margin-left: 30px;
`;
