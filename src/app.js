const express = require("express");
const cookieParser = require("cookie-parser");

const auth = require("./routes/auth.routes");
const pages = require("./routes/pages.routes");

const app = express();

app.use(cookieParser());

app.use("/auth", auth);
app.use("/", pages);

module.exports = app;