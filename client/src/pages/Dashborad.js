import { useEffect } from "react";
const Dashborad = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <h1>Dashborad</h1>;
};
export default Dashborad;
