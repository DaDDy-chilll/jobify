import jwt from "jsonwebtoken";
import UnAuthenticatedError from "../errors/unauthenticated.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    console.log("error");
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const test = payload.userId === "123343123234";
    req.user = { userId: payload.userId, test };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};
export default auth;
