import React, {useState, useEffect} from 'react'

//UI
import Button from '../../styles/UI-Components/Button';
import styled from 'styled-components';

//Components and Utils
import {skillList} from '../../Utils/SkillsList';

export default function SelectSkills ({
  formData,
  unSelectSkills,
  addProjectSkills
}) {

    const [searchSkills, setSearchSkills] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [skillConfirm, setSkillConfirm] = useState(false)

    // Receives the skills from state and adds them to the front-end
    useEffect(() => {
        if (formData.projectskills) {
          formData.projectskills.forEach(skill => {
            const e = skill
            selectSkill(e);
          })
        }
     }, [formData])

    let skills1 = skillList;

    const addSkills = (event) => {
      event.preventDefault()
      addProjectSkills(selectedSkills);
      unSelectSkills();
    }

  // Adds the selected skills to the Selected Skills section
    const selectSkill = (e) => {
      const isInArray = selectedSkills.find(skill => skill.skill === e);
      if (isInArray || selectedSkills.length >= 6) {return}

      setSelectedSkills(prevSkills => {
        const updatedSkills = [...prevSkills];
        updatedSkills.unshift({skill: e, id: Math.random().toString()});
        return updatedSkills;
      }
    )
      setSkillConfirm(true);
    }

  // Deletes the skills in the Selected Skill section on click
  const deleteSkills = (e) => {
    setSelectedSkills(prevSkills => {
      const updatedSkills = prevSkills.filter(skill => skill.id !== e);
      return updatedSkills;
    })
  };

    return (
    <div>
      <Backdrop onClick={unSelectSkills}>
      </Backdrop>

        <SelectSkillsBox>
          <SkillsWindow>
          <SkillsWindowHeader>Choose Skills</SkillsWindowHeader>

          <SkillsForm action="/" method="get">
            <SkillsWindowLabel style={{marginBottom: '0px'}}>
            Search Skills
            </SkillsWindowLabel>
            <SkillsSearch
              value={searchSkills}
              onInput={e => setSearchSkills(e.target.value)}
              type="text"
              id="header-search"
              placeholder="Write your desired skill"
              name="s"
            />
          </SkillsForm>

          <SkillList>
            {skills1.filter((skill) => {
              if (searchSkills === '') {
                return skill
              } else if
               (skill.name.toLowerCase().includes(searchSkills.toLowerCase())) {
                return skill
              } {return false};
            }).map((skill, index) => (
               <SkillsBadge
                key={index}
                onClick={e => selectSkill(skill.name)}
                >
                {skill.name}
              </SkillsBadge>
            ))}
          </SkillList>

          {skillConfirm && selectedSkills ? (
            <SelectedSkills>
              <h3>Selected Skills</h3>
            {selectedSkills && selectedSkills.map((skill, index) => (
                <SelectedSkillsBadge
                  key={index}
                  onClick={e => deleteSkills(skill.id)}>
                  {skill.skill}
                </SelectedSkillsBadge>
            ))}
            </SelectedSkills>
          ) : null}

          <SelectSkillsButtons>
            <Button
              className='primary'
              onClick={addSkills}>
              Add Skills
            </Button>
            <Button
              className='bad'
              onClick={unSelectSkills}
            >
              Cancel
            </Button>
          </SelectSkillsButtons>
        </SkillsWindow>
      </SelectSkillsBox>
    </div>
  )
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const SelectSkillsBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  margin-top: 10%;
  width: 50%;
  z-index: 10;
  overflow: hidden;
  text-align: center;
`;

const SkillsWindow = styled.div`
  float: center;
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: 0 2px 12px gray;
  border-radius: 10px;
  overflow: hidden;
`;

const SkillsWindowHeader = styled.header`
  background: gray;
  padding: 1rem;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

const SkillsWindowLabel = styled.label`
 padding: 1rem;
 margin-right: -10px !important;
 font-size: 20px !important;
`;

const SkillsForm = styled.form`
  display: block;
  margin: 10px;
`;

const SkillList = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  text-overflow: clip;
  word-break: break-all;
  white-space: pre-wrap;
  overflow: auto;
`;

const SelectedSkills = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  text-overflow: clip;
  word-break: break-all;
  white-space: pre-wrap;
`;

const SelectedSkillsBadge = styled(Button)`
  margin: 2.5px !important;
  width: 8rem !important;
  height: 50px !important;
  padding: 1px !important;
  font-size: 15px;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 12px;
  transition: all 0.5s ease;

  &:hover {
    background-color: red !important;
  }
`;

const SelectSkillsButtons = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const SkillsBadge = styled(Button)`
  margin: 2.5px !important;
  width: 8rem !important;
  height: 17% !important;
  padding: 1px !important;
  font-size: 15px;
  cursor: pointer;
  background-color: lightblue;
  color: black;
  border-radius: 12px;
  transition: all 0.5s ease;
`;

const SkillsSearch = styled.input`
  text-align: left !important;
  position: relative;
  font: inherit;
  margin-top: -0.5px;
  margin-bottom: 10px;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 300px;
`;
