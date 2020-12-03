const express = require("express");
const moment = require("moment");
const router = express.Router();
const { Post, User, Goal } = require("../models");
const { isLoggedIn } = require("./middlewares");

const today = moment();
const value = today.format("YYYYMMDD");

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const goal = await Goal.create({
      goalTitle: req.body.goalTitle,
      startLine: req.body.startLine,
      endLine: req.body.endLine,
      checkTotal: req.body.checkTotal,
      UserId: req.user.id,
    });
    res.status(201).json(goal);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/load", isLoggedIn, async (req, res, next) => {
  try {
    const goal = await Goal.findAll({
      where: {
        UserId: req.user.id,
      },
      order: [["createdAt", "DESC"]],
    });
    res.status(201).json(goal);
  } catch (err) {
    console.error(err);
    next(error);
  }
});

router.post("/check", isLoggedIn, async (req, res, next) => {
  try {
    const goal = await Goal.increment(
      {
        checkDone: 1,
      },
      {
        where: {
          UserId: req.user.id,
          id: req.body.goalId,
        },
      }
    );
    res.status(201).json(goal);
  } catch (err) {
    console.error(err);
    next(error);
  }
});

router.delete("/:goalId", isLoggedIn, async (req, res, next) => {
  try {
    await Goal.destroy({
      where: {
        id: req.params.goalId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ GoalId: parseInt(req.params.goalId) });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
