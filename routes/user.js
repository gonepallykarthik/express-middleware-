const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.get("/user/me", auth, async (req, res) => {
  try {
    const users = await req.user;
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/user/signin", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const token = await newUser.generateAuthToken();
    await newUser.save();

    res.status(201).send({ newUser, token: token });
  } catch (e) {
    console.log(e);
  }
});
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCred(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ success: "true", user, token });
  } catch (error) {
    res.send("error").status(400);
  }
});

module.exports = router;
