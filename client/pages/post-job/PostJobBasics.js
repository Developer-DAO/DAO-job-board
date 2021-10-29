import React from 'react'

// UI & CSS
import Button from '../UI-Components/Button';

const PostJobBasics = ({
goToDetails,
goBack,
formData,
onChange,
history}) => {

  const {
    jobname,
    jobdescription,
    jobwebsite
  } = formData;

  const nextPage = async () => {
    goToDetails();
  }

  return (
    <div>
    <div className='cp-top'>
      <h1>Job Basics</h1>
      <h2><em>What kind of dev help are you looking for?</em></h2>
    </div>

      <div className='cp-input-section'>
        <h2 className='cp-input-titles'>Pick the best name for your project</h2>
        <input
          placeholder='e.g. Looking for Smart Contract Developer for an NFT Project'
          name='projectname'
          value={projectname}
          onChange={e => onChange(e)}
        />
      <br/>
        <small>Max 20 words</small>
        <h2 className='cp-input-titles'>Describe your project clearly</h2>
        <textarea
          minlength='30'
          placeholder='e.g. I am an NFT artist looking for a Solidity developer with experience in NFTs (minting, airdrops, etc.)...'
          name='projectdescription'
          value={projectdescription}
          onChange={e => onChange(e)}
        />
      <br/>
        <small>Max 300 words</small>
        <h2 className='cp-input-titles'>Have a website or repo? {'(optional)'}</h2>
        <input
          placeholder='e.g. www.projectsite.com'
          name='projectwebsite'
          value={projectwebsite}
          onChange={e => onChange(e)}
        />
      </div>

    <div className='cp-button-section'>
      <Button
        className="button bad"
        onClick={goBack}
      >Cancel</Button>
      <Button
        onClick={nextPage}
        className='button primary'
      >Continue</Button>
  </div>
    </div>
  )
}

export default BasicsSection
