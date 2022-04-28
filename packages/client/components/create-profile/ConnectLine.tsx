import styled from '@emotion/styled';

export const ConnectLine = () => {
  return (
    <>
      <ConnectLineTop />
      <ConnectLineBottom />
    </>
  );
};

const ConnectLineTop = styled.div`
  position: relative;
  top: -16px;
  background-color: #4e00ec;
  width: 2px;
  height: 20px;
  margin-left: 31px;
  margin-bottom: -33px;
`;

const ConnectLineBottom = styled.div`
  position: relative;
  bottom: -16px;
  background-color: #4e00ec;
  width: 2px;
  height: 20px;
  margin-left: 31px;
`;

export default ConnectLine;
