const express = require("express");
const router = express.Router();

const homeRoutes = require("./home.js");
const authRoutes = require("./auth.js");
const userRoutes = require("./user.js");

router.use("/", homeRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
