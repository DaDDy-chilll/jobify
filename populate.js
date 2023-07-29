import { readFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Job from "./models/Job.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    // await Job.deleteMany();
    // const jsonProducts = JSON.parse(
    //   await readFile(new URL("./mock-data.json", import.meta.url))
    // );

    const update = await Job.updateMany(
      {
        jobType: "full-time",
      },
      {
        updatedAt: "2022-08-19T09:53:09.275+00:00",
      }
    );
    console.log(update);
    // await Job.create(jsonProducts);
    console.log("success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
