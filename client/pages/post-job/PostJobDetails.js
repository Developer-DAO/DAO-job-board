import styled from 'styled-components';
import Button from '../UI-Components/Button';
import {Top,
  InputSection,
  Input,
  InputTitles,
  SkillsSection,
  ButtonSection
} from './styles';

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
        <em>Describe your perfect dev</em>
      </Top>

        <InputSection>
          <h2 className='cp-input-titles'>Pick the skills</h2>

          <Button
            onClick={selectSkills}>
            Select Skills
          </Button>
          <SkillsSection>
              {formData.projectskills.length > 0 && formData.projectskills.map((skill, index) => (
              <>
              <div className='cp-skill-buttons' key={index}>
                  <Button
                    onClick={e => deleteSkills(e)}
                    >{skill}</Button>
              </div>
              </>
              ))}
          </SkillsSection>

          <InputTitles>Explain reward method {'(optional)'}</InputTitles>
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

          <Input
            placeholder='Amount'
            name='projectamount'
            value={projectamount}
            onChange={e => onChange(e)}
            type='number'
          />
          <InputTitles>Location {'(optional)'}</InputTitles>
          <div className='cp-input-checkbox'>
            <Input
            type='checkbox'
            onClick={addLocation}
            /> <label>Location specific?</label>
          </div>
          <br/>
          {locationActive &&
            <Input
              style={{width: '50%'}}
              type='string'
              onChange={e => onChange(e)}
              value={projectlocation}
              name='projectlocation'
              placeholder='e.g California, US'
            />
          }
          <div className='cp-input-checkbox'>
            <Input
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

        </InputSection>

      {changeSkills && <ProjectSkills formData={formData} addProjectSkills={addProjectSkills} unSelectSkills={unSelectSkills}/>}

      <ButtonSection>
        <Button
          onClick={goToBasics}
        >Back</Button>
        <Button
          onClick={nextPage}
        >Continue</Button>
    </ButtonSection>
  </>
  )
}
