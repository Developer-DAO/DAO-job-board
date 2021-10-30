import styled from 'styled-components';
import Button from '../UI-Components/Button';

export default function Landing() {
  return (
    <Hero>
      <Copy>
        <Title>
          Find the best talent from DevDAO
        </Title>
          <LandingLink href='/developers'>
            <Button>
              Search for Devs
            </Button>
          </LandingLink>
        <Title>
          Find the best Web3 jobs
        </Title>
          <LandingLink href='/jobs'>
            <Button>
              Search for Jobs
            </Button>
          </LandingLink>
      </Copy>
    </Hero>
  )
}

const Hero = styled.section`
  text-align: center;
  margin: auto;
`
const Copy = styled.div`
  margin: auto;
  max-width: 60%;

  @media (max-width: 650px) {
    margin: auto;
    top: 5rem;
  }
`;
const Title = styled.h1`
  text-align: center;
`;

const Title2 = styled.h2`
  color: gray;
`;

const List = styled.li`
  margin: 10px;
  margin-left: -25px;
`;

const ButtonSection = styled.div`
  margin-left: 10rem;
  @media (max-width: 650px) {
    margin-left: 25%;
    margin-top: 7rem;
  }
`;

const LandingLink = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const FindDevsButton = styled.button`

`;

const FindJobsButton = styled.button`

`;
