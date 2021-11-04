import GigFilter from "../../components/gigs/GigFilter";
import GigItem from "../../components/gigs/GigItem";
import GigList from "../../components/gigs/GigList";
import { Title, Description } from "../../styles";

export default function Index() {
  return (
    <>
      <GigFilter />
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
