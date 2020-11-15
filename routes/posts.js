const express = require("express");
const moment = require("moment");
const router = express.Router();
const { Post, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

const today = moment();
console.log(today);
const value = today.format("YYYYMMDD");
console.log(value);

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: {
        date: value,
        UserId: req.user.id,
      },
    });
    res.status(201).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: {
        date: req.body.month,
        UserId: req.user.id,
      },
    });
    res.status(201).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
