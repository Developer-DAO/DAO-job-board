import {ItemBox,
ItemTop,
LinkCover,
NameSection,
ProfileImageCover,
ProfileImage} from '../../styles/styles';

import Button from '../../styles/UI-Components/Button';

import styled from 'styled-components';

export default function CompanyItem() {
  return (
    <CompanyBox>
      <LinkCover href='/'>
        <NameSection>
          Company Name
        </NameSection>
      </LinkCover>
      <ProfileImageCover>
        <ProfileImage src='/ETHEREUM.png'/>
      </ProfileImageCover>
      <CompanyJobCount>
        Open Jobs: 10
      </CompanyJobCount>
      <br/>
      <Button styling='normal'>
        View More
      </Button>
    </CompanyBox>
  )
}

const CompanyBox = styled(ItemBox)`
  width: 95%;
`;

const CompanyJobCount = styled.em`
  margin-top: 5px;
  margin-bottom: 5px;
`;
