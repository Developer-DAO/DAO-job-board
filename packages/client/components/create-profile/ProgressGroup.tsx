import { pageNumber } from '@/pages/create-profile';
import ConnectLine from './ConnectLine';
import ProgressStep from './ProgressStep';

type ProgressGroupProps = {
  pageIndex: pageNumber;
};

export const ProgressGroup: React.FC<ProgressGroupProps> = ({
  pageIndex,
}: ProgressGroupProps) => {
  return (
    <>
      <ProgressStep isCurrentPage={pageIndex === 0} content="Your details" />
      <ConnectLine />
      <ProgressStep isCurrentPage={pageIndex === 1} content="Basic details" />
      <ConnectLine />
      <ProgressStep isCurrentPage={pageIndex === 2} content="Social links" />
    </>
  );
};
