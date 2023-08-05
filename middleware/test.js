import { BadRequestError } from "../errors/index.js";

const test = (req, res, next) => {
  if (req.user.test) {
    throw new BadRequestError("test user, read only");
  }
  next();
};
export default test;
