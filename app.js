const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const config = require("./config");
const PORT = 8000;

const app = express();

mongoose

  .connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("error:", error);
  });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true,
  })
);

const homeRoutes = require("./routes/home.js");
const indexRoutes = require("./routes/index.js");
const userRoutes = require("./routes/user.js");
const authRoutes = require("./routes/auth.js");

app.use("/", indexRoutes);
app.use("/home", homeRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
