const createJob = async (req, res) => {
  console.log(req.user);
  res.send("create job");
};

const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};

const updateJob = async (req, res) => {
  res.send("update job");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

const showStats = async (req, res) => {
  res.send("show stats");
};

export { createJob, getAllJobs, deleteJob, updateJob, showStats };
