import { useState } from "react";
import { Box } from "../../styles/styles";

//The number in the file names tell you which step in the form they are
import GigBasics from "./1_GigBasics";
import GigDetails from "./2_GigDetails";
import GigSummary from "./3_GigSummary";

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

  const createGig = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  const nextPage = async (e) => {
    e.preventDefault();

    if (basicsPage) {
      goToDetails();
    } else if (detailsPage) {
      goToSummary();
    } else if (summaryPage) {
      createGig(e);
    }
  };

  return (
      <Box>
        <form>
          {basicsPage ? (
            <GigBasics
              goToDetails={goToDetails}
              goBack={goBack}
              formData={formData}
              onChange={onChange}
              nextPage={nextPage}
            />
          ) : null}

          {detailsPage ? (
            <GigDetails
              goToBasics={goToBasics}
              goToSummary={goToSummary}
              formData={formData}
              setFormData={setFormData}
              updateGigCategory={updateGigCategory}
              deleteCategory={deleteCategory}
              timeframeActive={timeframeActive}
              addTimeframe={addTimeframe}
              onChange={onChange}
              nextPage={nextPage}
            />
          ) : null}

          {summaryPage ? (
            <GigSummary
              formData={formData}
              goToDetails={goToDetails}
              goToBasics={goToBasics}
              createGig={createGig}
              nextPage={nextPage}
            />
          ) : null}
        </form>
      </Box>
  );
}
