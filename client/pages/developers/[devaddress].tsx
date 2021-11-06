//Router
import { useRouter } from "next/router";

//CSS & UI
import styled from "styled-components";
import {
  Box,
  ItemBox,
  LinkCover,
  NameSection,
  ProfileImageCover,
  ProfileImage,
  GridList
} from "../../styles";
import Button from "../../styles/ui-components/Button";
import Icon from "../../styles/ui-components/Icon";

export default function DeveloperPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <ProfileBox>
      <ProfileLeft>
        <ProfileImageCover>
          <ProfileImage  src="/DevDAO.png">
          </ProfileImage>
        </ProfileImageCover>

        <ProfileLinks>
          Social Icons
        </ProfileLinks>
        <ProfileLinks>
          Website
        </ProfileLinks>
      </ProfileLeft>

      <ProfileCenter>
        <BasicDataSection>
          <ProfileName>
            New Dev
            <ProfileType>{' '}- Developer</ProfileType>
            <ProfileUser>
              @devusername
            </ProfileUser>
          </ProfileName>
        </BasicDataSection>

        <ProfileDescription>
          <p>Here goes a brief description of the user </p>
        </ProfileDescription>

        <ProfileSkills>
          <SkillButton styling='category'>
            Web3
          </SkillButton>
          <SkillButton styling='category'>
            Solidity
          </SkillButton>
          <SkillButton styling='category'>
            Rust
          </SkillButton>
        </ProfileSkills>

      </ProfileCenter>



    </ProfileBox>
  );
}

const ProfileBox = styled(Box)`
  display: flex;
  border-radius: 0;
  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    box-shadow: 0px 0px 0px 0px;
    margin-top: 0;
  }
`;

const TopButtons = styled.div`
@media (max-width: 650px) {
  position: absolute;
  top: 10%;
}
`;

const ProfileLeft = styled(ItemBox)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 5%;
  margin-left: 0%;
  box-sizing: border-box;
  box-shadow: 0 0 0 0;

  @media (max-width: 650px) {
    margin: auto;
    background: none;
    width: 100%;
  }
`;

const ProfileLinks = styled.div`
  height: auto;
  text-align: center;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

 const ProfileCenter = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  position: relative;
  margin: auto;

  @media (max-width: 650px) {
    flex-grow: 1;
    width: 100%;
  }

`;

const BasicDataSection = styled.div`
  display: flex;
`;

const ProfileName = styled(NameSection)`
  font-size: 1rem;
`;

const ProfileType = styled.p`
  display: inline;
  font-weight: 100;
`;

const ProfileUser = styled.p`
  margin: 0px;
  font-weight: 100;
`;

const ProfileSkills = styled(GridList)`

  @media (max-width: 650px) {
  }

`;

const ProfileDescription = styled(ItemBox)`
  text-align: left;
  box-shadow: 0 0 0 0;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  background: none;
`;

const ProfileWebsite = styled.a`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #323424;

  &:hover {
    color: #6e6e6e;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    float: none;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProfileIcon = styled(Icon)`
  font-size: 1.8rem;
  margin-left: 10px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ProfileLocation = styled.div`
  text-align: center;
`;

 const SkillButton = styled(Button)`
  font-size: 0.7rem;
  margin: 1px;
  border: 0;
  border-radius: 8px;
`;
