import styled from 'styled-components';

function About() {
  return (
    <AboutBox>
      <Title>This is DevDAOs job list</Title>
    </AboutBox>
  )
}

export default About;

const AboutBox = styled.div`
box-sizing: border-box;
border: 0px solid #000000;
box-shadow: 0px 0px 4px 2px #E2E8F0;
background: #FFFFFF;
border-radius: 18px;
width: 90%;
height: fit-content;
padding: 2%;
margin: auto;
margin-top: 5%;
`;

const Title = styled.h1`
  text-align: center;
`;
