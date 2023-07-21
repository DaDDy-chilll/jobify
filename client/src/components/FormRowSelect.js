const FormRowSelect = ({ labelText, name, value, handleChange, lists }) => {
  return (
    <div className="form-row">
      <label htmlFor="jobType" className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        className="form-select"
        value={value}
        onChange={handleChange}
      >
        {lists.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
