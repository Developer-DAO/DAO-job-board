import {
  Hero,
  Copy,
  Title,
  List,
  ButtonSection,
  LinkWrap,
  IconWrap
} from "../styles/styles";

import Button from "../styles/UI-Components/Button";
import Image from "next/image";

export default function Landing() {
  return (
    <Hero>
      <IconWrap style={{width: '10rem', height: '10rem'}}>
        <Image width="200" height="200" src="/DevDAO.png" />
      </IconWrap>
      <Copy>
        <Title>Looking for Web3 talent?</Title>
        <LinkWrap href="/developers">
          <Button styling='positive'>Search  Devs</Button>
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
