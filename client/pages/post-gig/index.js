import { useState } from "react";
import styled from 'styled-components'
import Button from '../../styles/UI-Components/Button';

import {
  Box,
  BoxTop,
  GridList,
  Title,
  Title2,
  ItemBox,
  Input,
  Selector,
  Textarea
} from '../../styles/styles';

export default function CreateProject() {
  const [formData, setFormData] = useState({
    gigname: "",
    gigwebsite: "",
    gigdescription: "",
    gigcategory: "",
    gigreward: "",
    gigamount: "",
    gigtimeframe: ""
  });

  const {
    gigname,
    gigdescription,
    gigwebsite,
    gigrepo,
    gigcategory,
    gigreward,
    gigamount,
    gigtimeframe
  } = formData;

  const [timeframeActive, setTimeframeActive] = useState(false);

  //Page States will change depending on whether the user clicks on Continue or Back
  const [basicsPage, setBasicsPage] = useState(true);
  const [detailsPage, setDetailsPage] = useState(false);
  const [summaryPage, setSummaryPage] = useState(false);

  //Change Page on Click
  const goToBasics = () => {
    setBasicsPage(true);
    setDetailsPage(false);
    setSummaryPage(false);
  };

  const goToDetails = () => {
    setDetailsPage(true);
    setBasicsPage(false);
    setSummaryPage(false);
  };

  const goToSummary = () => {
    setSummaryPage(true);
    setDetailsPage(false);
  };

  //Go Back
  const goBack = () => {
     history.goBack();
  };

  const addTimeframe = () => {
    setTimeframeActive(true);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const updateGigCategory = (e) => {
    setFormData({ ...formData, gigcategory: e });
  };

  const deleteCategory = (e) => {
    if (formData.gigcategory) {
      setFormData((prevCat) => {
        const updatedCategory = prevCat.gigcategory.filter(
          (category) => category !== e
        );
        return updatedCategory;
      });
    }
  };

  const createGig = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
      <Box>
          {basicsPage ? (
          <>
            <BoxTop>
              <Title>Gig Basics</Title>
              <p><em>Let devs know what you are working on</em></p>
            </BoxTop>

              <InputSection>
                <InputTitle>Write a name for your gig</InputTitle>
                <Input
                  placeholder='e.g., Smart Contract Developer for an NFT Game'
                  name='gigname'
                  value={gigname}
                  onChange={e => onChange(e)}
                />
              <br/>
                <InputTitle>Describe the gig clearly</InputTitle>
                <Textarea
                  minlength='30'
                  placeholder='e.g., I am building an NFT game and need smart contract developers with experience in Solidity for a few weeks...'
                  name='gigdescription'
                  value={gigdescription}
                  onChange={e => onChange(e)}
                />
              <br/>
                <InputTitle>Does the project have a website? {'(optional)'}</InputTitle>
                <Input
                  placeholder='e.g., gigwebsite.com'
                  name='gigwebsite'
                  value={gigwebsite}
                  onChange={e => onChange(e)}
                />

                <InputTitle>Does the project have a repo? {'(optional)'}</InputTitle>
                <Input
                  placeholder='e.g., github.com/gigname/gigrepo'
                  name='gigrepo'
                  value={gigrepo}
                  onChange={e => onChange(e)}
                />
              </InputSection>

            <ButtonSection>
              <Button
                onClick={goToDetails}
                styling='positive'
              >Continue</Button>
              <Button
                onClick={goBack}
                styling='negative'
              >Cancel</Button>
          </ButtonSection>
        </>
          ) : null}

          {detailsPage ? (
            <>
              <BoxTop>
                <h1>Gig Details</h1>
                <em>Define your project timeframe, category, and reward</em>
              </BoxTop>

                <InputSection>
                  <InputTitle>Pick category</InputTitle>
                  <CategorySection>

                  </CategorySection>

                  <InputTitle>Explain reward method {'(optional)'}</InputTitle>
                  <select
                    name='gigreward'
                    value={gigreward}
                    onChange={e => onChange(e)}
                    >
                    <option value="" disabled selected hidden>Token</option>
                    <option value="ETH">ETH</option>
                    <option value="SOL">SOL</option>
                    <option value="BTC">BTC</option>
                    <option value="USDT">USDT</option>
                  </select>

                  <Input
                    placeholder='Amount'
                    name='gigamount'
                    value={gigamount}
                    onChange={e => onChange(e)}
                    type='number'
                  />

                  <div className='cp-input-checkbox'>
                    <Input
                    type='checkbox'
                    onClick={addTimeframe}
                    /> <label>Specific timeframe?</label>
                  </div>
                  {timeframeActive &&
                    <Selector>
                    <option value="" disabled selected hidden>Duration</option>
                    <option value="0-30 Days">0-30 Days</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="6-12 Months">6-12 Months</option>
                    <option value="+12 Months">+12 Months</option>
                  </Selector>
                  }

                </InputSection>
              <ButtonSection>
                <Button styling='positive'
                  onClick={goToSummary}
                >Continue</Button>
                <Button styling='negative'
                  onClick={goToBasics}
                >Back</Button>
            </ButtonSection>
          </>
          ) : null}

          {summaryPage ? (
            <>
            <BoxTop>
              <h1>Job Summary</h1>
              <h2><em>Check that everything is correct {'(click edit if not)'}</em></h2>
            </BoxTop>

                <InputSection>
                  <h2>Gig Basics</h2>
                  <Button
                    onClick={goToBasics}
                    styling='normal'
                  >Edit</Button>
                </InputSection>
                <br/>
                <InputSection>
                  <InputTitle>Gig Name:</InputTitle>{' '}<p>{gigname}</p>
                </InputSection>

                <br/>
                <InputSection>
                  <InputTitle>Gig Description:</InputTitle>{' '}{gigdescription}
                </InputSection>
                <br/>
                  <InputSection>
                    <InputTitle>Gig Website:</InputTitle>{' '}{gigwebsite}
                  </InputSection>
                <br/>

              <InputSection>
                <h2>Gig Details</h2>
                <Button
                  onClick={goToDetails}
                  styling='normal'
                >Edit</Button>
              </InputSection>

                <InputTitle>Category:</InputTitle>
                <CategorySection>

                </CategorySection>
              <br/>
              {formData && gigreward && gigamount ? (
              <div>
                <InputTitle>Gig Reward:</InputTitle>{' '} <p>{gigamount}{' '}{gigreward}</p>
              </div>) : null}
              <br/>
              {formData && gigtimeframe ? (
                <div>
              <InputTitle>Gig Timeframe:</InputTitle>{' '}<p>{gigtimeframe}</p>
              </div>) : null}


              <ButtonSection>
                <Button
                  styling='positive'
                  onClick={createGig}
                >Create Gig</Button>

                <Button
                  onClick={goToDetails}
                  styling='negative'
                >Back</Button>
              </ButtonSection>
            </>
          ) : null}
      </Box>
  );
}

const InputSection = styled(ItemBox)`
  box-shadow: 0 0 0 0;
`;

const InputTitle = styled(Title2)`
  font-size: 1rem;
  text-align: left;
`;

const ButtonSection = styled(ItemBox)`
  box-shadow: 0 0 0 0;
`;

const CategorySection = styled(GridList)`
`;
