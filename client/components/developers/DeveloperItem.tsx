//CSS and UI
import styled from "styled-components";

import {
  ItemBox,
  LinkCover,
  GridList,
  NameSection,
  ProfileImageCover,
  ProfileImage,
} from "../../styles";

import Button from "../../styles/ui-components/Button";
import Link from "next/link";
// import devdao from "../../../public/DevDAO.png";

export default function DeveloperItem() {
  return (
    <>
      <ItemBox>
        <LinkCover href="/developers/developer1">
          <ItemTop>
            <NameSection>Developer #1</NameSection>
            <ProfileImageCover>
              <ProfileImage src="/DevDAO.png" />
            </ProfileImageCover>
          </ItemTop>
          <DeveloperItemStatus>Available</DeveloperItemStatus>
        </LinkCover>

        <DeveloperSkills>
          <SkillButton styling="category">Web3</SkillButton>
          <SkillButton styling="category">Solidity</SkillButton>
          <SkillButton styling="category">Rust</SkillButton>

        </DeveloperSkills>
      </ItemBox>

      <ItemBox>
        <LinkCover>
          <ItemTop>
            <NameSection>Developer #2</NameSection>
            <ProfileImageCover>
              <ProfileImage src="/DevDAO.png" />
            </ProfileImageCover>
          </ItemTop>
          <DeveloperItemStatus>Not Available</DeveloperItemStatus>
        </LinkCover>

        <DeveloperSkills>
          <SkillButton styling="category">Web3</SkillButton>
          <SkillButton styling="category">FullStack</SkillButton>
          <SkillButton styling="category">Discord</SkillButton>

        </DeveloperSkills>
      </ItemBox>

      <ItemBox>
        <LinkCover>
          <ItemTop>
            <NameSection>Developer #2</NameSection>
            <ProfileImageCover>
              <ProfileImage src="/DevDAO.png" />
            </ProfileImageCover>
          </ItemTop>
          <DeveloperItemStatus>Not Available</DeveloperItemStatus>
        </LinkCover>

        <DeveloperSkills>
          <SkillButton styling="category">Web3</SkillButton>
          <SkillButton styling="category">FullStack</SkillButton>
          <SkillButton styling="category">Discord</SkillButton>

        </DeveloperSkills>
      </ItemBox>
    </>
  );
}

const DeveloperSkills = styled(GridList)`
  grid-template-columns: repeat(3, 2fr);
  grid-auto-rows: 2.5rem;
  grid-gap: 0px;
  margin-top: 5px;

  height: fit-content;
  overflow: visible;

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 2fr);
  }
`;

const ItemTop = styled.div``;

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
