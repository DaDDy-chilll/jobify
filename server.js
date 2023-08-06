import { config } from "dotenv";
config();
import path, { dirname } from "path";
import express from "express";
// import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import "express-async-errors";

//todo-------
import connectDB from "./db/connect.js";

//router
import authRouter from "./routes/authRouter.js";
import jobsRouters from "./routes/jobsRouter.js";

//middlewore
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
import { fileURLToPath } from "url";

import helmet from "helmet";
import xss from "xss-purge";
import mongoSanitize from "express-mongo-sanitize";

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());
// app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// app.get("/api/v1", (req, res) => {
//   res.json({ msg: "hello world" });
// });

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouters);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    //todo-------
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
