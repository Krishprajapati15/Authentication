const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");

router.get("/dashboard", userController.getDashboardPage);

module.exports = router;
