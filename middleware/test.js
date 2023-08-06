import { BadRequestError } from "../errors/index.js";

const test = (req, res, next) => {
  if (req.user.test) {
    throw new BadRequestError("Test User, Read Only!");
  }
  next();
};
export default test;
