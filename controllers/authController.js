//todo-------
// import { User } from "../db/connect.js";
import User from "../models/User.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  //todo-------
  // const userAlreadyExist = false;
  const userAlreadyExist = await User.findOne({ email });

  if (userAlreadyExist) {
    throw new BadRequestError("Email already in use");
  }

  //todo-------
  const user = await User.create({ name, email, password });
  // const user = User.push({ name, email, password });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  //todo-------
  // const user = User.findOne(email);
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  //todo-------
  const isPasswordCorrect = await user.comparePassword(password);
  // const isPasswordCorrect = User.comparePaswword(user);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  // todo-------
  // const token = User.createJWT(user);
  const token = user.createJWT();

  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }
  //todo--------------
  const user = await User.findOne({ _id: req.user.userId });
  console.log(user);
  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;
  await user.save();
  // const user = User.update(req.user.userId, {
  //   email,
  //   name,
  //   lastName,
  //   location,
  // });

  //todo------------
  const token = user.createJWT();
  // const token = User.createJWT(user);

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export { register, login, updateUser };
