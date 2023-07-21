//todo----------------
// import Job from "../models/Job.js";
import { Job } from "../db/connect.js";

import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;

  //todo-------------------
  // const job = await Job.create(req.body);
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
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
