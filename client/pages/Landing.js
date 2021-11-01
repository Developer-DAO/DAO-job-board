import {
  Hero,
  Copy,
  Title,
  List,
  ButtonSection,
  LinkWrap,
  DevDAOIcon
} from "../styles/styles";

import Button from "../styles/UI-Components/Button";
import Image from "next/image";

export default function Landing() {
  return (
    <Hero>
      <DevDAOIcon style={{width: '10rem', height: '10rem'}}>
        <Image width="200" height="200" src="/DevDAO.png" />
      </DevDAOIcon>
      <Copy>
        <Title>Looking for DevDAO talent?</Title>
        <LinkWrap href="/developers">
          <Button styling='normal'>Search for Devs</Button>
        </LinkWrap>
        <Title>Looking for work?</Title>
        <LinkWrap href="/jobs">
          <Button styling='normal'>Search for Web3 Jobs</Button>
        </LinkWrap>
      </Copy>
    </Hero>
  );
}
