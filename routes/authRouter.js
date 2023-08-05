import expres from "express";
import reateLimiter from "express-rate-limit";
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
const router = expres.Router();

const apiLimiter = reateLimiter({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 10,
  message:
    "Too many requrests from this IP address, please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
