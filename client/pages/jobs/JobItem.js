import styled from 'styled-components';
import Button from '../../styles/UI-Components/Button';
import {
  Box,
  Break,
  Title2,
  Description
} from '../../styles/styles';

export default function JobItem() {
  return (
    <>
      <JobItemBox>
        <JobItemLink>
          <JobItemName>
            Project 1
          </JobItemName>
        </JobItemLink>
        <JobItemDescription>
            Details of the project
        </JobItemDescription>
        <JobItemSkills>
          <SkillButton styling='skill'>
            Solidity
          </SkillButton>
          <SkillButton styling='skill'>
            Hardhat
          </SkillButton>
          <SkillButton styling='skill'>
            Rust
          </SkillButton>
          <SkillButton styling='skill'>
            Javascript
          </SkillButton>
        </JobItemSkills>
      </JobItemBox>
      <JobItemSeparator/>
    </>
  )
}

const JobItemBox = styled(Box)`
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 1px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  width: 80%;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;

  @media (max-width: 650px){
    height: fit-content;
    width: 100%;
    box-sizing: content-box;
    box-shadow: 0 0 0 0;
    margin-left: -2%;
  }
`;

const JobItemSeparator = styled(Break)`
display: none;

@media (max-width: 650px) {
  display: block;
  opacity: 0.25;
  width: 106%;
  margin-left: -0.5%;
}
`;

const JobItemLink = styled.a`
  text-decoration: none;
  color: black;
`;

const JobItemName = styled(Title2)`
width: 80%;
font-size: 1.25rem;
margin-left: 2.5%;
`;

const JobItemDescription = styled(Description)`
  width: 90%;
  height: 40px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 2.5%;
`;

const JobItemSkills = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-auto-rows: 2rem;
grid-gap: 1rem;
width: 90%;
margin-left: 2%;
margin-bottom: 2.5%;
font-size: 14px;

@media (max-width: 650px) {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-auto-rows: 2rem;
  grid-gap: 2rem;
  width: 90%;
  margin-left: 2.5%;
  font-size: 10px;
}
`;

const SkillButton = styled(Button)`
  font-size: 0.7rem;
  margin: 1px;
  border: 0;
  border-radius: 8px;
  width: max-content;
`;
