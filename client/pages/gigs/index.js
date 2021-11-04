import GigItem from "./GigItem";
import GigList from "./GigList";
import GigFilter from "./GigFilter";

import { Title, Description } from "../../styles/styles";

export default function Index() {
  return (
    <>
      <GigFilter/>
      <Title>Gigs</Title>
      <Description>
        A place to find contract work and freelance gigs.
      </Description>
      <GigList>
        <GigItem />
      </GigList>
    </>
  );
}
