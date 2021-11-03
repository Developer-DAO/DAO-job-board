import styled from 'styled-components';
import Button from '../../styles/UI-Components/Button';
import Icon from '../../styles/UI-Components/Icon';

import {
  Box,
  Break,
  IconWrap,
  Title,
  Title2,
  Description
} from '../../styles/styles';

export default function JobItem() {
  return (
      <JobItemBox>
        <JobItemLink href='/'>
          <JobItemName>
            Project 1
          </JobItemName>
        </JobItemLink>

        <JobItemLink href='/'>
          <JobItemCompanyIcon>
              <Icon
              width='50'
              height='50'
              src='/ETHEREUM.png'/>
          </JobItemCompanyIcon>
            <JobItemCompanyName>
              Company Name
            </JobItemCompanyName>
        </JobItemLink>

        <JobItemDetails>
          <JobItemDetailsElement>
            Remote
          </JobItemDetailsElement>
          <JobItemDetailsElement>
            Full-Time
          </JobItemDetailsElement>
        </JobItemDetails>
        <JobItemDescription>
            Details of the job
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
        <JobItemSeparator/>
      </JobItemBox>
  )
}

const JobItemBox = styled(Box)`
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 1px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  width: 100%;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 650px){
    height: max-content;
    width: 100%;
    box-sizing: content-box;
    box-shadow: 0 0 0 0;
    padding: 0;
    background: white;
  }
`;

const JobItemSeparator = styled(Break)`
display: none;

@media (max-width: 650px) {
  display: block;
  opacity: 0.25;
  width: 100%;
  margin-left: -0.5%;
}
`;

const JobItemCompanyIcon = styled(IconWrap)`
  margin-left: 1%;
  margin-right: 0%;
`;

const JobItemLink = styled.a`
  display: flex;
  text-decoration: none;
  color: black;
`;

const JobItemName = styled(Title)`
  width: 80%;
  text-align: left;
  font-size: 1.25rem;
  margin-left: 2.5%;
`;

const JobItemCompanyName = styled(Title2)`
  width: 80%;
  font-size: 1rem;
  margin-left: 0%;
`;

const JobItemDetailsElement = styled.p`
  font-size: 1rem;
`;

const JobItemDetails = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: 2rem;
grid-gap: 1rem;
width: 90%;
margin-left: 2.5%;
margin-bottom: 2.5%;
font-size: 14px;

@media (max-width: 650px) {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-auto-rows: 2rem;
  grid-gap: 2rem;
  width: 90%;
  margin-left: 2.5%;
  font-size: 10px;
}
`;

const JobItemDescription = styled(Description)`
  width: 90%;
  height: 40px;
  font-size: 0.75rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 2.5%;
  margin-bottom: 0;
`;

const JobItemSkills = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-auto-rows: 2rem;
grid-gap: 1rem;
width: 90%;
margin-left: 2%;
margin-bottom: 2.5%;

@media (max-width: 650px) {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 2rem;
  width: 90%;
  margin-left: 2.5%;
}
`;

const SkillButton = styled(Button)`
  font-size: 0.7rem;
  margin: 1px;
  border: 0;
  border-radius: 8px;
  width: max-content;
`;
