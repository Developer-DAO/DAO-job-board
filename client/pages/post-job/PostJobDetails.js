import styled from 'styled-components';
import Button from '../UI-Components/Button';

//Components and Utils
import SelectSkills from './SelectSkills'

function PostJobDetails({
  goToBasics,
  goToSummary,
  formData,
  onChange,
  setAlert,
  updateProjectSkills,
  setFormData,
  deleteSkills,
  addLocation,
  locationActive,
  addDuration,
  durationActive}) {

  const [changeSkills, setChangeSkills] = useState(false);

  const {
    projectskills,
    projectreward,
    projectamount,
    projectlocation,
    projectduration
  } = formData;

  const addProjectSkills = async (newSkills) => {
    if (newSkills !== projectskills) {

    const chosenSkills = newSkills.map(skill => {
        return skill.skill
      })
    updateProjectSkills(chosenSkills)
    }
  }

  const nextPage = async () => {
    goToSummary();
  }

  const selectSkills = () => {
    setChangeSkills(true);
  }

  const unSelectSkills = () => {
    setChangeSkills(false);
  }

  return (
    <>
      <Top>
        <h1>Project Details</h1>
        <h2><em>Who you want and what you're offering</em></h2>
      </Top>

      <div className='cp-description'>
        <p>Follow these guidelines:</p>
        <ul>
          <li>Choose the ideal <em>skills</em> of the person you're looking for.</li>
          <br/>
          <li>Make it clear what you're collaborators get from working on this project.</li>
          <br/>
          <li>Decide whether it's a remote or location-specific project</li>
        </ul>
        <p>Catch your perfect collaborator's attention with clear details!</p>
      </div>

        <div className='cp-input-section'>
          <h2 className='cp-input-titles'>Pick the skills you need for the project</h2>

          <Button
            onClick={selectSkills}>
            Select Skills
          </Button>
          <div className='cp-skills-section'>
              {formData.projectskills.length > 0 && formData.projectskills.map((skill, index) => (
              <>
              <div className='cp-skill-buttons' key={index}>
                  <Button
                    onClick={e => deleteSkills(e)}
                    >{skill}</Button>
              </div>
              </>
              ))}
          </div>

          <h2 className='cp-input-titles'>Explain reward method {'(optional)'}</h2>
          <select
            name='projectreward'
            value={projectreward}
            onChange={e => onChange(e)}
            >
            <option value="" disabled selected hidden>Token</option>
            <option value="ETH">ETH</option>
            <option value="SOL">SOL</option>
            <option value="BTC">BTC</option>
            <option value="USDT">USDT</option>
          </select>

          <input
            className='input-amount'
            placeholder='Amount'
            name='projectamount'
            value={projectamount}
            onChange={e => onChange(e)}
            type='number'
          />
          <h2 className='cp-input-titles'>Location {'(optional)'}</h2>
          <div className='cp-input-checkbox'>
            <input
            type='checkbox'
            onClick={addLocation}
            /> <label>Location specific?</label>
          </div>
          <br/>
          {locationActive &&
            <input
              style={{width: '50%'}}
              type='string'
              onChange={e => onChange(e)}
              value={projectlocation}
              name='projectlocation'
              placeholder='e.g California, US'
            />
          }
          <div className='cp-input-checkbox'>
            <input
            type='checkbox'
            onClick={addDuration}
            /> <label>Specific duration?</label>
          </div>
          {durationActive &&
            <select
              onChange={e => onChange(e)}
              value={projectduration}
              name='projectduration'>
            <option value="" disabled selected hidden>Duration</option>
            <option value="0-30 Days">0-30 Days</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="+12 Months">+12 Months</option>
          </select>
          }

        </div>

      {changeSkills && <ProjectSkills formData={formData} addProjectSkills={addProjectSkills} unSelectSkills={unSelectSkills}/>}

      <div className='cp-button-section'>
        <Button
          onClick={goToBasics}
          className="button bad"
        >Back</Button>
        <Button
          onClick={nextPage}
          className='button primary'
        >Continue</Button>
    </div>
  </>
  )
}
