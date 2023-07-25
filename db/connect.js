import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;

// ! Custome DB

// import jwt from "jsonwebtoken";
// const user = [
//   {
//     id: 1,
//     name: "maung maung",
//     email: "maung@gmail.com",
//     password: "123456",
//     location: "Myanmar",
//     lastName: "aung",
//   },
//   {
//     id: 2,
//     name: "zaw",
//     email: "zaw@gmail.com",
//     password: "123456",
//     location: "Myanmar",
//     lastName: "ye",
//   },
//   {
//     id: 3,
//     name: "aung",
//     email: "aung@gmail.com",
//     password: "123456",
//     location: "Myanmar",
//     lastName: "kyaw",
//   },
//   {
//     id: 4,
//     name: "tun",
//     email: "tun@gmail.com",
//     password: "123456",
//     location: "Myanmar",
//     lastName: "zar",
//   },
//   {
//     id: 5,
//     name: "john",
//     email: "john@gmail.com",
//     password: "123456",
//     location: "USA",
//     lastName: "smith",
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

// const job = [
//   {
//     id: 1,
//     company: "google",
//     position: "front-end developer",
//     status: "interview",
//     jobType: "remote",
//     jobLocation: "japan",
//     createBy: 2,
//   },
//   {
//     id: 2,
//     company: "facebook",
//     position: "Data Analysis",
//     status: "pending",
//     jobType: "full-time",
//     jobLocation: "USA",
//     createBy: 3,
//   },
//   {
//     id: 3,
//     company: "tesla",
//     position: "python developer",
//     status: "declined",
//     jobType: "part-time",
//     jobLocation: "china",
//     createBy: 1,
//   },
//   {
//     id: 4,
//     company: "nasa",
//     position: "full-stack developer",
//     status: "pending",
//     jobType: "internship",
//     jobLocation: "USA",
//     createBy: 4,
//   },
//   {
//     id: 4,
//     company: "Cisco",
//     position: "full-stack developer",
//     status: "pending",
//     jobType: "full-time",
//     jobLocation: "UK",
//     createBy: 3,
//   },
// ];

// const Job = {
//   create(data) {
//     job.push(data);
//     return job[job.length - 1];
//   },
//   find(id) {
//     return job.filter((j) => j.createBy === id);
//   },
// };

// export { User, Job };
