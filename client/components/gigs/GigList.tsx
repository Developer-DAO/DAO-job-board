import styled from "styled-components";
import { Box } from "../../styles";

export type GigListProps = {
  children?: React.ReactNode;
};

export default function GigList({ children }: GigListProps) {
  return <GigBox>{children}</GigBox>;
}

const GigBox = styled(Box)`
  margin-left: 30%;
  width: 68%;
  background: 0;
  box-shadow: 0 0 0 0;

  @media (max-width: 650px) {
    width: 55%;
  }
`;
