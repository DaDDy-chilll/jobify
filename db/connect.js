// import mongoose from "mongoose";

// const connectDB = (url) => {
//   return mongoose.connect(url);
// };

// export default connectDB;

// //! Custome DB

import jwt from "jsonwebtoken";
const user = [
  {
    id: 1,
    name: "maung maung",
    email: "maung@gmail.com",
    password: "123456",
    location: "Myanmar",
    lastName: "aung",
  },
  {
    id: 2,
    name: "zaw",
    email: "zaw@gmail.com",
    password: "123456",
    location: "Myanmar",
    lastName: "ye",
  },
  {
    id: 3,
    name: "aung",
    email: "aung@gmail.com",
    password: "123456",
    location: "Myanmar",
    LlastName: "kyaw",
  },
  {
    id: 4,
    name: "tun",
    email: "tun@gmail.com",
    password: "123456",
    location: "Myanmar",
    LlastName: "zar",
  },
  {
    id: 5,
    name: "john",
    email: "john@gmail.com",
    password: "123456",
    location: "USA",
    LlastName: "smith",
  },
];

const User = {
  push: (data) => {
    if (data) {
      const newData = { ...data, location: "Myanmar", LlastName: "zar" };
      user.push(newData);
      const newUser = user[user.length - 1];
      return {
        ...newUser,
        createJWT: () => {
          return jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
          });
        },
      };
    } else {
      return user;
    }
  },
  get: user,
  delete: (data) => {
    for (let i = 0; i < user.length; i++) {
      if (user[i].id === data.id) {
        user.splice(i, 1);
      }
    }
  },
  update: (data) => {
    [...user, { data }];
  },
  findOne: (email) => {
    return user.filter((d) => d.email === email)[0];
  },
  comparePaswword: (data) => {
    return user.filter((u) =>
      u.email === data.email && u.password === data.password ? true : false
    )[0];
  },
  createJWT: (user) => {
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
  },
};

const Auth = [];

export { User, Auth };
