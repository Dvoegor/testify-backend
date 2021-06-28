const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const Questions = require("../models/Questions");
const Words = require("../models/Words");

//FIXME: add verifyToken to router

router.get("/", (req, res) => {
  const testId = req.query.testId;

  Questions.findAll({
    raw: true,
    where: { test_id: testId },
  })
    .then((data) => {
      // console.log(data);

      let wordIdArr = []

      data.forEach(element => {
        wordIdArr.push(element.word_id)
      });

      // console.log(wordIdArr)
      Words.findAll({ raw: true, where: { id: wordIdArr } })
          .then((data) => {
            // console.log(data)
            res.send(data);
          })
          .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});

module.exports = router;
