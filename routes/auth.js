const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");

router.get("/login", authController.getLoginPage);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignupPage);
router.post("/signup", authController.postSignup);

module.exports = router;
