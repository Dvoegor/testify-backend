const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const Questions = require("../models/Questions");
const Words = require("../models/Words");

//FIXME: add verifyToken to router

router.get("/", async (req, res) => {
  const testId = req.query.testId;

  Questions.findAll({
    raw: true,
    where: { test_id: testId },
  })
    .then((questionsData) => {
        let resultArr = [];
        let newArr = []
        // console.log(questionsData[0].word_id)
        for (let index = 0; index < questionsData.length; index++) {
            Words.findByPk(questionsData[index].word_id)
            .then((wordsData) => {
                // console.log(wordsData.dataValues)
                newArr = [              wordsData.dataValues.question,
                  wordsData.dataValues.answer,
                  questionsData[index].answers_qnt,
                  questionsData[index].right_answers_qnt,]
                //   console.log(newArr)
              // resultArr.push([
              //   wordsData.question,
              //   wordsData.answer,
              //   item.answers_qnt,
              //   item.right_answers_qnt,
              // ]);
               
            })
            return resultArr.push(newArr)
        }
        console.log(resultArr)
    //   const arr = questionsData.map((item, index) => {
    //     Words.findByPk(item.word_id)
    //       .then((wordsData) => {
    //           newArr = [              wordsData.question,
    //             wordsData.answer,
    //             item.answers_qnt,
    //             item.right_answers_qnt,]
    //             // console.log(newArr)
    //         // resultArr.push([
    //         //   wordsData.question,
    //         //   wordsData.answer,
    //         //   item.answers_qnt,
    //         //   item.right_answers_qnt,
    //         // ]);
    //         return resultArr.push(newArr)
    //       })
    //     //   return resultArr
    //     //   .catch((err) => res.send(err));
    //   });
      console.log(arr);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
