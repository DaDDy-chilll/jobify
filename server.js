import { config } from "dotenv";
config();
import express from "express";
// import cors from "cors";
import "express-async-errors";

//  import connectDB from "./db/connect.js";

//router
import authRouter from "./routes/authRouter.js";
import jobsRouters from "./routes/jobsRouter.js";

//middlewore
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(cors());

app.get("/api/v1", (req, res) => {
  res.json({ msg: "hello world" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouters);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
