const express = require("express");
const passport = require("../config/passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile","email"] }));

router.get("/google/callback",
passport.authenticate("google", { session:false }),
async (req,res)=>{
  const profile = req.user;

  const user = await User.findOneAndUpdate(
    { googleId: profile.id },
    {
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails?.[0]?.value,
      picture: profile.photos?.[0]?.value
    },
    { upsert:true, new:true }
  );

  const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET);

  res.cookie("access_token", token, { httpOnly:true });
  res.redirect("/dashboard");
});

router.get("/logout",(req,res)=>{
  res.clearCookie("access_token");
  res.redirect("/");
});

module.exports = router;