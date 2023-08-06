import expres from "express";
import reateLimiter from "express-rate-limit";
import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logout,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import test from "../middleware/test.js";
const router = expres.Router();

const apiLimiter = reateLimiter({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 10,
  message:
    "Too many requrests from this IP address, please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/logout").get(logout);
router.route("/updateUser").patch(authenticateUser, test, updateUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
