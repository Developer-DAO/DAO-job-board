import {useState} from 'react';
import {Box} from '../../styles/styles';

import PostJobBasics from './PostJobBasics';
import PostJobDetails from './PostJobDetails';
import PostJobSummary from './PostJobSummary';

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

    const createProject = async (e) => {
      e.preventDefault();
      console.log(formData);
    }

  return (
  <>
    <Box>
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
    </Box>
  </>
  )
}
