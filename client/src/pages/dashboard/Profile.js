import { useState } from "react";
import { FromRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FromRow
            type="text"
            name="name"
            values={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FromRow
            type="text"
            name="lastName"
            labelText="last name"
            values={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FromRow
            type="email"
            name="email"
            values={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FromRow
            type="text"
            name="location"
            values={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
