import {useState} from 'react';
import styled from 'styled-components';

import PostJobBasics from './PostJobBasics';
import PostJobDetails from './PostJobDetails';
import PostJobSummary from './PostJobSummary';

export default function CreateProject() {
  const [formData, setFormData] = useState({
      jobname: '',
      jobwebsite: '',
      jobdescription: '',
      jobskills: '',
      jobreward: '',
      joblocation: '',
      jobduration: ''
    });

    const {
      jobname,
      jobdescription,
      jobskills,
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

    const updateJobSkills = (e) => {
      setFormData({...formData, jobskills: e})
    }

    const deleteSkills = (e) => {
      if (formData.jobskills) {
        setFormData(prevSkills => {
          const updatedSkills = prevSkills.jobskills.filter(skill => skill !== e);
          return updatedSkills;
        })
      }
    };

    const createJob = async (e) => {
      e.preventDefault();
      console.log(formData);
    }

  return (
  <>
    <CreateProjectBox>
      <form onSubmit={e => createProject(e)}>
      {basicsPage ? <
        PostJobBasics
        goToDetails={goToDetails}
        goBack={goBack}
        formData={formData}
        onChange={onChange}
        /> : null}

      {detailsPage ?
      <PostJobDetails
        goToBasics={goToBasics}
        goToSummary={goToSummary}
        formData={formData}
        setFormData={setFormData}
        updateJobSkills={updateJobSkills}
        deleteSkills={deleteSkills}
        locationActive={locationActive}
        durationActive={durationActive}
        addLocation={addLocation}
        addDuration={addDuration}
        onChange={onChange}
        /> : null}

      {summaryPage ?
        <PostJobSummary
        formData={formData}
        goToDetails={goToDetails}
        goToBasics={goToBasics}
        createProject={createProject}
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
