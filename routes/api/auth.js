const express = require("express");
const { validateBody } = require("../../middlewares");
const { registerSchema } = require("../../models/user");
const ctrl = require("../../controllers/auth");
const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);
router.post("/login", validateBody(registerSchema), ctrl.login);

module.exports = router;
