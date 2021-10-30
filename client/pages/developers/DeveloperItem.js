//CSS and UI
import styled from 'styled-components';
import Button from '../UI-Components/Button';
import Link from 'next/link';
import devdao from '../../public/DevDAO.png'

export default function DeveloperItem() {
  return (
  <>
    <DeveloperItemBox>
      <LinkCover href='/'>
        <ProfileItemTop>
          <NameSection>
            Developer #1
          </NameSection>
          <ProfileImageCover>
            <ProfileImage src='/DevDAO.png'/>
          </ProfileImageCover>
        </ProfileItemTop>
        <DeveloperItemStatus>
          Available
        </DeveloperItemStatus>
      </LinkCover>

      <DeveloperSkills>
        <SkillButton>Web3</SkillButton>
        <SkillButton>Solidity</SkillButton>
        <SkillButton>Rust</SkillButton>
      </DeveloperSkills>
    </DeveloperItemBox>


    <DeveloperItemBox>
      <LinkCover>
        <ProfileItemTop>
          <NameSection>
            Developer #2
          </NameSection>
          <ProfileImageCover>
            <ProfileImage src='/DevDAO.png'/>
          </ProfileImageCover>
        </ProfileItemTop>
        <DeveloperItemStatus>
          Not Available
        </DeveloperItemStatus>
      </LinkCover>

      <DeveloperSkills>
        <SkillButton>Web3</SkillButton>
        <SkillButton>FullStack</SkillButton>
        <SkillButton>Discord</SkillButton>
      </DeveloperSkills>
    </DeveloperItemBox>
  </>
  )
}

const DeveloperItemBox = styled.div`
  display: grid;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  box-shadow: 0px 0px 4px 2px #E2E8F0;
  background: #FFFFFF;
  border-radius: 18px;
  background-color: white;
  overflow: hidden;
  z-index: 1;
`;

const ProfileItemTop = styled.div`
`;

const LinkCover = styled.a`
  text-decoration: none;
  color: black;
`;

const NameSection = styled.h3`
  margin: 5px;
`;

const ProfileImageCover = styled.div`
  width: 6rem;
  height: 6rem;
  border: 2px solid black;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 180px;
  background-color: black;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 180px;
  object-fit: cover;
`;

const DeveloperSkills = styled.div`
  display: grid;
  box-sizing: border-box;
  border-radius: 18px;
  grid-template-columns: repeat(3, 2fr);
  grid-auto-rows: 3rem;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: left;
  height: fit-content;
  overflow: visible;
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
