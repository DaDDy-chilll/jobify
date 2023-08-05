import express from "express";
import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";
import test from "../middleware/test.js";

const router = express.Router();

router.route("/").post(test, createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(test, deleteJob).patch(test, updateJob);

export default router;
