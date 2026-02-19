const express = require("express");
const { requireAuth } = require("../middleware/auth");
const home = require("../views/home");
const dashboard = require("../views/dashboard");
const User = require("../models/User");

const router = express.Router();

router.get("/", (req,res)=> res.send(home()));

router.get("/dashboard", requireAuth, async (req,res)=>{
  const user = await User.findById(req.user.id);
  res.send(dashboard(user));
});

module.exports = router;