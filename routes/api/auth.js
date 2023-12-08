const express = require("express");
const {
  validateBody,
  authenticate,
  upload,
  isEmptyBody,
} = require("../../middlewares");
const { registerSchema, userEmailSchema } = require("../../models/user");
const ctrl = require("../../controllers/auth");
const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);
router.get("/verify/:verificationToken", ctrl.verify);
router.post("/verify", validateBody(userEmailSchema), ctrl.resendVerify);
router.post("/login", validateBody(registerSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);
module.exports = router;
