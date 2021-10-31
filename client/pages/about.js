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
  background-color: white;
  font-size: 14px;
  width: 95%;
  height: 100%;
  box-shadow: 1px 0px 6px 2px gray;
  border-radius: 8px;
  padding: 10px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
`;
