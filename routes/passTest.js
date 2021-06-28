const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const Answers = require("../models/Answers");

//FIXME: add verifyToken to router

router.post("/", async (req, res) => {
  const testId = req.body.testId;
  async function createListOfAnswers() {
    req.body.answerList.map((item) => {
      Answers.create({
        test_id: testId,
        word_id: item[0],
        answer: item[1],
      });
    });
  }

  await createListOfAnswers()
    .then((data) => {
      console.log("ok");
    })
    .catch((err) => res.send(err));
});

module.exports = router;
