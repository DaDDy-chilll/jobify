//todo----------------
import Job from "../models/Job.js";
// import { Job } from "../db/connect.js";
import mongoose from "mongoose";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import checkPermissions from "../utils/checkPermission.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  console.log(req.body);

  //todo-------------------
  // const job = await Job.create(req.body);
  const job = await Job.create(req.body);
  console.log(job);

  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  //todo----------
  const jobs = await Job.find({ createdBy: req.user.userId });
  // const jobs = await Job.find(req.user.userId);

  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  //todo------------------
  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id:${jobId}`);
  }

  //!  check premissions
  //todo------
  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedJob });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`No job with id:${jobId}`);
  }
  //!  check premissions
  checkPermissions(req.user, job.createdBy);

  //todo-------------------
  await job.deleteOne();
  // Job.deleteOne(job)

  res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
};

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = [];
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

export { createJob, getAllJobs, deleteJob, updateJob, showStats };
