//CSS and UI
import styled from 'styled-components';

import {ItemBox,
ItemTop,
LinkCover,
NameSection,
ProfileImageCover,
ProfileImage} from '../../styles/styles';

import Button from '../../styles/UI-Components/Button';
import Link from 'next/link';
import devdao from '../../public/DevDAO.png'

export default function DeveloperItem() {
  return (
  <>
    <ItemBox>
      <LinkCover href='/'>
        <ItemTop>
          <NameSection>
            Developer #1
          </NameSection>
          <ProfileImageCover>
            <ProfileImage src='/DevDAO.png'/>
          </ProfileImageCover>
        </ItemTop>
        <DeveloperItemStatus>
          Available
        </DeveloperItemStatus>
      </LinkCover>

      <DeveloperSkills>
        <SkillButton styling='skill'>Web3</SkillButton>
        <SkillButton styling='skill'>Solidity</SkillButton>
        <SkillButton styling='skill'>Rust</SkillButton>
      </DeveloperSkills>
    </ItemBox>


    <ItemBox>
      <LinkCover>
        <ItemTop>
          <NameSection>
            Developer #2
          </NameSection>
          <ProfileImageCover>
            <ProfileImage src='/DevDAO.png'/>
          </ProfileImageCover>
        </ItemTop>
        <DeveloperItemStatus>
          Not Available
        </DeveloperItemStatus>
      </LinkCover>

      <DeveloperSkills>
        <SkillButton styling='skill'>Web3</SkillButton>
        <SkillButton styling='skill'>FullStack</SkillButton>
        <SkillButton styling='skill'>Discord</SkillButton>
      </DeveloperSkills>
    </ItemBox>

    <ItemBox>
      <LinkCover>
        <ItemTop>
          <NameSection>
            Developer #2
          </NameSection>
          <ProfileImageCover>
            <ProfileImage src='/DevDAO.png'/>
          </ProfileImageCover>
        </ItemTop>
        <DeveloperItemStatus>
          Not Available
        </DeveloperItemStatus>
      </LinkCover>

      <DeveloperSkills>
        <SkillButton styling='skill'>Web3</SkillButton>
        <SkillButton styling='skill'>FullStack</SkillButton>
        <SkillButton styling='skill'>Discord</SkillButton>
      </DeveloperSkills>
    </ItemBox>
  </>
  )
}

const DeveloperSkills = styled.div`
  display: grid;
  box-sizing: border-box;
  border-radius: 18px;
  grid-template-columns: repeat(3, 2fr);
  grid-auto-rows: 2.5rem;
  margin-top: 5px;
  margin-bottom: 10px;
  height: fit-content;
  overflow: visible;

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 2fr);
  }
`;

const SkillButton = styled(Button)`
  font-size: 0.7rem;
  margin: 1px;
  border: 0;
  border-radius: 8px;
`;

const DeveloperItemStatus = styled.em`
  box-sizing: border-box;
  border-radius: 12px;
  width: min-content;
  padding: 1px;
  margin-left: auto;
  margin-right: auto;
`;
