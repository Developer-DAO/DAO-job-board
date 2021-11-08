import Image from "next/image";
import {
  Hero,
  Copy,
  Title,
  List,
  LinkWrap,
  IconWrap
} from "../styles";

import Button from '../styles/ui-components/Button.tsx'
import { ButtonRed, ButtonGreen, ButtonBlue } from "../styles/ui-components/Chakra-Button.tsx"

export default function Landing() {
  return (
    <Hero>
      <IconWrap style={{width: '10rem', height: '10rem', margin: 'auto'}}>
        <Image width="200" height="200" src="/DevDAO.png" alt="icon" />

      </IconWrap>
      <Copy>
        <Title>Looking for Web3 talent?</Title>
        <LinkWrap href="/developers">
          <ButtonGreen>
          Search  Devs
          </ButtonGreen>
        </LinkWrap>

        <LinkWrap href="/post-job">
          <ButtonBlue
          >
          Post a Job
          </ButtonBlue>
        </LinkWrap>

        <LinkWrap href="/post-gig">
          <ButtonRed
          >
          Post a Gig
          </ButtonRed>
        </LinkWrap>


        <Title>Looking for Web3 work?</Title>
        <LinkWrap href="/jobs">
          <ButtonGreen>
          Search Gigs
          </ButtonGreen>
        </LinkWrap>

        <LinkWrap href="/gigs">
          <ButtonRed>
          Search Gigs
          </ButtonRed>
        </LinkWrap>
      </Copy>
    </Hero>
  );
}
