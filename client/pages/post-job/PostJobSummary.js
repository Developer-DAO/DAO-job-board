// UI & CSS
import Button from '../UI-Components/Button'

export default function PostJobSummary ({
  formData,
  goToDetails,
  createProject,
  goToBasics}) {

const {
    projectname,
    projectdescription,
    projectskills,
    projectwebsite,
    projectreward,
    projectamount,
    projectlocation,
    projectduration
  } = formData;

  return (
    <>
    <div className='cp-top'>
      <h1>Project Summary</h1>
      <h2><em>Check that everything is correct {'(click edit if not)'}</em></h2>
    </div>

      <div className='cp-summary-sections'>
        <h2>Project Basics</h2>
        <Button
          onClick={goToBasics}
          className='button random'
        >Edit</Button>
        </div>
        <br/>
          <div className='cp-summary-sections'>
          <h4>Name:</h4>{' '}<p>{projectname}</p>
        </div>
        <br/>
        <div className='cp-summary-sections'>
          <h4>Description:</h4>{' '}{projectdescription}
        </div>
        <br/>
        <div className='cp-summary-sections'>
          <h4>Link to Project:</h4>{' '}{projectwebsite}
        </div>
        <br/>

      <div className='cp-summary-sections'>
        <h2>Project Details</h2>
        <Button
          onClick={goToDetails}
          className='button random'
        >Edit</Button>
      </div>

        <h4>Skills:</h4>
        <div className='cp-skills-section'>
        {projectskills.length > 0 && projectskills.map((skill, index) => (
          <>
          <div key={index}>
              <p><i class="fas fa-check"></i> {' '}{skill}</p>
          </div>
          </>
        ))}
        </div>
      <br/>
      {formData && projectreward && projectamount ? (<div className='cp-summary-sections'>
        <h4>Project Reward:</h4>{' '} <p>{projectamount}{' '}{projectreward}</p>
      </div>) : null}
      <br/>
      {formData && projectlocation ? (<div className='cp-summary-sections'>
        <h4>Location:</h4>{' '}<p>{projectlocation}</p>
      </div>) : null}
      <br/>
      {formData && projectduration ? (<div className='cp-summary-sections'>
      <h4>Duration:</h4>{' '}<p>{projectduration}</p>
      </div>) : null}



      <div className='cp-button-section'>
        <Button
          onClick={goToDetails}
          className="bad"
        >Back</Button>
        <Button
          type='submit'
          className='button primary'
          onClick={createProject}
        >Create Project</Button>
      </div>
    </>
  )
}
