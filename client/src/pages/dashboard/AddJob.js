import { FromRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit page" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FromRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FromRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FromRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            lists={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            name="jobType"
            labelText="type"
            value={jobType}
            handleChange={handleJobInput}
            lists={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
