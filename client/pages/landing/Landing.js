import styled from 'styled-components';

export default function Landing() {
  return (
    <Hero>
      <Copy>
        <Title>
          Find development talent from DeveloperDAO
        </Title>
      </Copy>
    </Hero>
  )
}

const Hero = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
const Copy = styled.div`
  margin: auto;
  max-width: 60%;

  @media (max-width: 650px) {
    margin: auto;
    top: 5rem;
  }
`
const Title = styled.h1`
`;

const CopyBottom = styled.h2`
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

const FindDevsButton = styled.button`

`;

const FindJobsButton = styled.button`

`;
