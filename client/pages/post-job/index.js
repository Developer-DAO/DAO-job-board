import {useState} from 'react';
import styled from 'styled-components';

import CreateProjectBasics from './CreateProjectBasics';
import CreateProjectDetails from './CreateProjectDetails';
import CreateProjectSummary from './CreateProjectSummary';

export default function CreateProject() {
  const [formData, setFormData] = useState({
      projectname: '',
      projectwebsite: '',
      projectdescription: '',
      projectskills: '',
      projectreward: '',
      projectlocation: '',
      projectduration: ''
    });

    const {
      projectname,
      projectdescription,
      projectskills,
    } = formData;

    const [locationActive, setLocationActive] = useState(false)
    const [durationActive, setDurationActive] = useState(false)

    //Page States
    const [basicsPage, setBasicsPage] = useState(true);
    const [detailsPage, setDetailsPage] = useState(false);
    const [summaryPage, setSummaryPage] = useState(false);

    const goToBasics = () => {
      setBasicsPage(true);
      setDetailsPage(false);
      setSummaryPage(false);
    }

    const goToDetails = () => {
      setDetailsPage(true);
      setBasicsPage(false);
      setSummaryPage(false);
    }

    const goToSummary = () => {
      setSummaryPage(true);
      setDetailsPage(false);
    }

    const goBack = () => {
      history.goBack();
    }

    const addLocation = () => {
      setLocationActive(true);
    }
    const addDuration = () => {
      setDurationActive(true);
    }

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const updateProjectSkills = (e) => {
      setFormData({...formData, projectskills: e})
    }

    const deleteSkills = (e) => {
      if (formData.projectskills) {
        setFormData(prevSkills => {
          const updatedSkills = prevSkills.projectskills.filter(skill => skill !== e);
          return updatedSkills;
        })
      }
    };

    const createProject = async (e) => {
      e.preventDefault();
    }

  return (
  <>
    <CreateProjectBox>
      <form onSubmit={e => createProject(e)}>
      {basicsPage ? <
        CreateProjectBasics
        goToDetails={goToDetails}
        goBack={goBack}
        formData={formData}
        onChange={onChange}
        setAlert={setAlert}
        /> : null}

      {detailsPage ?
      <CreateProjectDetails
        goToBasics={goToBasics}
        goToSummary={goToSummary}
        formData={formData}
        setFormData={setFormData}
        updateProjectSkills={updateProjectSkills}
        deleteSkills={deleteSkills}
        locationActive={locationActive}
        durationActive={durationActive}
        addLocation={addLocation}
        addDuration={addDuration}
        onChange={onChange}
        setAlert={setAlert}
        /> : null}

      {summaryPage ?
        <CreateProjectSummary
        formData={formData}
        goToDetails={goToDetails}
        goToBasics={goToBasics}
        createProject={createProject}
        setAlert={setAlert}
        /> : null}
      </form>
    </CreateProjectBox>
  </>
  )
}

const CreateProjectBox = styled.div`
  box-sizing: border-box;
  border: 0px solid #000000;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25), 12px 12px 12px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  width: 80%;
  height: fit-content;
  padding: 5%;
  margin: auto;
`;
