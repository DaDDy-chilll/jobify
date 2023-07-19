const FromRow = ({ type, name, values, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={values}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FromRow;
