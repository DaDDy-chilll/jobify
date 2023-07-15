import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  const defautlError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };
  if (err.name === "ValidationError") {
    defautlError.statusCode = StatusCodes.BAD_REQUEST;
    // defautlError.msg = err.message;
    defautlError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }

  if (err.code && err.code === 11000) {
    defautlError.statusCode = StatusCodes.BAD_REQUEST;
    defautlError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }
  res.status(defautlError.statusCode).json({ msg: defautlError.msg });
  // res.status(defautlError.statusCode).json({ msg: err });
};
export default errorHandlerMiddleware;
