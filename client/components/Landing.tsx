import Image from "next/image";
import {
  Hero,
  Copy,
  Title,
  List,
  LinkWrap,
  IconWrap
} from "../styles";

import Button from "../styles/ui-components/Button";

export default function Landing() {
  return (
    <Hero>
      <IconWrap style={{width: '10rem', height: '10rem', margin: 'auto'}}>
        <Image width="200" height="200" src="/DevDAO.png" alt="icon" />
      </IconWrap>
      <Copy>
        <Title>Looking for Web3 talent?</Title>
        <LinkWrap href="/developers">
          <Button styling='positive'>Search  Devs</Button>
        </LinkWrap>

        <LinkWrap href="/post-job">
          <Button
          styling='blue'
          >
          Post a Job
          </Button>
        </LinkWrap>

        <LinkWrap href="/post-gig">
          <Button
          styling='red'
          >
          Post a Gig
          </Button>
        </LinkWrap>


        <Title>Looking for Web3 work?</Title>
        <LinkWrap href="/jobs">
          <Button styling='positive'>Search Jobs</Button>
        </LinkWrap>
        <LinkWrap href="/gigs">
          <Button styling='negative'>Search Gigs</Button>
        </LinkWrap>
      </Copy>
    </Hero>
  );
}
