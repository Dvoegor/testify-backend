const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const Answers = require("../models/Answers");
const Words = require("../models/Words");
const Questions = require("../models/Questions");

//FIXME: add verifyToken to router

router.post("/", async (req, res) => {
  const testId = req.body.testId;
  const profileId = req.body.profileId;
  async function createListOfAnswers() {
    req.body.answerList.map((item) => {
      // Words.findAll({
      //   raw: true,
      //   where: { id: item[0] },
      // })
      Words.findByPk(item[0])
        .then((data) => {
          let isCorrect;
          data.answer.toLowerCase() === item[1].trim().toLowerCase()
            ? (isCorrect = 1)
            : (isCorrect = 0);
          Answers.create({
            test_id: testId,
            word_id: item[0],
            answer: item[1],
            profile_id: profileId,
            isCorrect: isCorrect,
          })
            .then(() => {
              Questions.increment(
                { answers_qnt: 1, right_answers_qnt: isCorrect},
                { where: { test_id: testId, word_id: item[0] } }
              )
            })
            .catch((err) => res.send(err));
        })
        .catch((err) => res.send(err));
    });
  }

  await createListOfAnswers()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
