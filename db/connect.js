import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;


//! Custome DB

// const user = [
//   { id: 1, name: "maung maung", email: "maung@gmail.com", password: "123456" },
//   { id: 2, name: "zaw", email: "zaw@gmail.com", password: "123456" },
//   { id: 3, name: "aung", email: "aung@gmail.com", password: "123456" },
//   { id: 4, name: "tun", email: "tun@gmail.com", password: "123456" },
// ];

// const User = {
//   push: (data) => {
//     if (data) {
//       user.push(data);
//       return user[user.length - 1];
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
//   update: (data) => {
//     [...user, { data }];
//   },
// };

// const Auth = [];

// export { User, Auth };
