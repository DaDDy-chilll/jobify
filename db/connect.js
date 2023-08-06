import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;

// // ! Custome DB

// import jwt from "jsonwebtoken";
// const user = [
//   {
//     id: "64cf7e0d35949f14130c6b4f",
//     name: "daddy",
//     email: "daddy@gmail.com",
//     password: "123456",
//     location: "Myanmar",
//     lastName: "chill",
//   },
//   {
//     id: "6wb52s9714422c23b10a8d76",
//     name: "test",
//     email: "test@gmail.com",
//     password: "test123",
//     location: "Myanmar",
//     lastName: "test",
//   },
// ];

// const User = {
//   push: (data) => {
//     if (data) {
//       const newData = { ...data, location: "Myanmar", lastName: "zar" };
//       user.push(newData);
//       const newUser = user[user.length - 1];
//       return {
//         ...newUser,
//         createJWT: () => {
//           return jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
//             expiresIn: process.env.JWT_LIFETIME,
//           });
//         },
//       };
//     } else {
//       return user;
//     }
//   },
//   get: user,
//   delete: (data) => {
//     for (let i = 0; i < user.length; i++) {
//       if (user[i].id === data.id) {
//         user.splice(i, 1);
//       }
//     }
//   },
//   update: (data, newData) => {
//     const foundUser = user.filter((u) => u.id === data)[0];
//     foundUser.email = newData.email;
//     foundUser.name = newData.name;
//     foundUser.lastName = newData.lastName;
//     foundUser.location = newData.location;
//     return foundUser;
//   },
//   findOne: (email) => {
//     return user.filter((d) => d.email === email)[0];
//   },
//   comparePaswword: (data) => {
//     return user.filter((u) =>
//       u.email === data.email && u.password === data.password ? true : false
//     )[0];
//   },
//   createJWT: (user) => {
//     return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: process.env.JWT_LIFETIME,
//     });
//   },
// };

// import { readFile } from "fs/promises";
// const job = JSON.parse(
//   await readFile(new URL("../mock-data.json", import.meta.url))
// );

// const Job = {
//   create(data) {
//     job.push(data);
//     return job[job.length - 1];
//   },
//   find(id) {
//     return job.filter((j) => j.createBy === id);
//   },
//   findOne(id) {
//     return job.filter((j) => j._id === id);
//   },
//   findOneAndUpdate(id, data, options) {
//     const found = this.findOne(id)[0];
//     found.company = data.company;
//     found.position = data.position;
//     found.status = data.status;
//     found.jobType = data.jobType;
//     found.jobLocation = data.jobLocation;
//     return found;
//   },
//   deleteOne(job) {
//     const found = this.findOne(job.id)[0];
//     const foundIndx = job.indexOf(found);
//     job.splice(foundIndx, 1);
//   },
// };

// export { User, Job };
