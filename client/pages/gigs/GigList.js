import styled from 'styled-components';
import {Box} from '../../styles/styles';
import GigItem from './GigItem';

export default function GigList() {
  return (
      <GigBox>
        <GigItem/>
      </GigBox>
  )
}

const GigBox = styled(Box)`
  margin-left: 30%;
  width: 68%;
  background:0;
  box-shadow: 0 0 0 0;

  @media (max-width: 650px) {
    width: 55%;
  }
`;
