import {Hero,
Copy,
Title,
List,
ButtonSection,
LinkWrap,
} from '../styles/styles';

import Button from './UI-Components/Button';
import Image from 'next/image';

export default function Landing() {
  return (
    <Hero>
      <Image width='200' height='200' src='/DevDAO.png'/>
      <Copy>
        <Title>
          Looking for DevDAO talent?
        </Title>
          <LinkWrap href='/developers'>
            <Button>
              Search for Devs
            </Button>
          </LinkWrap>
        <Title>
          Looking for work?
        </Title>
          <LinkWrap href='/jobs'>
            <Button>
              Search for Web3 Jobs
            </Button>
          </LinkWrap>
      </Copy>
    </Hero>
  )
}
